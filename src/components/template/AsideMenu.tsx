import { AdjustmentIcon, HomeIcon, NotificationIcon, LogoutIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function AsideMenu() {
    return (
        <aside className="flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        ">
            <div className={`
                flex flex-col items-center justify-center
                h-20 w-20
                bg-gradient-to-r from-indigo-500 to-purple-800
            `}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" text="Home" icon={HomeIcon} />
                <MenuItem url="/adjustments" text="Adjustment" icon={AdjustmentIcon} />
                <MenuItem url="/notification" text="Notification" icon={NotificationIcon} />
            </ul>
            <ul>
                <MenuItem url="/" text="Logout" icon={LogoutIcon}
                    onClick={() => console.log('oi')}
                    className={`text-red-500 dark:text-red-400 dark:hover:text-white hover:bg-red-500 hover:text-white`}
                />
            </ul>
        </aside>
    )
}