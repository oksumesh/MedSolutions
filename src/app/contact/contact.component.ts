import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactDetails = [
    {
      icon: 'location_on',
      title: 'Hospital location',
      content: '27 Eden walk eden center,<br />Orchard view, Paris, France'
    },
    {
      icon: 'email',
      title: 'Email address',
      content: 'infoyourdomain.com<br />hryourdomain.com'
    },
    {
      icon: 'phone',
      title: "Let's talk with us",
      content: 'Phone: 1-800-222-000<br />Fax: 1-800-222-002'
    },
    {
      icon: 'work',
      title: 'Doctor consulting',
      content: 'Lorem ipsum is simply the printing typesetting.'
    }
  ];

  // FAQ data
  faqItems = [
    {
      question: 'What happens if I need to go to a hospital?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      isActive: false
    },
    {
      question: 'See your claims, check on coverage and more?',
      answer: '',
      isActive: false
    },
    {
      question: 'Easy access more mental health providers?',
      answer: '',
      isActive: false
    }
  ];

  // Opening hours data
  openingHours = [
    { day: 'Monday - Wednesday', time: '08:00 AM - 20:00 PM' },
    { day: 'Thursday - Friday', time: '08:00 AM - 20:00 PM' },
    { day: 'Saturday', time: '08:00 AM - 12:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];
}
