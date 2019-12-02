## 爬虫学习
1.确定爬虫网站： news.baidu.com
<br>
2.分析页面内容(页面dom结构/数据类型)
<br>
3.确定开发语言，框架，工具等(node.js, express, SublimeText 3)
<br>
4.编码，测试， 爬取数据

## 爬虫的四个模块
1.网页下载器
2.网页解析器
3.URL调度器
4.内容输出器

## node.js实现爬虫
#### 网络请求模块 superagent
superagent是一个轻量级，灵活的，易读的，低学习曲线的客户端代理模块，使用及其简单，支持链式调用，容易封装成promise或async函数
npm install superagent

#### 资源解析模块 cheerio, jsdom
cheerio可看做是node.js中的jQuery,上手方便
npm install cheerio
使用let $ = cheerio.load(res);
$('写dom元素的路径即可').each((index, el)=>{
    let data = {
        填写数据
    }
});

另外一种jsdom
const   jsdom = require('jsdom');
cosnt {JSDOM} = jsdom;
let data = new JSDOM(res).window.document.querySelector('路dom径').textContent; 