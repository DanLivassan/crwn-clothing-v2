import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import React from 'react'
import { Navigation } from "./pages/navigation/Navigation";
import SignIn from "./pages/signin/SignIn";

const Shop = () => {
  return (
    <div>Shop</div>
  )
}



const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={Home()} />
          <Route path="/shop" element={Shop()} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
      </Routes >
    </>
  );
};

export default App;
