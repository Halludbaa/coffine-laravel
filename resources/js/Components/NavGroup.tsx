import { CoffeIcon, CreateIcon, HomeIcon } from "./IconGroup";

function NavForTablet() {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 shadow-inner fixed top-0 h-[100vh] left-0 sm:w-20 z-50 lg:hidden sm:block hidden "></div>
    );
}

function NavForMobile() {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 shadow-inner fixed bottom-0 h-12 w-full left-0 sm:hidden z-50 flex flex-row justify-around items-center">
            <a
                href="#"
                className="hover:bg-slate-300 p-1 dark:hover:bg-slate-700 transition-colors duration-100 rounded-full"
            >
                <HomeIcon />
            </a>
            <a
                href="#"
                className="hover:bg-slate-300 p-1 dark:hover:bg-slate-700 transition-colors duration-100 rounded-full"
            >
                <CreateIcon />
            </a>
            <a
                href="#"
                className="hover:bg-slate-300 p-1 dark:hover:bg-slate-700 transition-colors duration-100 rounded-full"
            >
                <CoffeIcon />
            </a>
        </div>
    );
}

function NavForDesktop() {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 shadow-inner fixed top-0 h-[100vh] left-0 lg:w-72 z-50 lg:block hidden font-poppins "></div>
    );
}

export { NavForTablet, NavForMobile, NavForDesktop };
