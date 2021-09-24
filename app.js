var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

var mainRouter = require('./routes/mainRoutes');
var usersRouter = require('./routes/usersRoutes');
var mainApiRouter = require('./routes/apiRoutes/mainApiRoutes');
var usersApiRouter = require('./routes/apiRoutes/usersApiRoutes');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'Clave secreta',
  resave: true,
  saveUninitialized: true
}));
app.use(userLoggedMiddleware);

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/api', mainApiRouter);
app.use('/api/users', usersApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
