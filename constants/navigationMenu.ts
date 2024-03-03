import { icons } from "./icons";
import Dashboard from "../components/admin/tabs/Dashboard";
import Checkout from "../components/admin/tabs/Checkout";
import Pending from "../components/admin/tabs/Pending";
import Products from "../components/admin/tabs/Products";
import Sales from "../components/admin/tabs/Sales";
import Settings from "../components/admin/tabs/Settings";
import Logout from "../components/admin/tabs/Logout";
import { FIREBASE_AUTH } from "../FirebaseConfig";

export const menus = [
  {
    type: "tab",
    isActive: true,
    title: "Dashboard",
    icons: {
      default: icons.dashboardLined,
      active: icons.dashboardFilled,
    },
    component: Dashboard,
  },
  {
    type: "tab",
    isActive: false,
    title: "Checkout",
    icons: {
      default: icons.checkoutLined,
      active: icons.checkoutFilled,
    },
    component: Checkout,
  },
  {
    type: "tab",
    isActive: false,
    title: "Pending",
    icons: {
      default: icons.timeLined,
      active: icons.timeFilled,
    },
    component: Pending,
  },
  {
    type: "tab",
    isActive: false,
    title: "Products",
    icons: {
      default: icons.productLined,
      active: icons.productFilled,
    },
    component: Products,
  },
  {
    type: "tab",
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
    type: "user-tab",
    isActive: false,
    title: "Settings",
    icons: {
      default: icons.gearLined,
      active: icons.gearFilled,
    },
    component: Settings,
  },
  {
    type: "user-action",
    isActive: false,
    title: "Logout",
    icons: {
      default: icons.logout,
    },
    component: Logout,
  },
];
