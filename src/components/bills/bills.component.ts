import { Component } from '@angular/core'
import { Bill } from 'src/components/bills/bill.model'
import { NgForm } from '@angular/forms'

@Component({
    selector: 'bills',
    templateUrl: './bills.component.html',
    styleUrls: ['./bills.component.scss']
})
export class BillsComponent {
    public title = 'Bills Components'
    public loading = false
    public bill : Bill;

    constructor () {

        this.bill = {
            id: undefined,
            date: undefined,
            name: undefined,
            money: undefined
        };

    }

    ngOnInit () {



    }

    onSavePost = (form : NgForm) => {

        // validations
        if (form.invalid) {
            return
        }

        console.log('Needs to be done!')
    }
}
