// import json data
const articleData = require('../data/data.json');

exports.getCantoneseArticles = (req, res) => {
    // filter out non-Cantonese article
    let cantoneseArticles = articleData.articles.filter((article) => article.attributes.locale !== 'en');

    // sort the Cantonese article from latest to earliest according to publishedAt
    cantoneseArticles.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));

    // filter out sponsored article
    let sponsoredArticles = cantoneseArticles.filter((article) => article.attributes.sponsors);

    res.status(200).json({
        status: 'success',
        recentArticles: cantoneseArticles.slice(0,4), // send back 4 most recent
        sponsoredArticles: sponsoredArticles.slice(0,6) // send back 6 sponsored
    })
}


exports.getEnglishArticles = (req, res) => {
    // filter out Cantonese articles
    let englishArticles = articleData.articles.filter((article) => article.attributes.locale !== 'zh-Hant');

    // sort the English articles from latest to earliest according to publishedAt
    englishArticles.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));

    // filter out non-sponsored article
    let sponsoredArticles = englishArticles.filter((article) => article.attributes.sponsors);

    res.status(200).json({
        status: 'success',
        recentArticles: englishArticles.slice(0,4), // send back 4 most recent
        sponsoredArticles: sponsoredArticles.slice(0,6) // send back 6 sponsored
    })
}