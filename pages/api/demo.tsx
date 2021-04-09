import { NextApiHandler } from 'next'

const Demo:NextApiHandler = (req, res) => {
    // 其他的操作和js一样
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({ name: '狗子' }));
    res.end();
};

export default Demo;