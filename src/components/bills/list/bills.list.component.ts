import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Ensure this import is specifically for the map operator

@Component({
    selector: 'bills',
    templateUrl: './bill.list.component.html'
})
export class BillsListComponent {
    public title = 'Bills List'
    public bills : any = [];
    public url : any = "http://localhost:8888/bill/list";

    constructor(private http: HttpClient) {}

    async ngOnInit () {
        // await this.loadBills();
        this.fetchData();
    }

    getData(){
        //return this.http.get(this.url).map((res:Response)=>res.json());

        return this.http.get<any>(this.url).pipe(
            map((response: any) => {
                // You can perform transformations on the response data here
                return response;
            })
        );

    }
    fetchData(){

        this.getData().subscribe(bills=>{
            console.log(bills);
            this.bills = bills;
        })
    }


    async loadBills () {

        const apiUrl = 'http://localhost:8888/bill/list';
        try {

            console.log('FRONTEN D')

            // loads list of bills
            // this.bills = await this.http.get("http://localhost:6000/bill/list");
            const response = await this.http.get(apiUrl).subscribe((response) => {
                this.bills = response;
                },(error) => { console.log(error)});

            console.log('CALLED?')

            console.log(this.bills)

        } catch (e) {

            // Handle any errors that occur during the request
            console.log(e);
        }



    }
}
