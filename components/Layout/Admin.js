import React, { useState } from "react";
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
				<Content style={{ margin: "0 16px" }}>{children}</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}
