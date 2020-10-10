const response = require(process.cwd() + '/util/Response');
const mongoose = require('mongoose');
// Restorans model
const Restorans = require('../../../models/restorans/restorans');
class RestoranCtrl {
	findBy(req, res) {
	    try {
			var id = req.params.restoranId; 
			Restorans.findById(id)
			.then(posts => response.resp(res, 200,posts))
			.catch(err => response.resp(res, 200,{ nopostsfound: 'No posts found' }));
	    } catch(exception) {
			// res.status(500).send(exception)
			console.log('---------userctrl------userDetail-----',exception)
			res.resp(res, 500, exception)
	    }
	}


}

module.exports = new RestoranCtrl();