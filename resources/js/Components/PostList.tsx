import { UserPostAction } from "./CoffineComponent";
import { CommentIcon, ShareIcon } from "./IconGroup";
import { LikeButton, MarkButton } from "./PostActionGroup";

export default function PostList({
    posts,
    user,
}: {
    posts: any[];
    user: number;
}) {
    return (
        <>
            {posts.map((data, index) => (
                <div
                    key={index}
                    className="mb-4 text-xl w-full lg:w-1/2 md:w-full"
                >
                    <UserPostAction
                        user_display={data.users.name}
                        username={data.users.name}
                    />
                    {/* <hr className="border-slate-700 border-t-[2px]" /> */}
                    <p className="text-base md:ml-11 md:text-md ml-9 text-black dark:text-white">
                        {data.body}
                    </p>
                    <div className="flex flex-row justify-around mt-8 mb-1">
                        <LikeButton
                            statusVal={data.user_liked}
                            target={{
                                slug: data.slug,
                                user_id: user,
                            }}
                        />
                        <MarkButton
                            statusVal={data.user_liked}
                            target={{
                                slug: data.slug,
                                user_id: user,
                            }}
                        />
                        <ShareIcon />
                        <CommentIcon />
                    </div>
                </div>
            ))}
        </>
    );
}
