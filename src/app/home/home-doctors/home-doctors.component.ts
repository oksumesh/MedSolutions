import { Component } from '@angular/core';

@Component({
  selector: 'app-home-doctors',
  templateUrl: './home-doctors.component.html',
  styleUrl: './home-doctors.component.css'
})
export class HomeDoctorsComponent {
  doctors = [
    {
      img: 'assets/doc1.jpg',
      name: 'Dr. Shoko Mugikura',
      specialty: 'psychiatry',
      rating: 4.9,
      description: 'Specialize in psychiatry at sumesh hospital.',
      social: {
        facebook: 'https://facebook.com/shoko',
        twitter: 'https://twitter.com/shoko',
        instagram: 'https://instagram.com/shoko',
      },
    },
    {
      img: 'assets/doc2.jpg',
      name: 'Dr. Herman Miller',
      specialty: 'cancer',
      rating: 4.7,
      description: 'Specialize in cancer at sumesh hospital.',
      social: {
        facebook: 'https://facebook.com/herman',
        twitter: 'https://twitter.com/herman',
        instagram: 'https://instagram.com/herman',
      },
    },
    {
      img: 'assets/doc3.jpg',
      name: 'Dr. Leonel Mooney',
      specialty: 'pediatrics',
      rating: 5.0,
      description: 'Specialize in pediatrics at sumesh hospital.',
      social: {
        facebook: 'https://facebook.com/leonel',
        twitter: 'https://twitter.com/leonel',
        instagram: 'https://instagram.com/leonel',
      },
    },
    {
      img: 'assets/doc4.jpg',
      name: 'Dr. Matthew Taylor',
      specialty: 'psychiatry',
      rating: 5.0,
      description: 'Specialize in psychiatry at sumesh hospital.',
      social: {
        facebook: 'https://facebook.com/matthew',
        twitter: 'https://twitter.com/matthew',
        instagram: 'https://instagram.com/matthew',
      },
    },
  ];
}