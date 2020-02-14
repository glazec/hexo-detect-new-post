/* global hexo */
/* eslint no-param-reassign:0, strict:0 */
'use strict';

const util = require('hexo-util');
const fs = require('hexo-fs');
const parser = require('parser-front-matter');

var dir = 'source/_posts';

var newPostName = fs.readdir(dir, function (err, files) {
    files = files.map(function (fileName) {
        return {
            name: fileName,
            time: fs.statSync(dir + '/' + fileName).birthtime
        };
    })
        // We just need find the largest time here. 
        .sort(function (a, b) {
            return b.time - a.time;
        })
        .map(function (v) {
            return v;
        });
    fs.readFile(dir + '/' + files[0].name, function (err, data) {
        parser.parse(data, function (err, file) {
            // var result = file.data
            var JSONFeed = { 'title': file.data.title, 'id': file.data.abbrlink, 'date_published': file.data.date, 'summary': data.split('<!-- more -->')[0].split('---')[2].trim(), 'url': "https://www.inevitable.tech/posts/" + file.data.abbrlink, 'tags': file.data.tags, 'categories': file.data.categories }
            fs.writeFile('public/newPost.json', JSON.stringify(JSONFeed), function (err, data) { hexo.log.info("Generated: newPost.json") })
        })
    });


});


