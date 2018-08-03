import { Component } from '@angular/core';
import { BreadCrumbHelperService } from '../bread-crumb-helper.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent  {
  constructor(public breadCrumbService: BreadCrumbHelperService) { }

}
