import { Component } from '@angular/core';
import {Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[] = [
    {id:1, saying:'"Start writing, no matter what. The water does not flow until the faucet is turned on."'},
    {id:2,saying:'"Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good."'},
    {id:3,saying:'"The first draft is just you telling yourself the story."'},
    {id:4,saying:'"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."'},
    {id:5,saying:'"Start before you’re ready."'},
    {id:6,saying:'"The first draft is just you telling yourself the story."'},
  ];
}
