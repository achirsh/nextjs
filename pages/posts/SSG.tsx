/**
 * 静态页面生成 Static Site Generation
 * 后端数据可以直接传给前端，前端JSON.parse一下子就能得到posts
 * 在开发环境，每次请求都会运行一次getStaticProps，这是为了方便我们修改代码重新运行
 * 在生产环境，getStaticProps只在build时运行，这样可以提供一份html给所有用户下载
 */

import { GetStaticProps, NextPage } from 'next';
import { getPosts } from '../../lib/posts';
import Link from 'next/link';
import React from 'react';

type Post = {
    id: string,
    title: string
}

type Props = {
    posts: Post[];
}

// props 中有下面导出的数据 posts
const PostsIndex: NextPage<Props> = (props) => {
    const { posts } = props;
    // 前后端控制台都能打印 -> 同构
    return (
        <div>
            <h1>文章列表</h1>
            {posts.map(p => <div key={p.id}>
                <Link href={`/posts/${p.id}`}>
                    <a>
                        {p.id}
                    </a>
                </Link>
            </div>)}
        </div>
    );
};

export default PostsIndex;

// 实现SSG
export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
        }
    };
};