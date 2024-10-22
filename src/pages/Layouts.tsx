import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchIcon from "../components/SearchIcon";
import UserIcon from "../components/UserIcon";
import CartIcon from "../components/CartIcon";
import Navbar from "../components/Navbar";
import logo from "../assets/shop_logo2.png"
import HeadSearch from "../components/HeadSearch";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";

const Layout = () => {
    useEffect(() => {
        initFlowbite();
    }, [])
    return (
        <div className="min-h-screen">
            <Header />
            <div className="sticky top-0 bg-white z-40">
                <div className="flex items-center justify-between px-8 mx-16">
                    <div className="flex items-center space-x-6 w-16">
                        <button type="button" data-drawer-target="drawer-top-example" data-drawer-show="drawer-top-example" data-drawer-placement="top" aria-controls="drawer-top-example">
                            <SearchIcon />
                        </button>

                    </div>
                    {/* <div className="text-2xl font-bold text-blue-600">MONAT BLUE</div> */}
                    <Link to="/" ><img className="w-24 py-4" src={logo} alt="" /></Link>
                    <div className="flex items-center space-x-6 w-16">
                        <UserIcon name="homepage" />
                        <CartIcon />
                    </div>
                </div>
                <Navbar />
            </div>
            <Outlet />
            <Footer />
            <div id="drawer-top-example" className="fixed top-0 left-0 right-0 z-40 w-full p-4 transition-transform -translate-y-full bg-white dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-top-label">
                {/* <h5 id="drawer-top-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> */}
                {/* <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" /> */}
                {/* </svg>Top drawer */}
                {/* </h5> */}
                <button type="button" data-drawer-hide="drawer-top-example" aria-controls="drawer-top-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <HeadSearch />
            </div>
        </div>

    )
};

export default Layout;