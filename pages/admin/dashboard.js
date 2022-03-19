import React from "react";
import Admin from "../../components/Layout/Admin";

export default function Dashboard() {
	return (
		<div>
			<h1 style={{ fontSize: 30 }}>Welcome to Admin Dashboard</h1>
		</div>
	);
}

Dashboard.layout = Admin;
