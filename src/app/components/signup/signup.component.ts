import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  term: FormControl;

  form: FormGroup;

  passwordMinLenght = 8;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // FormControl(default value, [validators], [Asynchronous Validators])
    this.email = new FormControl(null, [Validators.required, CustomValidators.email()]);
    this.password = new FormControl(null, [Validators.required,
      Validators.minLength(this.passwordMinLenght)]);
    this.term = new FormControl(false, [Validators.requiredTrue]);
    this.confirm = new FormControl(null, [Validators.required , CustomValidators.verif(this.password)]);
    this.form = this.fb.group(
      {
        email: this.email,
        password: this.password,
        confirm: this.confirm,
        term: this.term
      });
  }

  public controlEmail(): string | boolean {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return 'L\'email est obligatoire';
      }
      if (this.email.hasError('error_email')) {
        return 'le format de l\'email est incorrect';
      }
    }
    return false;
  }

  public controlPassword(): string | boolean {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return 'Le password est obligatoire';
      }
      if (this.password.hasError('minlength')) {
        return `le mot de passe doit contenir au moins ${this.passwordMinLenght} caractères`;
      }
    }
    return false;
  }

  public controlConfirm(): string | boolean {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return 'La confirmation est obligatoire';
      }
      if (this.confirm.hasError('error_verif')) {
        return 'La confirmation doit être identique au mot de passe';
      }
    }
    return false;
  }

  public controlTerm(): string | boolean {
    if (this.term.dirty) {
      if (this.term.hasError('required')) {
        return 'Les CGU sont obligatoires';
      }
    }
    return false;
  }

  public signup(): void {

    console.log(this.form.valid);
    if (this.form.valid) {
      this.form.reset();
    }
  }

}
