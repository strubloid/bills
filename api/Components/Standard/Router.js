const path = require('path')

class Router {

  constructor () {
    try {

      if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config()
      }

      // this will load the modules
      this.loadModules();

      // this will load a general route, in case that we can't find a route
      this.loadGeneralRoute();

      // this will load all routes
      this.loadRoutes();

      // this will make sure that the module is exported, so we can use outside
      this.moduleExport();

    } finally {

    }
  }

  /**
   * Basic modules to load for a router
   */
  loadModules() {
    this.express = require('express');
    this.router = this.express.Router();
    this.fetch = require("node-fetch");
  }

  /**
   * This is reserved to global variables.
   */
  loadGeneralRoute() {
    this.router.get('*', async (req, res, next) => {
      try {

        // this will make continue to the other's routers
        next();

      } catch (e) {
        console.log(e)
      }
    })
  }

  loadRoutes() {
    throw new Error('You must implement: loadRoutes() ');
  }

  moduleExport() {
    throw new Error('You must implement: moduleExport() ');
  }


}

module.exports = Router;
