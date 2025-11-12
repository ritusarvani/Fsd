const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(
  session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.send(`<h2>Welcome back!</h2>
              <p>Number of visits: ${req.session.views}</p>`);
  } else {
    req.session.views = 1;
    res.send('<h2>Hello! This is your first visit.</h2>');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
