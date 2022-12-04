import { Controller, Get, Param, Query } from '@nestjs/common';
import { Hero } from './hero.model';
import { HeroService } from './hero.service';

@Controller('/hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes(@Query('name') name:string): Hero[] {
    return this.heroService.findHeroes(name);
  }


  @Get(':id')
  getOneHeroByID(@Param('id') id:number){
    return this.heroService.findHeroesByID(id);
  }
}
