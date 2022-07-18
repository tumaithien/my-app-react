import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    title: "Fox",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    title: "Tiger White",
    isLike: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1497206365907-f5e630693df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    title: "Flamingo",
    isLike: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "White Fox",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    title: "Eagle",
    isLike: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1581300134629-4c3a06a31948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Cat",
    isLike: false,
  },
];

const GalleryContext = createContext();
function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: listItem, setValue: setItem } = useLocalStorage(
    "cartItem",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItem, setCardItem] = useState(listItem);
  const [listFavorite, setListFavorite] = useState([]);
  function toggleFavorite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isLike: !photo.isLike };
      }
      return photo;
    });
    setPhotos(updateArray);
    setValue(updateArray);
  }
  function addToCart(newItem) {
    //Cập nhật giỏ hàng
    setCardItem((prevItem) => {
      //Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
      const isExisted = prevItem.some((items) => items.id === newItem.id);
      //Nếu đã tồn tại thì trả về danh sách trước đó
      if (isExisted) {
        setItem([...prevItem]);
        return [...prevItem];
      }
      //Nếu chưa thì thêm vào giỏ hàng
      setItem([...prevItem, newItem]);
      return [...prevItem, newItem];
    });
  }
  function removeFromCart(id) {
    // if (cartItem.length > 0) {
    //   const updateCart = cartItem.filter((photo) => {
    //     return photo.id !== id;
    //   });
    //   setCardItem(updateCart);
    // }
    setCardItem((prevItem) => {
      const result = prevItem.filter((item) => item.id !== id);
      setItem(result);
      return result;
    });
  }
  const value = {
    photos,
    cartItem,
    listFavorite,
    setListFavorite,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
