import { Component } from '@angular/core';
import {Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[] = [
    new Quote(1,'"Start writing, no matter what. The water does not flow until the faucet is turned on."', '- Louis L’Amour',new Date(2,4,2006)),
    new Quote(2,'"Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good."', '- William Faulkner',new Date(5,5,2008)),
    new Quote(3,'"The first draft is just you telling yourself the story."', '- Terry Pratchett',new Date(23,11,2015)),
    new Quote(4,'"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.""', '- Octavia E. Butler',new Date(18,3,2018)),
    new Quote(5,'"Start before you’re ready."', '- Steven Pressfield',new Date(1,5,2019)),
    new Quote(6,'"You can always edit a bad page. You can’t edit a blank page"', '- Jodi Picoult', new Date(20,4,2020)),

  ];
}
