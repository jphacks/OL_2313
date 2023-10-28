import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection, getDoc, updateDoc, doc, Timestamp, Query, query, orderBy } from "firebase/firestore";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import DetailOfArchive from "./DetailOfArchive";

interface Post {
  id?: string;
  title: string;
  imageUrl: string;
  tags: string[];
  likes: number;
  uploadedAt: Timestamp;
}

const Archive: React.FC = () =>{

  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const postQuery: Query = query(collection(db, "your-collection"), orderBy("uploadedAt", "desc"));
    const postCollection = await getDocs(postQuery);
    setPosts(postCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Post)));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (postId: string) => {
    console.log(postId);
  }

  return (
    <BrowserRouter>
      <div className="App">
        {posts.map((post, index) => (
          <Link to={`/${post.id}`}>
            <img onClick={() => post.id && handleClick(post.id)} src={post.imageUrl} alt={post.title} className="post-image" />
          </Link>
        ))}

        <Routes>
          <Route path="/:postId" element={<DetailOfArchive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Archive;