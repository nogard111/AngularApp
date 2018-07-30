import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumbHelperService } from '../bread-crumb-helper.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent  {
  constructor(private route: ActivatedRoute, private router: Router, private breadCrumbService: BreadCrumbHelperService) { }

}
