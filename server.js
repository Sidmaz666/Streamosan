//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const cors = require('cors')
const axios = require('axios')
const port = process.env.PORT || 8080;
const app = express();
app.use(cors())
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));


app.get('/img/:img', function (req, res) {


     const imgId = req.params.img

   
     const img_url = `https://cdn.fmoviesf.me/${imgId}`
	
     axios.get(img_url,{
    responseType: 'arraybuffer'
  })
    .then((response) => {
        const buffer = Buffer.from(response.data).toString('base64');
      res.json({ link : `data:${response.headers["content-type"]};base64,${buffer}` })
    })

});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port)

