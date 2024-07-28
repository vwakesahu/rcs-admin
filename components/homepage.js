import React, { useEffect, useState } from "react";
import { DataTable } from "./table";
import axios from "axios";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { resetUser } from "@/redux/slices/userSlice";

const HomePage = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios.get(
        "https://portal-backend-omega.vercel.app/api/v1/concession/admin/all-form"
      );
      function flattenNestedObjects(data) {
        return data.map((item) => {
          const { student, ...rest } = item;
          return { ...rest, ...student };
        });
      }
      const d = flattenNestedObjects(data);
      console.log(d);
      setData(d);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(resetUser());
  };

  return (
    <div className="p-12">
      <div className="w-full flex justify-end">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="">
        <div className="w-full max-w-7xl">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
