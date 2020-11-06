import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    public personService: PersonService,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(): {[p: string]: AbstractControl}{
    return this.form.controls;
  }

  submit(): void{
    console.log(this.form.value);
    this.personService.create(this.form.value).subscribe(res => {
      this.router.navigateByUrl('post/index');
    });
  }



}
