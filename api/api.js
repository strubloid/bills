const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");
require('dotenv').config()

class Api {

  constructor () {

    this.app = express();
    this.port = process.env.PORT || 8888;
    this.projectFolder = path.dirname(__dirname);
  }

  // this is the factory method to build the API
  buildAPI = () => {
    this.loadEnvironmentConfigurations();
    this.loadModules();
    this.loadRouters();
    this.setupDatabase();
    this.listen();
  }

  loadEnvironmentConfigurations() {

    // for development configurations
    if (process.env.NODE_ENV !== 'production') {
      const corsOptions = {
        origin: 'http://localhost:8000', // Replace with your Angular app's URL
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 200,
      };

      this.app.use(cors(corsOptions)); // Enable CORS for all routes
    }

  }

  loadModules() {

    // Configures Express to use the bodyParser middleware with the urlencoded option (Content-Type of application/x-www-form-urlencoded)
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // Configures Express to use the bodyParser middleware with the json option (Content-Type of application/json)
    this.app.use(bodyParser.json());

    // Serve static files from the Angular app
    let angularSrcPath = path.join(this.projectFolder, 'src');
    this.app.use(express.static(angularSrcPath));

    // Redirect all requests to the Angular app's main entry point
    // this.app.get('*', (req, res) => {
    //   res.sendFile(path.join(angularSrcPath, 'index.html'));
    // });


  }

  loadRouters() {
    // Load your routers and set up routes here.
    const billRouter = require('./Components/Bill/Bill');

    this.app.use('/bill', billRouter); // Example route for bills
  }

  setupDatabase () {

    // loading the library for mongo-db + connection
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to the MongoDB database'));

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

new Api().buildAPI();