import React from "react";
import { Menu, Avatar, Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { SubMenu } = Menu;

function AdminHeader() {
	return (
		<Header>
			<Menu theme="dark" mode="horizontal">
				<SubMenu
					key="SubMenu"
					icon={<Avatar size="default" icon={<UserOutlined />} />}
				>
					<Menu.Item key="setting:1">Profile</Menu.Item>

					<Menu.Item key="setting:3">Account Settings</Menu.Item>

					<Menu.Item key="setting:4">Logout</Menu.Item>
				</SubMenu>
			</Menu>
		</Header>
	);
}

export default AdminHeader;
