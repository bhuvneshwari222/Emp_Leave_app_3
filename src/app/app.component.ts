import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Emp_Leave_app_3';
  @ViewChild('empForm') empForm!: NgForm;

  onSubmit() {
    if (this.empForm.invalid) {
      return this.empForm.control.markAllAsTouched()
    }
    this.empForm.resetForm()
  }
}
