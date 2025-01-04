import { useState } from "react";
import { LikeFillIcon, LikeIcon, MarkFillIcon, MarkIcon } from "./IconGroup";

interface Target {
    slug: number;
    user_id: number;
}

function MarkButton({
    statusVal,
    target,
}: {
    statusVal: boolean;
    target: Target;
}) {
    const [status, setStatus] = useState(statusVal);

    return (
        <button
            role="button"
            className="cursor-pointer"
            disabled={false}
            onClick={() => {
                setStatus(!status);
                !status ? console.info("Marked") : console.info("Unmarked");
            }}
        >
            {status ? <MarkFillIcon /> : <MarkIcon />}
        </button>
    );
}

function LikeButton({
    statusVal,
    target,
}: {
    statusVal: boolean;
    target: Target;
}) {
    const [status, setStatus] = useState(statusVal);

    return (
        <span
            className="cursor-pointer"
            onClick={() => {
                setStatus(!status);
                console.info("Liked");
            }}
        >
            {status ? <LikeFillIcon /> : <LikeIcon />}
        </span>
    );
}

export { LikeButton, MarkButton };
