import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import React from "react";
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Body from "../Components/Body"



const Home = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default Home;
