import { icons } from "./icons";
import Dashboard from "../components/admin/contents/Dashboard";
import Checkout from "../components/admin/contents/Checkout";
import Pending from "../components/admin/contents/Pending";
import Products from "../components/admin/contents/Products";
import Sales from "../components/admin/contents/Sales";
import Settings from "../components/admin/contents/Settings";

export const menus = [
  {
    isActive: true,
    title: "Dashboard",
    icons: {
      default: icons.dashboardLined,
      active: icons.dashboardFilled,
    },
    component: Dashboard,
  },
  {
    isActive: false,
    title: "Checkout",
    icons: {
      default: icons.checkoutLined,
      active: icons.checkoutFilled,
    },
    component: Checkout,
  },
  {
    isActive: false,
    title: "Pending",
    icons: {
      default: icons.timeLined,
      active: icons.timeFilled,
    },
    component: Pending,
  },
  {
    isActive: false,
    title: "Products",
    icons: {
      default: icons.productLined,
      active: icons.productFilled,
    },
    component: Products,
  },
  {
    isActive: false,
    title: "Sales",
    icons: {
      default: icons.tagLined,
      active: icons.tagFilled,
    },
    component: Sales,
  },
];

export const userMenus = [
  {
    isActive: false,
    title: "Settings",
    icons: {
      default: icons.gearLined,
      active: icons.gearFilled,
    },
    component: Settings,
  },
  {
    isActive: false,
    title: "Logout",
    icons: {
      default: icons.logout,
    },
    component: "",
  },
];
