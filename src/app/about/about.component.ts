import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutBanner = {
    title: 'About Clinic',
    subtitle: 'Modern treatment centre',
    icon: 'home',
    infoTitle: 'Hospital near me',
    infoSubtitle: 'Professional doctor',
    bannerImage: '../../assets/img/banner/about-banner.png',
    verifiedText: 'Hospital near me',
    verifiedSubtitle: 'Professional doctor',
  };
  // Patient Reviews Data
  patientReviews = [
    {
      name: 'Jacob',
      comment: 'Wonderful surgeon and the staff was helpful.',
      img: 'assets/patient1.jpg',
    },
    {
      name: 'Alexa',
      comment: 'Doctor is a great experienced and friendly.',
      img: 'assets/patient2.jpg',
    },
    {
      name: 'Michael',
      comment: 'The treatment was excellent and the service was top-notch.',
      img: 'assets/patient3.jpg',
    },
  ];
}
