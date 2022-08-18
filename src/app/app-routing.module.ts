import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student-routing.module').then(
        (s) => s.StudentRoutingModule
      ),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher-routing.module').then(
        (t) => t.TeacherRoutingModule
      ),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
