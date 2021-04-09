/**
 * 无论是开发环境还是生产环境，都是在请求到来之后运行getServerSideProps
 * context，类型为NextPageContext
 * context.req/context/res可以获取请求和响应
 * 一般只需要用到context.req
 * 
 * SSR原理
 * SSR是提前渲染好静态内容
 * 推荐：在后端调用renderToString()的方法，把整个页面渲染成字符串
 * 然后前端调用hydrate()方法，把后端传递的字符串和自己的实例混合起来，保留HTML并附上事件监听
 */

import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { IncomingHttpHeaders } from 'http';

type Props = {
    browser: string
}

const index: NextPage<Props> = (props) => {
    return (
        <div>
            <h1>你的浏览器是 {props.browser}</h1>
        </div>
    );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const headers: IncomingHttpHeaders = context.req.headers;
    const browser = headers['user-agent'];
    return {
        props: {
            browser
        }
    };
};