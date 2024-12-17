"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("techvidya1905@gmail.com");
  const [password, setPassword] = useState("techvidya");
  const login = async () => {
    try {
      const { data } = await axios.post(
        "/api/concession/admin/login",
        {
          email,
          password,
        }
      );
      const userData = {
        authenticated: true,
        email: "dummyemail@gmail.com",
        firstName: "some Name",
        lastName: "some Name",
        token: data.token
      };
      dispatch(setUser(userData));
      console.log(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  if (user?.authenticated)
    return null
  return (
    <div className="mt-64 w-full grid place-items-center">
      <div>
        <p className="text-5xl font-bold mb-10">
          Admin login for Railway Concession
        </p>
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={login}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
