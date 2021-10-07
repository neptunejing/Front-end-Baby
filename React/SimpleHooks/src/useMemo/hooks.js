import { useState, useEffect } from "react"
import { Subscriber } from "../common/subscriber"
import { Logger } from "../common/logger"

export const useNewsFeed = (sourceURL) => {
    const subscriber = new Subscriber(sourceURL);
    const [posts, setPosts] = useState([]);
    const addPost = post => setPosts(currPost => [post, ...currPost]);

    // 该 hook 完成新闻订阅
    useEffect(() => {
        subscriber.subscribe(addPost);
        return () => subscriber.unsubscribe();
    }, [sourceURL])

    // 该 hook 完成日志记录
    useEffect(() => {
        Logger.logSub();
        return () => Logger.logUnsub();
    }, [sourceURL])

    return posts;
}