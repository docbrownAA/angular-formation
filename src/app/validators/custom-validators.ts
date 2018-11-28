import {ValidateFn} from 'codelyzer/walkerFactory/walkerFn';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {
  // ValidatorFn ==> (c: AbstractControl): ValidationErrors | null
  // ValidationErrors ==> {{key: string}:any}
  public static email(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value != null || control.value !== '') {
        const regexp = new RegExp('^[0-9a-z._-]+@[0-9a-z.-]{2,}\\.[a-z]{2,5}', 'i');
        return (!regexp.test(control.value)) ? {'error_email': control.value} : null;
      }
    };
  }

  public static verif(password: AbstractControl): ValidatorFn {
    console.log(password);
    return (control: AbstractControl): ValidationErrors | null => {
      return (password.value !== control.value) ? {'error_verif': control.value} : null;
    };
  }
}


