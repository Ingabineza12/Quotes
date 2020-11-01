export class Quote {
    showAuthor: boolean;
    constructor(public id: number,public saying: string,public author: string,public readDate: Date){
        this.showAuthor=false;
    }  
}
