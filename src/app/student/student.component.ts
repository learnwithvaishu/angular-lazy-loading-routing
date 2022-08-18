import { Component } from '@angular/core';

@Component({
  selector: 'student',
  template: `<h1>Student Works</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class StudentComponent {
  constructor() {
    console.log('Student component is called');
  }
}
