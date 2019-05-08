module.exports = app => {
	const Controller = require('../controllers/post')
	
	app.route('/post')
		.post(Controller.create)
		.get(Controller.listAll)
	
	app.route('/posts/:id')
		.get(Controller.listOne)
		.put(Controller.update)
		.delete(Controller.delete)
}