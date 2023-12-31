import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import "./UploadContent.css";
import { Timestamp } from "firebase/firestore";

const UploadContent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [resipe, setResipe] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [recipeIntroduction, setRecipeIntroduction] = useState("");
  const [recipeBackground, setRecipeBackground] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setImage(file);
      };
    }
  };

  const isUploadDisabled = !(
    image &&
    title &&
    tags &&
    resipe &&
    recipeIntroduction &&
    recipeBackground
  );

  const handleUpload = async () => {
    if (isUploadDisabled) {
      alert("全てのフィールドを入力してください。");
      return;
    }

    const storageRef = ref(getStorage(), "your-path/" + image!.name);
    await uploadBytes(storageRef, image!);
    const downloadURL = await getDownloadURL(storageRef);
    const now = Timestamp.now();

    await addDoc(collection(db, "your-collection"), {
      title: title,
      tags: tags.split(" "),
      resipe: resipe,
      imageUrl: downloadURL,
      likes: 0,
      uploadedAt: now,
      recipeIntroduction: recipeIntroduction,
      recipeBackground: recipeBackground,
    });

    setTitle("");
    setTags("");
    setResipe("");
    setImage(null);
    setImagePreview("");
    setRecipeIntroduction("");
    setRecipeBackground("");
  };

  return (
    <div className="upload-container">
      <h1 className="upload-header">つくログを書く</h1>
      <div className="upload-body">
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {imagePreview ? (
          <img src={imagePreview} alt="選択した画像" />
        ) : (
          <div className="image-placeholder">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              hidden
              id="imageInput"
            />
            <label htmlFor="imageInput">写真を選択</label>
          </div>
        )}
        <input
          type="text"
          placeholder="#タグ (スペース区切り)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="text"
          placeholder="レシピ"
          value={resipe}
          onChange={(e) => setResipe(e.target.value)}
        />
        <h5>レシピの紹介</h5>
        <input
          type="text"
          placeholder="例）鮭と醤油の香ばしさが引き立つ和風パスタです。"
          value={recipeIntroduction}
          onChange={(e) => setRecipeIntroduction(e.target.value)}
        />
        <h5>レシピの生り立ち</h5>
        <input
          type="text"
          placeholder="例）母から教わったレシピを家族好みの味付けにアレンジしました."
          value={recipeBackground}
          onChange={(e) => setRecipeBackground(e.target.value)}
        />
        <button id="upload-button" className="button-bt" onClick={handleUpload}>アップロード</button>

      </div>
    </div>
  );
};

export default UploadContent;
