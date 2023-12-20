import Link from "next/link"
interface MenuItemProps {
    url?: string
    text: string
    icon: any
    className?: string
    onClick?: (event: any) => void
}
export default function MenuItem(props: MenuItemProps) {

    function renderContent() {
        return (
         <h1 className={`flex flex-col justify-center items-center
                h-20 w-20 p-4 
                dark:text-gray-200
                ${props.className}
            `}>
                {props.icon}
                <span className={`text-xs font-light`}>
                    {props.text}
                </span>
        </h1>
        )
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer
            dark:hover:bg-gray-700
        `}>
            {props.url ? (
                <Link href={props.url}>
                    {renderContent()}
                </Link>
            ) : (
                renderContent()
            )}

        </li>
    )
}