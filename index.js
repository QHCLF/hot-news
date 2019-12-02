const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');

const app = express();

let hotNews = []; //热点新闻

let getHotNews = (res) => {
    let hotNews = [],
    $ = cheerio.load(res.text);

    $('div#pane-news ul li a').each((idx, ele) => {//找到目标数据所在的页面元素，获取数据
        let news = {
            title: $(ele).text(), //获取新闻标题
            href: $(ele).attr('href')   //获取新闻网页链接
        };

        hotNews.push(news);
    });
    return hotNews;
}

superagent.get('http://news.baidu.com/').end((err, res) => {
    if(err){
        console.log(`热点新闻抓取失败-${err}`);
    }else{
        hotNews = getHotNews(res);
    }
});


app.get('/',    async (req, res, next)=>{
    res.send(hotNews);
});

app.listen(3000, ()=>{
    console.log('app running at http://localhost:3000');
});