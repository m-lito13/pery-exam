export class ArticleDTO { 
    scrapeDate : number;
    articleName : string;
    introduction : string;    
    constructor(introduction : string , articleName : string, scrapeDate : number) { 
        this.introduction = introduction;
        this.articleName = articleName;
        this.scrapeDate = scrapeDate;
    }
} 