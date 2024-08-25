import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
type Grade = 'A'|'B'|'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false); //.readonly;
  public grade = signal<Grade>('A');
first: any;

  public toogleContent(){
    this.showContent.update( value => !value ); 
  }
  public changeGrade(){
    this.grade.update( (value => value === 'A' ? 'B' : 'A' ));
  }
  public toogleContentAndChangeGrade() {
    this.toogleContent();
    this.changeGrade();
  }

  public showContent2 = signal(false);
  public grade2 = signal<Grade>('A');

  public frameworks = signal (['Angular', 'React', 'Vue', 'Svelte','Qwik']);
  public frameworks2 = signal ([]);
  // toogleContent2
}
