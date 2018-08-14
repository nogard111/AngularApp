import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
    constructor() { }

    public loading = false;
}
