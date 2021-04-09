/**
 * 客户端渲染：只在浏览器上执行的渲染
 */

import { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';

type Post = {
    id: string,
    title: string
}

const PostsIndex: NextPage = () => {
    // [] 表示只在第一次渲染的时候请求
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get('/api/posts').then(response => {
            setPosts(response.data);
            setIsLoading(false);
        }, () => {
            setIsLoading(true);
        })
    }, []);
    return (
        <div>
            <h1>文章列表</h1>
            {isLoading ? <div>加载中</div> : 
                posts.map(p => <div key={p.id}>
                    {p.id}
                </div>)}
        </div>
    )
}

export default PostsIndex;