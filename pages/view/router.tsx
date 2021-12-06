import React from "react";
const GlobalRoutes = [
  {
    path: "/home",
    loader: () => import("./Home"),
  },
  {
    path: "/AboutMe",
    loader: () => import("./About/AboutPage"),
  },
  {
    path: "/Services",
    loader: () => import("./Services/ServicesPage"),
  },
  {
    path: "/Works",
    loader: () => import("./Works/WorksPage"),
  },
];

export default { GlobalRoutes };
