import { Component, OnInit } from '@angular/core';


// Array in Typescript -> NameofArray:DatatypeofArray[] =[ArrayData]

const HEROES: Hero[] = [
  {id: 11, name: 'MrNice'},
  {id: 12, name: 'Batman'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Goofy'},
  {id: 15, name: 'Supacow' },
  {id: 16, name: 'He-Man'},
  {id: 17, name: 'Bu'},
];

// another way
const HEROES2: Array<Hero> = [];

export class Hero {
  id: number;
  name: string;



}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent  {

  // public property heroes for expose the heroes from HEROES for binding!
  heroes = HEROES;

  selectedHero: Hero;


 // object of class Hero
hero: Hero = {
  id: 1,
  name: 'Windstorm',


};





}

