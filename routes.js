export const routes = [
  {
    name: "Dashboard",
    icon: "dashboard",
    route: "/dashboard",
  },
  {
    name: "Attendance",
    icon: "setting",
    children: [
      {
        name: "Attendance Request",
        route: "#",
      },
      {
        name: "My Attendance",
        route: "#",
      },
      {
        name: "My Shift Time",
        route: "#",
      },
      {
        name: "Remote Work Request",
        route: "#",
      },
    ],
  },
];
