import SideMenu from "./AsideMenu"

interface TitleProps {
    title: string
    subtitle: string
    children?: any
}
export default function Header(props: TitleProps) {
    return (
        <div>
            <h1 className={`

           `}

            >
                {props.title}
            </h1>
            <h2 className={``}>
                {props.subtitle}
            </h2>
        </div>
    )
}