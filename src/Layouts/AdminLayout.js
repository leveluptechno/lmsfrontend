import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Adminpanel/components/Sidebar";
import Header from "../Adminpanel/components/Header";
// import Footer from "../Adminpanel/components/Footer";

const AdminLayout = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden ">
      <Sidebar />
      <div className="flex-1 flex flex-col  ">
        <Header />
        <div
          className="overflow-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
      ::-webkit-scrollbar {
        display: none;
      }
    `}
          </style>
          <div className="flex-1 overflow-y-auto p-4 ">
            <Outlet />
          </div>
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AdminLayout;
