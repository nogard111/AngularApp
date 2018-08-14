import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import {
  MatListModule,
  MatListItem,
  MatList,
  MatPaginator,
  PageEvent
} from '@angular/material';

import { ICourse } from '../Course-interface';
import { CourseService } from '../course.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoaderService } from '../../core/loader.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) private paginator: MatPaginator;
  public coursesItems: ICourse[] = [];

  public pageSize = 5;
  public pageIndex = 0;
  public length = 0;

  public subscription: any;


  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    public loaderService: LoaderService) { }

  ngOnInit() {
    this.pageIndex = 0;
    this.length = 0;

    this.subscription = this.courseService.ChangeEvent.subscribe(() => {
      this.pageIndex = 0; // go to first tabe on delete/ search
      this.getData();
    });
    this.getData();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onDeleteEvent(id: string) {
    this.courseService.RemoveItem(id);
  }
  public onEditEvent(id: string) {
    console.log('Edit');
    // this.courseService.editCourse = id;
    this.router.navigate(['/courses', id]);
  }

  public getData() {
    this.update(this.pageIndex * this.pageSize, this.pageSize);
  }
  public update(start: number, count: number) {
    this.loaderService.loading = true;
    this.courseService.GetListPart(start, count).subscribe(
      response => {
        this.coursesItems = response.data;
        this.length = response.length;
        this.pageIndex = start / count;
        // this.pageSize = response.pageSize;
        this.loaderService.loading = false;
      },
      error => {
        console.log(error);
        this.loaderService.loading = false;
      }
    );
  }

  public getServerData(event?: PageEvent) {
    this.update(event.pageIndex * event.pageSize, event.pageSize);
    return event;
  }
}
