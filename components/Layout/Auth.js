import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;
function Auth({ children }) {
  return (
    <Layout>
      {/* <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
				<div className="logo" />
				<Menu theme="dark" mode="horizontal">
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
			</Header> */}
      <Content className="site-layout">{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Auth;
