var express = require('express');
var router = express.Router();

var firebase = require("firebase/app");
var database = require("firebase/database");
var firebaseConfig = {
				apiKey: 'AIzaSyAwa0RSTmXL7xLrt_-POdfz1D917hNwar0',
				authDomain: 'hackathon-4e051.firebaseapp.com',
				databaseURL: 'https://hackathon-4e051.firebaseio.com',
				projectId: 'hackathon-4e051',
				storageBucket: 'hackathon-4e051.appspot.com',
				messagingSenderId: '792653856575',
				appId: '1:792653856575:web:c413c8819c613f0f475d8a',
				measurementId: 'G-ZQ3T0MV0R5',
			};
			// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '銘傳大學點餐平臺' });
});

router.get('/menus', function(req, res, next) {
  db.ref('/四海八方/0').on('value',(snap)=>{
    var tmp = snap.val();
    res.render('menus', { title: '銘傳大學點餐平臺', dataset: tmp });
});
  
});
firebase.database().ref('')

module.exports = router;
