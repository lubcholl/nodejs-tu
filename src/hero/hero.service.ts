import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    heroes: Hero[] = [
      {name:'Spiderman',
      realName:'Peter Parker',
      powers:['web','strength'],
      universe:'Marvel',
      id: 1
      },
      
      {name:'Sponge',
      realName:'Bob',
      powers:['Breathing underwater'],
      universe:'nz',
      id: 2},

      {name:'Mickey',
      realName:'Mouse',
      powers:['Running'],
      universe:'Tom and Jerry',
      id: 3}
    ];

    findHeroes(name:string):Hero[]{
      let holder = [];
      this.heroes.forEach(function(hero){
        if(name.includes(hero.name)||name.includes(hero.name.toLowerCase())){
          holder.push(hero)
        }
      })
      return holder;
    }

    findHeroesByID(id:number):Hero{
      let holder:Hero;
      this.heroes.forEach(function(hero){
        if (hero.id == id) {
            holder = hero
        }
      })
      return holder;
    }
}
