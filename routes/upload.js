var express = require('express');
var router = express.Router();

var fs = require('fs');
var multer  = require('multer');
var upload = multer({ dest: 'pics/' });
var type = upload.single('pic');


router.route('/upload_files/')
    .post(type, function(req, res){
        var tmp_path = req.file.path;
        var target_path = 'pics/' + req.file.originalname;
        var src = fs.createReadStream(tmp_path);
        var dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        fs.unlink(tmp_path);
        src.on('end', function() { res.send({}); });
        src.on('error', function(err) { res.send({error: 'error'}); });
    });

module.exports = router;
