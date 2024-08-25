import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  styles: ``,
  template: `
    <h1 class="text-3xl mb-5">{{title}} - {{withShadow}}</h1>
  `
})
export class TitleComponent {
  @Input( {required: true } ) title!:string; //siempre tendra un valor
  @Input( {transform: booleanAttribute} ) withShadow:boolean = false;
}
