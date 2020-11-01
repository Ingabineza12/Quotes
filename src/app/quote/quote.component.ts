import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'"Start writing, no matter what. The water does not flow until the faucet is turned on."', '- Louis L’Amour',new Date(2006,4,2)),
    new Quote(2,'"Get it down. Take chances. It may be bad, but it\'s the only way you can do anything really good."', '- William Faulkner',new Date(2008,5,5)),
    new Quote(3,'"The first draft is just you telling yourself the story."', '- Terry Pratchett',new Date(2015,11,23)),
    new Quote(4,'"You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.""', '- Octavia E. Butler',new Date(2018,3,18)),
    new Quote(5,'"Start before you’re ready."', '- Steven Pressfield',new Date(2019,5,1)),
    new Quote(6,'"You can always edit a bad page. You can’t edit a blank page"', '- Jodi Picoult', new Date(2020,4,20)),

  ];
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  readQuote(isRead, index){
    if (isRead) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
