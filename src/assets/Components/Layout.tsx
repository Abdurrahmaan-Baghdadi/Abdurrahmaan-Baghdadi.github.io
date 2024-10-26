import { useState } from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout() {
    const [activePage, setActivePage] = useState('home')

    return (
        <div className={`site-wrapper ${activePage}-wrapper`}>
            <Header onActivePageChange={setActivePage}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}