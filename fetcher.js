const fs = require('fs');
const request = require('request');
const arguments = process.argv.slice(2);

request(arguments[0], (error, response, body) => {
  fs.writeFile('./index.html', body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ./index.html.`)
  });
});