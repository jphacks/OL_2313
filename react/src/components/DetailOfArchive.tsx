import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from "../firebase";
import { getDocs, collection, getDoc, updateDoc, doc, Timestamp, Query, query, orderBy } from "firebase/firestore";

interface Post {
  id?: string;
  title: string;
  imageUrl: string;
  tags: string[];
  likes: number;
  uploadedAt: Timestamp;
}

const DetailOfArchive: React.FC = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const postId = searchParams.get("id");

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postId) {
      // Firebaseから指定のpostIdのデータを取得
      const postRef = doc(db, "your-collection", postId);
      
      getDoc(postRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()) {
            // データが存在する場合、データを取得
            setPost({ ...docSnapshot.data(), id: postId } as Post);
          } else {
            // データが存在しない場合、エラー処理を行うか、メッセージを表示できます
            console.log("データが見つかりません");
          }
        })
        .catch((error) => {
          // エラーハンドリングを行うことも重要です
          console.error("データの取得中にエラーが発生しました", error);
        });
    }
  }, [postId]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <img src={post.imageUrl} alt={post.title} />
          <p>Tags: {post.tags.join(", ")}</p>
          <p>Likes: {post.likes}</p>
          {/* その他の詳細情報を表示 */}
        </div>
      ) : (
        <p>データを取得中...</p>
      )}
    </div>
  );
}

export default DetailOfArchive;