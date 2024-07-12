import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pokemon } from '../../shared/pokemon';
import { PokedexService } from '../../shared/pokedex.service';

@Component({
  selector: 'app-create-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-pokemon.component.html',
  styleUrl: './create-pokemon.component.css'
})
export class CreatePokemonComponent implements OnInit {

  newPokemon!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pokedexService: PokedexService
  ) {}

  pokemonList: Pokemon[] = [];

  ngOnInit(): void {
    this.newPokemon = this.fb.group({
      name: ['', Validators.required],
      img: ['', Validators.required],
      desc: ['', Validators.required]
    });
    this.pokemonList = this.pokedexService.getPokemons();
  }

  fail = false;

  onSubmit() {
    if (this.newPokemon.valid) {
      console.log('newPokemon submitted : ', this.newPokemon.value)
      this.pokedexService.addPokemon(this.newPokemon.value as Pokemon)
      this.newPokemon.reset();
      alert('Pokémon successfully added to the Pokédex!')
      console.log(this.pokemonList)
    } else {
      this.fail = true
    }
  }

}
