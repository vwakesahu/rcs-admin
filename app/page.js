"use client";
import HomePage from "@/components/homepage";
import Login from "@/components/login";
import React, { useState } from "react";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <>{isLoggedIn ? <HomePage /> : <Login />}</>;
};

export default Page;
