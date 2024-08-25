import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <app-title [title]="currentFramework()" withShadow />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``,
})
export default class
 ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name}`
  )
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: '2022-09-01'
  })
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: '2022-09-01'
  }
  constructor() {
    
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React ';
      this.frameworkAsSignal.update( value=>( {
        ...value,
        name: 'React ',
      }))
    }, 3000)
    
    // setInterval(() => {
    //   this.frameworkAsSignal().name = 'ELvis ' + Math.random()
    // }, 2000)
    // setInterval(() => {
    //   this.frameworkAsProperty.name = 'Angular ' + Math.random()
    // }, 2000)
  }
  
}
