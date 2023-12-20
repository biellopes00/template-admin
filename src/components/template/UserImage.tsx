import useAuth from "@/data/hook/useAuth"
import Link from "next/link"

interface UserImageProps{
    className?: string
}

export default function UserImage( props: UserImageProps){
    const { user } = useAuth()
    return(
        <Link href="/profile">
            <img
                src={user?.urlImage ?? 'https://raw.githubusercontent.com/cod3rcursos/curso-nextjs/5c35f41e4da8c20753b5eca2827bcbba2bb31ce6/admin-template/public/images/avatar.svg'}
                alt="User photo"
                className={`h-10 w-10 rounded-full ${props.className}`} 
            />
        </Link>
    )
}