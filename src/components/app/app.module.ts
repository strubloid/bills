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

// Components
import { AppComponent } from './app.component'
import { AppRoutingModule } from 'src/components/app/app-routing.module'
import { BillsComponent } from 'src/components/bills/bills.component'


@NgModule({
    declarations: [
        AppComponent,
        BillsComponent
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
