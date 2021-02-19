const express = require('express');

const app = express();

app.use(express.static('./docs'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'docs/'}
  );
  });

app.listen(process.env.PORT || 8080);