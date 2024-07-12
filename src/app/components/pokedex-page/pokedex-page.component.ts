import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../shared/pokedex.service';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';

@Component({
  selector: 'app-pokedex-page',
  standalone: true,
  imports: [PokemonListComponent, CommonModule, PokemonDetailComponent],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  chosenPokemon: Pokemon = { name: '', img: '', desc: ''};

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.pokemonList = this.pokedexService.getPokemons();
  }

  onReceiveChosenPokemon(chosenPoke: Pokemon): void {
    this.chosenPokemon = chosenPoke;
    console.log("test:", this.chosenPokemon)
  };

}
