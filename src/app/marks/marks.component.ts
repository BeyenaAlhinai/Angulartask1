import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  students = [
    { name: 'Beyena', email: 'Beyenaalhinai@gmail.com', marks: 90, status: '' },
    { name: 'Amal', email: 'Amal@gmail.com', marks: 40, status: '' },
    { name: 'Huda', email: 'HudaAlkatri@gmail.com', marks: 77, status: '' },
    { name: 'Nuha', email: 'Nuha12@gmail.com', marks: 50, status: '' },
    { name: 'Fatma', email: 'FatmaAlhinai@gmail.com', marks: 33, status: '' }
  ];

  constructor() {
    this.calculateStatus();
  }

  calculateStatus() {
    for (const student of this.students) {
      student.status = student.marks >= 50 ? 'PASS' : 'FAIL';
    }
  }


}
