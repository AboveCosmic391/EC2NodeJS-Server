const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));
// app.use((req, res) => {
//     res.status(404).sendFile(__dirname + '/public/404.html');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.get('/fun', (req, res) => {
    res.sendFile(__dirname + '/public/fun.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

// https://www.geeksforgeeks.org/how-to-add-a-404-error-page-in-the-express/
// Handling non matching request from the client 
// The 404 Route (ALWAYS Keep this as the last route)
// https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs

// either usage that follows is fine, I prefer sendFile()
// app.use((req, res, next) => { 
//     res.status(404).send( 
//         "<h1>Page not found on the server</h1>") 
// });

app.use((req, res, next) => { 
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log("Listening on port number: " + port);
    console.log(`Server is running at http://localhost:${port}`);
})