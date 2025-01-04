interface Navigation {
    children: any;
    pageName: string;
}
import { CoffContainer, CoffHeader } from "./CoffineComponent";
import { NavForDesktop, NavForMobile, NavForTablet } from "./NavGroup";
export default function NavBar({ children, pageName }: Navigation) {
    return (
        <div className="font-poppins ">
            <div className="dark:bg-slate-800 bg-slate-100 overflow-hidden">
                <NavForDesktop />
                <NavForMobile />
                <NavForTablet />

                <CoffHeader details={pageName} />
                <CoffContainer>{children}</CoffContainer>
            </div>
        </div>
    );
}
