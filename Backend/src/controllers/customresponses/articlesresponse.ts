export class ArticlesResponse { 
    introduction : string;
    articleName : string;
    scrapeDate : number;
    constructor(introduction : string , articleName : string, scrapeDate : number) { 
        this.introduction = introduction;
        this.articleName = articleName;
        this.scrapeDate = scrapeDate;
    }
} 