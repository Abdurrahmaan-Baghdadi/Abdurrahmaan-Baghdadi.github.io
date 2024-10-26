import { React } from 'react'
import { Outlet } from 'react-router'

export default function Layout ()
{
    return (
        <div className="site-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}