import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from "../firebase";
import { getDocs, collection, getDoc, updateDoc, doc, Timestamp, Query, query, orderBy } from "firebase/firestore";
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Post {
  id?: string;
  title: string;
  imageUrl: string;
  tags: string[];
  likes: number;
  uploadedAt: Timestamp;
  resipe: string;
  recipeIntroduction: string;
  recipeBackground: string;
}

const DetailOfPost: React.FC = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const postId = searchParams.get("id");

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postId) {
      const postRef = doc(db, "your-collection", postId);
      
      getDoc(postRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            setPost({ ...docSnapshot.data(), id: postId } as Post);
          } else {
            console.log("データが見つかりません");
          }
        })
        .catch((error) => {
          console.error("データの取得中にエラーが発生しました", error);
        });
    }
  }, [postId]);

  return (
    <div className='archive-detail-content'>
      {post ? (
        <div>
          <img src={post.imageUrl} alt={post.title} className="post-image" />
          <p className='detail-text'>
            <h1>Player_11</h1>
            <p className='archive-detail-flex'>
              <p><FavoriteIcon style={{marginRight: 8, color: "red"}}/></p>
              <p style={{color: "red"}}>{post.likes}</p>
            </p>
            <p className='detail-tag'>#{post.tags.join(", ")}</p>
            <p className='detail-timestamp'>{post.uploadedAt ? new Date(post.uploadedAt.seconds * 1000).toLocaleString() : "No Timestamp"}</p>
          </p>
          <p>{post.resipe}</p>
          <p>{post.recipeIntroduction}</p>
          <p>{post.recipeBackground}</p>
        </div>
      ) : (
        <p>データを取得中...</p>
      )}
    </div>
  );
}

export default DetailOfPost;