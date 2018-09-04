import { AbstractControl, Validator } from '@angular/forms';
import { Input } from '@angular/core';

export function IsInteger(control: AbstractControl)
// : { [key: string]: any } | null =>
// tslint:disable-next-line:one-line
{
    return Number.isInteger(+control.value) ? null : { notValidInteger: { value: control.value } };
}

export class IsIntegerValidator implements Validator {
    @Input('isInteger') isInteger: string;
    validate = IsInteger;
}
