var express        	= require('express');
var multer			= require('multer');
var app            	= express();
var bodyParser		= require('body-parser');
var mongoose		= require('mongoose');
mongoose.connect('mongodb://localhost/cosbox');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port			= 1337;

var router 			= express.Router();

router.use(function(req, res, next) {
	next();
});

router.route('/uploads')
	.post(function(req, res) {
		var upload = new Upload();
		upload.name = req.body.name;

		upload.save(function(err) {
			if(err)
				res.send(err);

			res.json({ message: 'Upload done!' });
		});
	})
	.get(function(req, res) {
		Upload.find(function(err, uploads) {
			if(err)
				res.send(err);
			res.json(uploads);
		});
	});

router.route('/uploads/:upload_id')

    .get(function(req, res) {
        Upload.findById(req.params.upload_id, function(err, upload) {
            if (err)
                res.send(err);
            res.json(upload);
        });
    })

    .put(function(req, res) {
    	Upload.findById(req.params.upload_id, function(err, upload) {
    		if(err)
    			res.send(err)
    		res.json({ message: 'Upload fixed!' });
    	});
    })

    .delete(function(req, res) {
        Upload.remove({
            _id: req.params.upload_id
        }, function(err, upload) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

router.get('/', function(req, res) {
	res.json({ message: 'GTFO, nothing to see here' });
});

app.use('/api', router);

var Upload 			= require('./app/models/upload');


// Configure the multer
app.use(multer({ dest: './uploads/',
 	rename: function (fieldname, filename) {
	    return filename+Date.now();
  	},
	onFileUploadStart: function (file) {
	  console.log(file.originalname + ' is starting ...')
	},
	onFileUploadComplete: function (file) {
	  console.log(file.fieldname + ' uploaded to  ' + file.path)
	  done=true;
	}
}));

app.use(express.static(__dirname + '/public')); 

app.post('/api/photo', function(req,res) {
	if(done==true) {
		console.log(req.files);
		res.end('File Uplaoded.');
	}
});

app.listen(port);
console.log('Listening to port: ' + port);