import React, { useState } from "react";
import { Layout } from "antd";
import SiderMenu from "./Menu";
import { routes } from "../../routes";
const { Sider } = Layout;
export default function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};
	return (
		<>
			<Sider
				theme="dark"
				collapsible
				collapsed={collapsed}
				onCollapse={onCollapse}
				breakpoint="lg"
				theme="dark"
			>
				<div
					className="logo"
					style={{
						marginTop: 10,
						textAlign: "center",
					}}
				>
					<h1 style={{ color: "#fff", fontSize: 24.5 }}>LOGO</h1>
				</div>
				<SiderMenu routes={routes} />
			</Sider>
		</>
	);
}
