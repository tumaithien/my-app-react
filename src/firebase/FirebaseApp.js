import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase-config";

const FirebaseApp = () => {
  const colRef = collection(db, "posts");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [postId, setPostId] = useState("");
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState("");

  useEffect(() => {
    // getDocs(colRef)
    //   .then((snapshot) => {
    //     let post = [];
    //     snapshot.docs.forEach((doc) => {
    //       post.push({
    //         id: doc.id,
    //         ...doc.data(),
    //       });
    //     });
    //     // console.log(post);
    //     setPosts(post);
    //   })
    //   .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // 2.  Get document in real time
    onSnapshot(colRef, (snapshot) => {
      let post = [];
      snapshot.docs.forEach((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      // console.log(post);
      setPosts(post);
    });
    //fetching single document
    const docRefSingle = doc(db, "posts", "QfbWPGSr6KycZ8O3kNSK");
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    //Firestore query
    const q = query(colRef, limit(3), where("author", "==", "tmt"));
    onSnapshot(q, (snapshot) => {
      let post = [];
      snapshot.docs.forEach((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(post);
    });
  });
  const handleAddPost = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      title,
      author,
      createAt: serverTimestamp(),
    })
      .then(() => {
        console.log("Success submit");
        //reset form
      })
      .catch((err) => {
        console.log(err);
        //reset form
      });
  };
  const handleUpdatePost = async (e) => {
    e.preventDefault();
    const colRefUpdate = doc(db, "posts", postId);
    await updateDoc(colRefUpdate, {
      title: "this is a new title",
    });
    console.log("success update");
  };
  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, "posts", postId);
    await deleteDoc(colRefDelete);
    console.log("success delete");
  };
  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleUpdatePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-blue-500 text-white text-sm font-semibold rounded-lg w-full"
          >
            Update post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-500"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />
          <button
            type="submit"
            className="p-3 bg-red-500 text-white text-sm font-semibold rounded-lg w-full"
          >
            Remove post
          </button>
        </form>
      </div>
      <div className="w-full max-w-[500px] mx-auto shadow-lg p-5 mb-10">
        {posts.length &&
          posts.map((item) => (
            <div key={item.title}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;
