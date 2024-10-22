import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { TimetableComponent } from './timetable/timetable.component';
import { ContactComponent } from './contact/contact.component';
import { BookAppointmentComponent } from './shared/book-appointment/book-appointment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'treatments', component: TreatmentsComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'timetable', component: TimetableComponent },
  { path: 'contact', component: ContactComponent },
  {path:'book-appointment',component:BookAppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
