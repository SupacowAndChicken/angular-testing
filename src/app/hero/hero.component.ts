import { Component, OnInit } from '@angular/core';


const HEROES: Hero[] = [
{name: 'superman', id: 777},
{name: 'superman', id: 777},
{name: 'superman', id: 777},
{name: 'superman', id: 777},
{name: 'superman', id: 777},
{name: 'superman', id: 777},
{name: 'superman', id: 777},

];

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

heroes = HEROES;

city: City = {
name: 'cologne',
direction: 'west'
};

// hero: Hero = { name: '', id: 666 };

  constructor() { }

  ngOnInit() {
  }

}

class City {
  name: string;
  direction: string;
}

class Hero {
  name: string;
  id: number;
}
