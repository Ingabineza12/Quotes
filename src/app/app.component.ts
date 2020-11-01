import { Component } from '@angular/core';
import {Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes:Quote[] = [
    {id:1, saying:'"Start writing, no matter what. The water does not flow until the faucet is turned on."' ,author:'- Louis L’Amour'},
    {id:2,saying:'"Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good."', author:'- William Faulkner'},
    {id:3,saying:'"The first draft is just you telling yourself the story."' , author:'- Terry Pratchett'},
    {id:4,saying:'"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."',author:'- Octavia E. Butler'},
    {id:5,saying:'"Start before you’re ready."', author:'- Steven Pressfield'},
    {id:6,saying:'"You can always edit a bad page. You can’t edit a blank page"', author:' - Jodi Picoult'},
  ];
}
