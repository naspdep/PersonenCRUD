import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { PersonService } from '../person.service';
import {Person} from '../person';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  public person: Person;
  form: FormGroup;

  constructor(public personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const personId = 'personId';
    this.id = this.route.snapshot.params[personId];
    this.personService.find(this.id).subscribe((data: Person) => {
      this.person = data;
    });

    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  get f(): {[p: string]: AbstractControl} {
    return this.form.controls;
  }

  submit(): void{
    this.personService.create(this.form.value).subscribe(res => { this.router.navigateByUrl('post/index'); });
  }
}
