import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
  }

  getPokemon() {
    let bulbasaur = this._http.get<PokemonData>('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      console.log("Got Bulbasaur!", data);
      for (const ability of data.abilities) {
        console.log(ability.ability.name);
      }
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
