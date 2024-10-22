import { Component } from '@angular/core';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrl: './treatments.component.css'
})
export class TreatmentsComponent {
  treatments = [
    {
      icon: 'favorite',
      title: 'Dentistry',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'local_hospital',
      title: 'Internal medicine',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'healing',
      title: 'Genetics',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'medical_services',
      title: 'Neuro surgery',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'favorite',
      title: 'Cardiology',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'local_hospital',
      title: 'Hepatologist',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'visibility',
      title: 'Optometrists',
      description: 'Lorem ipsum is simply dummy text printing.'
    },
    {
      icon: 'favorite_border',
      title: 'Cardiac surgery',
      description: 'Lorem ipsum is simply dummy text printing.'
    }
  ];
}
