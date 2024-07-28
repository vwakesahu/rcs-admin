"use client";
import HomePage from "@/components/homepage";
import Login from "@/components/login";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { user } = useSelector((state) => state.user);
  return <>{user.authenticated ? <HomePage /> : <Login />}</>;
};

export default Page;
