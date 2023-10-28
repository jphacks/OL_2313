import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../firebase";
import { doc, getDoc } from 'firebase/firestore';

const DetailOfArchive: React.FC = () => {
  interface RouteParams {
    postId: string;
  }

  const { postId } = useParams<RouteParams>();
  const [detailData, setDetailData] = useState<any>(null);

  const fetchDetailData = async (postId: string | undefined) => {
    if (postId) {
      try {
        const postDoc = doc(db, 'your-collection', postId);
        const postSnapshot = await getDoc(postDoc);
        if (postSnapshot.exists()) {
          const post = postSnapshot.data();
          setDetailData(post);
          console.log('詳細情報:', post);
        } else {
          console.log('該当のポストが見つかりません');
        }
      } catch (error) {
        console.error('詳細情報の取得エラー:', error);
      }
    } else {
      console.log('postId が未定義です');
    }
  };

  useEffect(() => {
    fetchDetailData(postId);
  }, [postId]);

  return (
    <div>
      aaaaaaaa
      {detailData && (
        <div>
          <h1>ああああ</h1>
          <img src={detailData.imageUrl} alt={detailData.title} className="post-image" />
          <p>{detailData.likes}</p>
          <p>#{detailData.tags}</p>
          <p>{detailData.uploadedAt? new Date(detailData.uploadedAt.seconds * 1000).toLocaleString() : "No Timestamp"}</p>
        </div>
      )}
    </div>
  );
}

export default DetailOfArchive;