
var express = require('express');
var app = express();
var gulp = require('gulp');
require('./gulpfile');

// Disable any caching this also allows gulp changes to show in the browser
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
  next()
})
// remove etag overhead from server request
app.set('etag', false)

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

gulp.task('default')();


