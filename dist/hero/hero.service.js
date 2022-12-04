"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroService = void 0;
const common_1 = require("@nestjs/common");
let HeroService = class HeroService {
    constructor() {
        this.heroes = [
            { name: 'Spiderman',
                realName: 'Peter Parker',
                powers: ['web', 'strength'],
                universe: 'Marvel' },
            { name: 'Hulk',
                realName: 'Banner',
                powers: ['strength'],
                universe: 'Marvel' },
            { name: 'uzunova',
                realName: 'monika',
                powers: ['kifla'],
                universe: 'bg,sofiq' }
        ];
    }
    findHeroes(name) {
        let holder = [];
        this.heroes.forEach(function (hero) {
            if (name.includes(hero.name) || name.includes(hero.name.toLowerCase())) {
                holder.push(hero);
            }
        });
        return holder;
    }
};
HeroService = __decorate([
    (0, common_1.Injectable)()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map