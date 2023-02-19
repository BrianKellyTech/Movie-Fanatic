// import expresss and path library
const express = require('express');
const path = require('path');

//store public folder path in a separate variable
let initial_path = path.join(__dirname, "public");

let app = express();
app.use(express.static(initial_path));

// setup home route to send index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

// local port where app will display
app.listen(3000, () => {
    console.log('Server is running on port 3000...')
})

