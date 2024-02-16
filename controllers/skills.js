// By Convention the model is capitalized!
const skillsModel = require('../models/skills')

module.exports = {
	index, // shorthand for index: index
	show,
	new: newSkill,
	create,
	delete: deleteSkill,
}


// ctrl index function always responds
// with all of a certain resource
// for example, responds with all the toods
function index(req, res){

	// send to the client when a request made to the server
	// a ejs page with all the todos!
	// render automatically looks for files in the views folder!
	res.render('skills/index', {skills: skillsModel.getAll()}) 
	// the key on the object (todos) will be a variable in the todos/index page
	// which in this case will be an array of all the todos!
}

function show(req, res){

	console.log(req.params, " <- req.params")
	// todos/show is the ejs file in the views folder
	res.render('skills/show', {skill: skillsModel.getOne(req.params.id)})
}

function newSkill(req, res){
	res.render('skills/new')
}

function create(req, res){
	skillsModel.create(req.body);
	res.redirect('/skills')
}

function deleteSkill(req, res){
	console.log(req.body)
	skillsModel.deleteOne(req.params.id)
	res.redirect('/skills')
}