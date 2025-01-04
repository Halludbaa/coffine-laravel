import { useState } from "react";
import NavBar from "../../Components/NavBar";
import { Head } from "@inertiajs/react";
import PostList from "@/Components/PostList";

export default function Timeline({
    posts,
    pageName,
}: {
    posts: any[];
    pageName: string;
}) {
    // console.info(posts);
    return (
        <>
            <Head title={pageName} />
            <NavBar pageName={pageName}>
                <PostList posts={posts} user={69} />
            </NavBar>
        </>
    );
}
