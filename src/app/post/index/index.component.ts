import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  people: Person[] = [];
  searchTerm: string;

  constructor(public personService: PersonService) { }

  ngOnInit(): void {
    this.personService.getAll().subscribe((data: Person[]) => {
      this.people = data;
    });
  }

  deletePerson(id): void {
    this.personService.delete(id).subscribe(res => {
      this.people = this.people.filter(item => item.id !== id);
    });
  }
}
