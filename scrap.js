var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),

    images = [];
var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout);
prompts.question("Enter Image Name : ", function(name) {
    var msg = " ";
   request('https://alpha.wallhaven.cc/search?q=' + name, function(err, resp, body) {
        if (!err && resp.statusCode === 200) {
            var $ = cheerio.load(body);

            $('img', '#thumbs').each(function() {
              var img = $(this).attr('data-src');
                       images.push(img);
            });
            console.log(images);
        }
        for (var i = 0; i < images.length; i++) {
            request(images[i]).pipe(fs.createWriteStream('images/grub' + '.jpg'));
        }
    });
});
