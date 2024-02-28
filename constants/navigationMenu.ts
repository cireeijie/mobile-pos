import { icons } from "./icons"

export const menus = [
    {
        isActive: true,
        title: "Dashboard",
        icons: {
            default: icons.dashboardLined,
            active: icons.dashboardFilled
        },
    },
    {
        isActive: false,
        title: "Checkout",
        icons: {
            default: icons.checkoutLined,
            active: icons.checkoutFilled
        },
    },
    {
        isActive: false,
        title: "Pending",
        icons: {
            default: icons.timeLined,
            active: icons.timeFilled
        },
    },
    {
        isActive: false,
        title: "Products",
        icons: {
            default: icons.productLined,
            active: icons.productFilled
        },
    },
    {
        isActive: false,
        title: "Sales",
        icons: {
            default: icons.tagLined,
            active: icons.tagFilled
        },
    },
]

export const userMenus = [
    {
        isActive: false,
        title: 'Settings',
        icons: {
            default: icons.gearLined,
            active: icons.gearFilled
        }
    },
    {
        isActive: false,
        title: "Logout",
        icons: {
            default: icons.logout,
        },
    },
]