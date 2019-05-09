import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  title = 'Horizon';
  expertiseForm: FormGroup;
  imbricationLevel = 0;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {

    this.expertiseForm = this.fb.group({
      form: this.fb.group({
        type: 'Initial',
        value: '',
        elements: this.fb.array([])
      })
    });
  }

  receiveEvent(event) {
    this.expertiseForm.setValue({ 'elements': event.value });
  }

  print() {
    return JSON.stringify(this.expertiseForm.get('form').value);
  }
}
