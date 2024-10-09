export interface ArticlesServiceIfs {
    getArcicleContent(articleName: string, language: string): Promise<string>;
}