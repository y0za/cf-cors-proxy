const request = require('request');

exports.proxy = (req, res) => {
  res.set({
    'Access-Control-Allow-Origin': '*'
  });

  const url = req.query.url;
  if (url == null) {
    res.status(401).send();
    return;
  }

  request.get(url, (error, response, body) => {
    if (error) {
      res.status(500).send();
      return;
    }
    res.send(body);
  });
};
