interface ContentProps {
    children?: any
}
export default function Header(props: ContentProps) {
    return (
        <div className={`
            flex felx-col mt-7
        `}>
       {props.children}
        </div>
    )
}