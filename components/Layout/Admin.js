import React from "react";
import { Layout, Menu } from "antd";
import Sidebar from "../Sidebar/Sidebar";
import AdminHeader from "../Headers/AdminHeader";
const { Content, Footer } = Layout;

export default function Admin({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <AdminHeader />
        <Content style={{ margin: "0 25px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          All Rights Reserved © 2024
        </Footer>
      </Layout>
    </Layout>
  );
}
