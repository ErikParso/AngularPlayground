import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
    {
        path: '',
        component: StudentsComponent,
        children: [
            {
                path: '',
                component: StudentsListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentsRoutingModule { }
