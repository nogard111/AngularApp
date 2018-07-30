import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { CoursesModule } from './courses/courses.module';
import { CoursePageComponent } from './courses/course-page/course-page.component';
import { EditCourseComponent } from './courses/edit-course/edit-course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanActivateGuard } from './core/can-activate-guard';

const appRoutes: Routes = [
  { path: 'courses/:id', component: EditCourseComponent, canActivate: [CanActivateGuard] },
  { path: 'courses/New', component: EditCourseComponent, canActivate: [CanActivateGuard] },
  {
    path: 'courses',
    component: CoursePageComponent,
    canActivate: [CanActivateGuard],
    data: { title: 'Courses List' }
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'notfound'
  },
  { path: 'notfound', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    UserModule,
    CoursesModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
