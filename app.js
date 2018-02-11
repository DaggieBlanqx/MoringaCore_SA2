// require dependancy modules
const express =  require('express'); //importing expressjs
var path = require('path')

const app = express()


// set an EJS(Embedded JavaScript) View Engine
app.set(`view engine`,`ejs`)

// set a folder for our views
app.set('views',path.join(__dirname, `views`))
 
 
// middleware for static resources eg images,css files etc -> set Static Path
app.use(express.static(path.join(__dirname,`public`)))



app.get('/test',(req,res)=>{
	res.send('Everything Working  -  Proceed with the code');
	res.end()
})


app.get('/exit',(req,res)=>{
	//prompt a shutdown by running this request twice
	//prompt a reboot by running this request once

	res.send('Exiting ...')
	res.end()
	process.exit()
})


app.get('/',(req,res)=>{
	res.render('restuarant',{})
	res.end()
})


app.get('/menu_restuarant',(req,res)=>{
	res.render('restuarant',{})
	res.end()

})



// configure port which process will run into
var port = 55
app.set('port', (process.env.PORT || port))

// Turn on our server
app.listen(app.get('port'), ()=>{

	console.log('App is running on port', app.get('port'))

})