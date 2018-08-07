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
import { CanActivateAuthenticateGuard } from './core/can-activate-authenticate-guard';
import { LoginPageComponent } from './user/login-page/login-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { MatPaginatorModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'courses/:id', component: EditCourseComponent, canActivate: [CanActivateAuthenticateGuard] },
  { path: 'courses/New', component: EditCourseComponent, canActivate: [CanActivateAuthenticateGuard] },
  {
    path: 'courses',
    component: CoursePageComponent,
    canActivate: [CanActivateAuthenticateGuard],
    data: { title: 'Courses List' }
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  { path: 'notfound', component: PageNotFoundComponent },
  {
    path: '**',
    redirectTo: 'notfound'
  },
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
    HttpClientModule,
    MatPaginatorModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
