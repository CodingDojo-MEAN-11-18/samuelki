import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.getAbility();
  }

  getPokemon() {
    let bulbasaur = this._http.get<PokemonData>('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log("Got Bulbasaur!", data);
      console.log("Bulbasaur's abilities are:")
      for (const ability of data.abilities) {
        console.log(ability.ability.name);
      }
    });
  }

  getAbility() {
    let ability = this._http.get('https://pokeapi.co/api/v2/ability/34/');
    ability.subscribe((data: any) => {
      console.log(`${data.pokemon.length - 1} other pokemon have the chlorophyll ability`)
    });
  }
}

interface PokemonData {
  abilities: Array<Ability>
}

interface Ability {
  ability: {
    name: string,
    url: string
  }
}
