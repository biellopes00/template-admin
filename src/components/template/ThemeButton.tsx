import { DarkModeIcon, LightModeIcon } from "../icons"

interface ThemeButtonProps{
    theme: string
    changeTheme?: () => void
}


export default function ThemeButton(props: ThemeButtonProps){
    return props.theme === 'dark' ? (
        <div onClick={props.changeTheme} className={`
            hidden sm:flex items-center cursor-pointer
            bg-gradient-to-r from-yellow-300 to-yellow-600
            w-14 lg:w-24 h-8 rounded-full
        `}>
            <div className={`
            flex items-center justify-center
            bg-white text-yellow-600 w-6 h-6 rounded-full
            `}>
                {LightModeIcon(5)}
            </div>
            <div className={`
                hidden lg:flex items-center ml-5
                text-white
            `}>
               <span className="text-sm">Light</span>
            </div>
        </div>
    ) : (
        <div onClick={props.changeTheme} className={`
            hidden sm:flex items-center justify-end cursor-pointer
            bg-gradient-to-r from-gray-500 to-gray-900
            w-14 lg:w-24 h-8 rounded-full
        `}>
              <div className={`
                hidden lg:flex items-center mr-2
                text-gray-300
            `}>
               <span className="text-sm">Dark</span>
            </div>
            <div className={`
            flex items-center justify-center
            bg-black text-yellow-300 w-6 h-6 rounded-full
            `}>
                {DarkModeIcon(4)}
            </div>
          
        </div>
    )
}