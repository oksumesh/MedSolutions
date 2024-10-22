import { Component } from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.css'
})
export class TimetableComponent {
  currentFilter: any = 'All Schedule';
  
  // Schedule data for each department and time slot
  timetable = [
    { time: '09:00 - 10:00', Monday: { dept: 'Pediatrician', doctor: 'Dr. Thomson' }, Tuesday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Wednesday: { dept: 'Neurology', doctor: 'Dr. Johnson' }, Thursday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Friday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Saturday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Sunday: { dept: 'Orthopedics', doctor: 'Dr. Dupont' } },
    { time: '10:00 - 11:00', Monday: { dept: 'Pediatrician', doctor: 'Dr. Miller' }, Tuesday: { dept: 'Pediatrician', doctor: 'Dr. Miller' }, Wednesday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Thursday: { dept: 'Neurology', doctor: 'Dr. Taylor' }, Friday: { dept: 'Cardiology', doctor: 'Dr. Watson' }, Saturday: { dept: 'Neurology', doctor: 'Dr. Taylor' }, Sunday: { dept: 'Cardiology', doctor: 'Dr. Watson' } }
    // Add more rows as needed...
  ];

  filters:any = ['All Schedule', 'Pediatrician', 'Neurology', 'Cardiology', 'Orthopedics'];

  // Filter the timetable based on the selected department
  getFilteredTimetable() {
    if (this.currentFilter === 'All Schedule') {
      return this.timetable;
    }
    return this.timetable.map((slot:any) => {
      const filteredSlot:any = {};
      for (const day in slot) {
        if (day === 'time' || slot[day]?.dept === this.currentFilter) {
          filteredSlot[day] = slot[day];
        } else {
          filteredSlot[day] = { dept: '', doctor: '' }; // Empty cell for non-matching slots
        }
      }
      return filteredSlot;
    });
  }

  // Set the current filter
  setFilter(filter: string) {
    this.currentFilter = filter;
  }
}
