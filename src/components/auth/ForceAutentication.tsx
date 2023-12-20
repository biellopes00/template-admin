import useAuth from '@/data/hook/useAuth'
import Image from 'next/image'
import router  from 'next/router'
import loadingImg from '../../../public/images/loading.gif'
import Head from 'next/head'

export default function ForceAutentication(props){

    const { user, loading} = useAuth()

    function renderContent(){
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("admin-template-gabs-auth")) {
                                    window.location.href = "/autentication"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }
    function renderLoading(){
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loadingImg} />
            </div>
        )
    }
    
    if(!loading && user?.email){
        return renderContent()
    } else if(loading){
        return renderLoading()
    } else {
        router.push('/autentication')
        return null
    }
}