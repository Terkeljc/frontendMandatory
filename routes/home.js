exports.index = function (req, res) {
    res.render('index', {title: 'Chatty', welcome: 'Welcome to Chatty'});
}