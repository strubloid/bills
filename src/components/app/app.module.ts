import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

// Material imports
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { HttpClientModule } from '@angular/common/http'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker'

// routes
import { AppRoutingModule } from 'src/components/app/app-routing.module'
import { BillsRoutingModule } from 'src/components/bills/bills-routing.module'

// Components
import { AppComponent } from './app.component'
import { BillsComponent } from 'src/components/bills/bills.component'
import { BillsListComponent } from 'src/components/bills/list/bills.list.component'
import { HeaderComponent } from 'src/components/header/header.component'
import { HomepageComponent } from 'src/components/app/homepage/homepage.component'



@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        BillsComponent,
        BillsListComponent
    ],
    imports: [
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatToolbarModule,
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        MatNativeDateModule,
        AppRoutingModule,
        BillsRoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule
    ],
    providers: [
        MatDatepickerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
