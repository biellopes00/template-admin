import Content from "./Content"
import SideMenu from "./SideMenu"
import Header from "./Title"

interface LayoutProps {
    title: string
    subtitle: string
    children?: any
}
export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex h-screen w-screen`}>
            <SideMenu />
            <div className={`flex flex-column w-full
                p-7 bg-gray-300
            `}>
                <Header title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>

            </div>
        </div>
    )
}