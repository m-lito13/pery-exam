export interface ArticlesServiceIfs { 
    getArcicleContent(articleName : string) : Promise<string>;
}