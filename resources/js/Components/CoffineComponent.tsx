import { PropsWithChildren } from "react";
import { ProfileAvatar, ThreeDots, SearchIcon } from "@/Components/IconGroup";
interface PostDetails {
    user_display: string;
    username: string;
}
function CoffContainer({ children }: PropsWithChildren) {
    return (
        <div className=" flex flex-col  w-full lg:ml-72 mt-16 text-slate-800 font-poppins tracking-wide overflow-hidden p-2 sm:ml-20 sm:w-2/3 lg:w-full mb-20">
            {children}
        </div>
    );
}

function DetailsList({ details }: { details: string }) {
    return (
        <li className="hover:text-slate hover:scale-110 transition-all duration-100 block ">
            {details}
        </li>
    );
}

function UserPostAction({ user_display, username }: PostDetails) {
    return (
        <h3 className="text-2xl flex flex-row items-center dark:text-white">
            <ProfileAvatar />
            <a
                className="ml-2 text-base md:text-lg cursor-pointer"
                href="#"
                id="name"
            >
                {user_display}
                <span className="text-slate-400 ml-1 lowercase text-sm md:text-base">
                    @{username}
                </span>
            </a>
            <details className="ml-auto ">
                <summary className="list-none">
                    <ThreeDots />
                </summary>
                <div className="relative">
                    <ul className=" drop-shadow-md  bg-slate-50 dark:bg-slate-900 w-24 h-max text-base absolute -left-20 flex flex-col gap-2 rounded-lg p-2">
                        <DetailsList details="Report" />
                        <DetailsList details="Delete" />
                        <DetailsList details="Edit" />
                    </ul>
                </div>
            </details>
            {/* <FormattedRelativeTime value={element.created_at} in /> */}
        </h3>
    );
}

function CoffHeader({ details }: { details?: string }) {
    return (
        <div className="bg-slate-100 fixed top-0 h-14 drop-shadow-xl flex items-center  p-2 left-0 w-full z-40 dark:bg-slate-800 text-slate-500 dark:text-white">
            <span className="text-lg lg:ml-72 sm:ml-24 capitalize font-extrabold">
                NoCoffee
            </span>
            <span className="ml-auto flex flex-row items-center gap-2">
                <span className="bg-slate-200 dark:bg-slate-700 p-1 rounded-[10px]  drop-shadow-lg dark:drop-shadow-none  cursor-pointer">
                    {/* zoom-glasses */}
                    <SearchIcon />
                </span>
                <a className="h-8 w-8 block cursor-pointer bg-purple-700 rounded-full"></a>
            </span>
        </div>
    );
}
export { CoffContainer, DetailsList, UserPostAction, CoffHeader };
