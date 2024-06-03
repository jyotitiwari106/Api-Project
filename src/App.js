import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SliderComponent from "./project/slider";
import { Counters } from "./redux app/counter";
import Profile from "./redux app/profile";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

import Product from "./redux app/product";
import { setProducts } from "./redux app/productSlice";
import { setData } from "./redux app/profileslice";
import { setBlogs } from "./redux app/blogs/blogsSlice";
import Blogs from "./redux app/blogs/blogs";

import RecipeList from "./redux app/recipes/recipelist";
import RecipeDetails from "./redux app/recipes/recipeDetails";

function App() {
  const token = localStorage.getItem("token");

  const data = useSelector((i) => i.product.value);

  const setDispatch = useDispatch();
  console.log(data);
  const getProfileFn = async () => {
    const response = await axios.get(
      "https://api-eduvila.onrender.com/profile",
      {
        params: {
          token: token,
        },
      }
    );

    setDispatch(setData(response.data[0]));

    console.log(response.data[0]);
  };

  const getProductFn = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data);
    setDispatch(setProducts(response.data.products));
  };

  const getBlogsFn = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log(data);
    setDispatch(setBlogs(data));
  };

  useEffect(() => {
    getProductFn();
    getProfileFn();
    getBlogsFn();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/slider" Component={SliderComponent} />
        <Route path="/counter" Component={Counters} />
        <Route path="/profile" Component={Profile} />
        <Route path="/product" Component={Product} />
        <Route path="/blogs" Component={Blogs} />

        <Route path="/recipes" Component={RecipeList} />
        <Route path="/recipes/:recipe_id" Component={RecipeDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
