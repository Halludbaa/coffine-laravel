import { fchown } from "fs";

function SearchIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=" fill-black dark:fill-white"
            // style={{ fill: "rgba(0, 0, 0, 1)" }}
        >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
    );
}
function HomeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className=" fill-black dark:fill-slate-300 "

            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
            <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
        </svg>
    );
}
function ThreeDots() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className=" fill-black dark:fill-slate-300"
            viewBox="0 0 24 24"
        >
            <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
    );
}
function CreateIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className=" fill-black dark:fill-slate-300"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
            <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z"></path>
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
        </svg>
    );
}
function CoffeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            className=" fill-black dark:fill-slate-300"
            height="30"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
            <path d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"></path>
        </svg>
    );
}

function LikeIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
        </svg>
    );
}
function LikeFillIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            className=" fill-black dark:fill-slate-300"

            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
        >
            <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
        </svg>
    );
}
function CommentIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path>
        </svg>
    );
}
function CommentFillIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M20 2H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
        </svg>
    );
}
function ShareIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M20.56 3.34a1 1 0 0 0-1-.08l-17 8a1 1 0 0 0-.57.92 1 1 0 0 0 .6.9L8 15.45v6.72L13.84 18l4.76 2.08a.93.93 0 0 0 .4.09 1 1 0 0 0 .52-.15 1 1 0 0 0 .48-.79l1-15a1 1 0 0 0-.44-.89zM18.1 17.68l-5.27-2.31L16 9.17l-7.65 4.25-2.93-1.29 13.47-6.34z"></path>
        </svg>
    );
}
function ShareFillIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="m2.6 13.083 3.452 1.511L16 9.167l-6 7 8.6 3.916a1 1 0 0 0 1.399-.85l1-15a1.002 1.002 0 0 0-1.424-.972l-17 8a1.002 1.002 0 0 0 .025 1.822zM8 22.167l4.776-2.316L8 17.623z"></path>
        </svg>
    );
}
function MarkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M18 2H6c-1.103 0-2 .897-2 2v18l8-4.572L20 22V4c0-1.103-.897-2-2-2zm0 16.553-6-3.428-6 3.428V4h12v14.553z"></path>
        </svg>
    );
}
function MarkFillIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            className=" fill-black dark:fill-slate-300"
        >
            <path d="M19 10.132v-6c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2V22l7-4.666L19 22V10.132z"></path>
        </svg>
    );
}

function ProfileAvatar() {
    return (
        <span className="w-8 h-8 md:w-10 md:h-10 bg-purple-700 rounded-full"></span>
    );
}
export {
    ProfileAvatar,
    SearchIcon,
    ThreeDots,
    HomeIcon,
    CreateIcon,
    CoffeIcon,
    LikeIcon,
    LikeFillIcon,
    MarkIcon,
    MarkFillIcon,
    CommentIcon,
    CommentFillIcon,
    ShareIcon,
    ShareFillIcon,
};
