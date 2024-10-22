import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent {
  doctors = [
    {
      name: 'Dr. Evan Thomson',
      speciality: 'psychiatry',
      hospital: 'Crafto hospital',
      rating: '4.9',
      image: 'assets/doc1.jpg',
      social: {
        facebook: 'https://facebook.com/evan',
        twitter: 'https://twitter.com/evan',
        instagram: 'https://instagram.com/evan'
      }
    },
    {
      name: 'Dr. Bryan Johnson',
      speciality: 'cancer',
      hospital: 'Crafto hospital',
      rating: '4.7',
      image: 'assets/doc2.jpg',
      social: {
        facebook: 'https://facebook.com/bryan',
        twitter: 'https://twitter.com/bryan',
        instagram: 'https://instagram.com/bryan'
      }
    },
    // Add other doctors here
  ];
}
