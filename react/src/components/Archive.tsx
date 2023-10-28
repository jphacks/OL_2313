import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection, getDoc, updateDoc, doc, Timestamp, Query, query, orderBy } from "firebase/firestore";
import DetailOfArchive from "./DetailOfArchive";
import { Link } from "react-router-dom";

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

  const [data, setData] = useState("");
  
  const parentToChild = () => {
    setData("aaaaa");
    console.log(data);
  }

  return (
    <div className="App">
      <div className="posts-container">
        {posts.map((post) => (
          <Link to="/DetailOfArchive">
            <img key={post.id} src={post.imageUrl} alt={post.title} className="post-image" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Archive;