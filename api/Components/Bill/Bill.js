const Router = require('../Standard/Router');

class BookRouter extends Router {

  constructor() {
    super();
  }

  moduleExport() {
    module.exports = this.router;
  }

  loadModules() {

    super.loadModules();

    // TODO: you must load the controller here
    // this.bookController = new BookController();
  }

  loadRoutes() {
    this.loadBillList();
  }

  loadBillList() {

    this.router.get('/list', async(req,res)=>{
      try {

        console.log('GOT A NEW BILL CHECK')

        let bills = [
          {
            date : '21/12/2022',
            name : 'pinergy',
            value : '20.00',
          },
          {
            date : '21/12/2022',
            name : 'pinergy2',
            value : '20.00',
          },
          {
            date : '21/12/2022',
            name : 'pinergy3',
            value : '20.00',
          }
        ];

        // TODO: add controller here to load the things from database
        // let books = await this.bookController.loadAllBooks();

        // res.render('bill/list', {
        //   bills : bills,
        // });

        // return bills;
        return res.json(bills);



      } catch (e){
        console.log(e)
      }

    })
  }

}

let bookRouter = new BookRouter();