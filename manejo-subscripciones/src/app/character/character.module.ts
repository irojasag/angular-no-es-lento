import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@NgModule({
  declarations: [CharacterComponent, CharacterCardComponent],
  imports: [CommonModule, CharacterRoutingModule],
})
export class CharacterModule {}
