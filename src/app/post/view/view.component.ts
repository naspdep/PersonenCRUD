import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  public person: Person;

  constructor( public personService: PersonService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const personId = 'personId';
    this.id = this.route.snapshot.params[personId];

    this.personService.find(this.id).subscribe((data: Person) => {
      this.person = data;
    });
  }

}
