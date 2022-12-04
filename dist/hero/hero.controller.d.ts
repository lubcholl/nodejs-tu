import { Hero } from './hero.model';
import { HeroService } from './hero.service';
export declare class HeroController {
    private readonly heroService;
    constructor(heroService: HeroService);
    getHeroes(name: string): Hero[];
    getOneHero(id: Number): Number;
}
