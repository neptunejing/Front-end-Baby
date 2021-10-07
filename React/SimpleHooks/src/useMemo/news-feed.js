import React from "react";
import { useNewsFeed } from "./hooks";

export function NewsFeed({sourceURL}) {
    const posts = useNewsFeed(sourceURL);

    return(
        <>
         <h1>{posts.length} articles</h1>
         {posts.map((post, index) => (
             <p key={index}>{post}</p>
         ))}
        </>
    )
}