export const routes = [
	{
		name: "Dashboard",
		icon: "dashboard",
		route: "/admin/dashboard",
	},

	{
		name: "Settings",
		icon: "edit",
		children: [
			{
				name: "Page 1",
				route: "/admin/settings/page1",
			},
			{
				name: "Page 2",
				route: "/admin/settings/page2",
			},
		],
	},
];
