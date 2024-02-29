import { menus } from "../constants/navigationMenu";

module.exports = {
  menus: "",
  activeMenu: menus.filter((item) => item.isActive === true),
};
