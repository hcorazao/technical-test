import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  customTemplate: any[] = [];
  assignmentForm: FormGroup;

  constructor(
    private _router: Router,
    private _toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.assignmentForm = this.formBuilder.group({})
  }

  ngOnInit(): void {
    try {
      const form = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : ''

      if (form) {
        this.customTemplate = form['config']['nav_tabs'];
      } else {
        this._router.navigate(['/'])
      }
    } catch (error) {
      this._toastr.error("Invalid form supplied");
      this._router.navigate(['/'])
    }
  }

  onSubmit() {
    const form = localStorage.getItem('form') ? JSON.parse(localStorage.getItem('form')) : '';

    if (form) {
      console.log(form['config']['nav_tabs'])
    }
  }

}
