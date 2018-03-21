var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   var locations = null;
//   res.render('myCOMap', { title: 'MyMap' location: locations });
// });

module.exports = (req, res) => {
  fs.readFile('./routes/locations.txt', "utf8",(err,data) =>{
    if(err){
      throw err;
    } else{
        console.log(data);
        res.render('myCOMap', { title: 'MyMap', loc: data});
    }
  });
};
