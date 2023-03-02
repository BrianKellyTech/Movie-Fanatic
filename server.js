// Express server
const express = require('express');
const path = require('path');
const app = express()

// Specify static route
app.use(express.static(__dirname));

// Setup home route to send index.html file
app.get('/', (req, res) => {
    res.sendFile('/index.html');
})

// Local port where app will display (localhost:3000)
app.listen(3000, () => {
    console.log('Express Server is listening on port 3000...')
})












// From Code Louisville demonstration ROUTER
// import express from 'express'

// const app = express()

// let router = express.Router()

// router.get('/', (req, res) => {
//     res.send('Any phrase will do')
// })

// app.use(router)

// app.listen(5000, () => {
//     console.log('express is now listening on port 5000')
// })


// From Code Louisville demonstration APP
// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//     res.send('Any phrase will do')
// })

// app.listen(5000, () => {
//     console.log('express is now listening on port 5000')
// })

// // import expresss and path library
// const express = require('express');
// const path = require('path');

// //store public folder path in a separate variable
// let initial_path = path.join(__dirname, "public");

// let app = express();
// app.use(express.static(initial_path));

// // setup home route to send index.html file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(initial_path, "index.html"));
// })

// // local port where app will display
// app.listen(3000, () => {
//     console.log('Express Server is listening on port 3000...')
// })