import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Adminpanel/components/Sidebar";
import Header from "../Adminpanel/components/Header";
import Footer from "../Adminpanel/components/Footer";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
