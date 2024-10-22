import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import {provideNativeDateAdapter} from '@angular/material/core';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { HomeServiceComponent } from './home/home-service/home-service.component';
import { HomeDoctorsComponent } from './home/home-doctors/home-doctors.component';
import { HomeAppointmentComponent } from './home/home-appointment/home-appointment.component';
import { BookAppointmentComponent } from './shared/book-appointment/book-appointment.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TreatmentsComponent,
    DoctorsComponent,
    TimetableComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeroComponent,
    HomeAboutComponent,
    HomeServiceComponent,
    HomeDoctorsComponent,
    HomeAppointmentComponent,
    BookAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatCardModule,MatSelectModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync(),provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
