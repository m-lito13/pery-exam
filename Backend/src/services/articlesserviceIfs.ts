import { ArticleDTO } from "../dto/articledto";

export interface ArticlesServiceIfs {
    getArcicleContent(articleName: string, language: string, requestLocalDate : Date): Promise<ArticleDTO>;
}