import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class SnackBarService {
    constructor(private snackBar: MatSnackBar) { }

    showError(message: string) {
        this.snackBar.open(message, 'Close', {
            duration: 0,
            //panelClass: ['red-snackbar']
        });
    }
}
