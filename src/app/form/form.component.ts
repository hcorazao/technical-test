import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  assignmentForm: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    private _formBuilder: FormBuilder,
    private _ngZone: NgZone,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.assignmentForm = this._formBuilder.group({
      form: ['', [Validators.required]]
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.assignmentForm.controls[controlName].hasError(errorName);
  };

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  onSubmit() {
    try {
      if (this.assignmentForm.invalid) {
        return
      }

      const { form } = this.assignmentForm.value;
      this._router.navigate(['/assignment']);
      localStorage.setItem('form', JSON.stringify(JSON.parse(form)))
    } catch (error) {
      console.log(error)
      this._toastr.error('Please enter a valid JSON');
    }
  }

}
