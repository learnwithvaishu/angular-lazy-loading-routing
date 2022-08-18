import { Component } from '@angular/core';

@Component({
  selector: 'teacher',
  template: `<h1>Teacher Works</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class TeacherComponent {
  constructor() {
    console.log('Teacher component is called');
  }
}
