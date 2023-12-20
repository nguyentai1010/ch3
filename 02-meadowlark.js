const express = require('express')
//
const expressHandlebars = require('express-hanlebars').engine;
const app = express()

//
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}))


app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
app.get('/', (req, res) => res.render('home'))
app.get('/about',(req, res) => res.render('about'))


app.use((req, res) =>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found from ThiDK')
})

// custom 500 page
app.use((err, req, res,next)=>{
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Expree started on http://loclhost:${port}; `+
    `press Ctrl-C to terminate.`))