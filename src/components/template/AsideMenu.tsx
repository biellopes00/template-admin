import { AdjustmentIcon, HomeIcon, NotificationIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function AsideMenu(){
    return(
        <aside>
            <ul>
               <MenuItem url="/" text="Home" icon={HomeIcon}/>
               <MenuItem url="/adjustment" text="Adjustment" icon={AdjustmentIcon}/>
               <MenuItem url="/notification" text="Notification" icon={NotificationIcon}/>
            </ul>
        </aside>
    )
}