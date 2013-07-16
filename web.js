var express = require('express');

var app = express.createServer(express.logger());

var bf = new BUffer(256);

app.get('/', function(request, response) {
    bf = fs.readFileSync(index.html);
    response.send(bUf.toString(bf));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
