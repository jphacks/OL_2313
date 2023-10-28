import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  getDocs,
  collection,
  getDoc,
  updateDoc,
  doc,
  Timestamp,
  Query,
  query,
  orderBy,
} from "firebase/firestore";
import "./HomeContent.css";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Post {
  id?: string;
  title: string;
  imageUrl: string;
  tags: string[];
  likes: number;
  uploadedAt: Timestamp;
}

const HomeContent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // タグ検索ワード
  
  const [searchResults, setSearchResults] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const postQuery: Query = query(collection(db, "your-collection"), orderBy("uploadedAt", "desc"));
    const postCollection = await getDocs(postQuery);
    setPosts(postCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post)));
  };

  const handleLike = async (postId: string) => {
    const postRef = doc(db, "your-collection", postId);
    const post = await getDoc(postRef);
    if (post.exists()) {
      const currentLikes = post.data()?.likes || 0;
      await updateDoc(postRef, {
        likes: currentLikes + 1,
      });
      fetchPosts();
    }
  };

  const handleSearch = () => {
    const results = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.includes(searchTerm))
    );

    setSearchResults(results);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="home-content">
      <div>
        <input className="text-input"
          type="text"
          placeholder="検索ワードを入力"
          value={searchTerm} // 追加: 検索ワードを表示
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="text-button" onClick={handleSearch}>検索</button>
      </div>
      {searchTerm !== "" ? (
        // 検索結果を表示
        searchResults.map((post, index) => (
          <div key={index} className="post">
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <div className="post-details">
              <h3>{post.title}</h3>
              <button  className="text-button2" onClick={() => handleLike(post.id!)}><FavoriteIcon style={{marginRight: 8}}/> {post.likes}</button>
              <div className="post-tags">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="post-timestamp">
                {post.uploadedAt ? new Date(post.uploadedAt.seconds * 1000).toLocaleString() : "No Timestamp"}
              </div>
            </div>
          </div>
        ))
      ) : (
        // タブ切り替えコンテンツ
        posts.map((post, index) => (
          <div key={index} className="post">
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <div className="post-details">
              <h3>{post.title}</h3>
              <button  className="text-button2" onClick={() => handleLike(post.id!)}><FavoriteIcon style={{marginRight: 8}}/> {post.likes}</button>
              <div className="post-tags">
                {post.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="post-timestamp">
                {post.uploadedAt ? new Date(post.uploadedAt.seconds * 1000).toLocaleString() : "No Timestamp"}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeContent;
