"use client";
import HomePage from "@/components/homepage";
import Login from "@/components/login";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { user } = useSelector((state) => state.user);

  // Debugging: Log the user state
  console.log("User state:", user);

  // Conditional rendering based on authentication status
  if (user && user.authenticated) {
    return <HomePage />;
  } else {
    return <Login />;
  }
};

export default Page;