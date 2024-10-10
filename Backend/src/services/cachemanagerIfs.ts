import { ArticleDTO } from "../dto/articledto";

export interface CacheManagerIfs {
    getItem(keyToFind: string): ArticleDTO | undefined;
    containsItem(keyToFind: string): boolean;
    // updateItem(articleName: string, language: string): void;
    // addItem(keyToAdd: string, itemToAdd: ArticleDTO): void;
    putItem(keyToAdd: string, itemToPut: ArticleDTO) : void;
}