import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-builder',
  templateUrl: './page-builder.component.html',
  styleUrls: ['./page-builder.component.scss']
})
export class PageBuilderComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() imbricationLevel: number;

  private types: Set<string> = new Set<string>([
    'Paragraphe',
    'Image',
    'Section',
    'Ligne'
  ]);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.imbricationLevel += 1;
    /*
    Prevent section creation
    */
    if (this.imbricationLevel > 2) {
      this.types.delete('Section');
    }
  }

  createElement() {
    return this.fb.group({
      type: ['Paragraphe', Validators.required],
      value: [],
      elements: this.fb.array([])
    });
  }

  addElementToArray() {
    console.log(this.formGroup.get('elements'));
    (<FormArray>this.formGroup.get('elements')).push(this.createElement());
  }

  removeElementsFormArray(index) {
    (<FormArray>this.formGroup.get('elements')).removeAt(index);
  }

  loadImage() {
    const obj = this.formGroup.value;
    obj.value = 'Working';
    this.formGroup.setValue(obj);
  }

  clearChildren() {
    const array = (<FormArray>this.formGroup.get('elements'));
    while (array.length !== 0) {
      array.removeAt(0);
    }
    const obj = this.formGroup.value;
    obj.value = null;
    this.formGroup.setValue(obj);
  }
}
