import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { HeaderProps } from '../types'

export default function Layout() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [activePage, setActivePage] = useState(searchParams.get('activePageParam') || 'home')

    useEffect(()=> {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            activePageParam: activePage
        })
    }, [activePage, setSearchParams])

    return (
        <div className={`site-wrapper ${activePage}-wrapper`}>
            {/* <Header setActivePage={setActivePage}/> */}
            <main>
                <Outlet context={{setActivePage} as HeaderProps}/>
            </main>
            <Footer />
        </div>
    )
}