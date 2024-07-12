import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../shared/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  @Input()
  pokemon!: Pokemon;

  @Output()
  sendChosenMon: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  showDetails(poke: Pokemon): void {
    this.sendChosenMon.emit(poke);
    console.log("Chosen Pokemon : ", poke.name)
  }

}
