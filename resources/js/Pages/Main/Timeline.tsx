import { useState } from "react";
import NavBar from "../../Components/NavBar";
import { Head, usePage } from "@inertiajs/react";
import PostList from "@/Components/PostList";

export default function Timeline({
    posts,
    pageName,
    user_id,
}: {
    posts: any[];
    pageName: string;
    user_id?: number;
}) {
    const user = usePage().props.auth.user;

    console.info(user_id);
    console.info(user.name);
    return (
        <>
            <Head title={pageName} />
            <NavBar pageName={pageName}>
                <PostList posts={posts} user={69} />
            </NavBar>
        </>
    );
}
