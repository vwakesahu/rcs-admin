"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async() => {
    try {
      const { data } = await axios.post(
        "https://portal-backend-omega.vercel.app/api/v1/concession/admin/login",
        {
          email,
          password,
        }   
      );
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="h-screen grid place-items-center">
      <div className="max-w-4xl">
        <Input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={login}>Login</Button>
      </div>
    </div>
  );
};

export default Login;
