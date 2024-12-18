import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Persoon } from '../Persoon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  static readonly PERSONEN: Persoon[] = [
    { id: 1, naam: 'Ann' },
    { id: 2, naam: 'Elise' },
    { id: 3, naam: 'Marie' },
    { id: 4, naam: 'Els' },
    { id: 5, naam: 'Jan' },
    { id: 6, naam: 'Piet' },
    { id: 7, naam: 'Joris' },
    { id: 8, naam: 'Jos' },
    { id: 9, naam: 'Ken' },
    { id: 10, naam: 'Andrew' },
  ];
  title = 'Taak';
  personen = AppComponent.PERSONEN;
}
