import React, { useEffect } from "react";
import { DataTable } from "./table";
import axios from "axios";

const HomePage = () => {
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://portal-backend-omega.vercel.app/api/v1/concession/admin/all-form"
    );
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid place-items-center h-screen">
      <div className="w-full max-w-7xl">
        <DataTable />
      </div>
    </div>
  );
};

export default HomePage;
