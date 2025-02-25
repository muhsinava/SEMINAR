const express = require("express");
const app = express();

// Serve static files from the "public" folder
app.use(express.static("static"));

// Set the template engine (e.g., EJS)
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true })); // To process form data

// Route to show the form
app.get('/', (req, res) => {
    res.render('form'); // Show input form
 });

// Route to handle form submission and display user data
 app.post('/profile', (req, res) => {
   const userData = {
      username: req.body.username, // Get name from form
      age: req.body.age           // Get age from form
  };
    res.render('profile', userData); // Send data to profile.ejs }
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});