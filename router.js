var router = require("express").Router();



router.get('/', function(req, res) {
    res.sendFile('top.html', { root: __dirname + '/data/public/'});
});

router.get('/top.html', function(req, res) {
    res.sendFile('top.html', { root: __dirname + '/data/public/'});
});

router.get('/about.html', function(req, res) {
    res.sendFile('about.html', { root: __dirname + '/data/public/'});
});

router.get('/top', function(req, res) {
    res.sendFile('top.html', { root: __dirname + '/data/public/'});
});

router.get('/about', function(req, res) {
    res.sendFile('about.html', { root: __dirname + '/data/public/'});
});

router.get('/13update', function(req, res) {
    res.sendFile('13update.html', { root: __dirname + '/data/public/'});
});
router.get('/13update.html', function(req, res) {
    res.sendFile('13update.html', { root: __dirname + '/data/public/'});
});
module.exports = router;