import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  myForm: FormGroup = this.fb.group(
    {
      name: ['', Validators.required]
    }
  )

  text1:string = 'Juandi';
  color: string = 'red';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  changeName() {
    this.text1 = 'JuanJo ' + Math.random();
  }

  changeColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

  isError( field: string): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

}
