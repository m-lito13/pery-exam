import { ArticleDTO } from "../../dto/articledto";
import { CacheManagerIfs } from "../cachemanagerIfs";

export class CacheManager implements CacheManagerIfs {
    private data: { [key: string]: ArticleDTO };
    constructor() {
        this.data = {};
    }
    
    putItem(keyToPut: string, itemToPut: ArticleDTO): void {
        //if does not exists - will be added , else will be overwritten
        this.data[keyToPut] = itemToPut;
    }

    getItem(keyToFind: string): ArticleDTO | undefined {
        let result = (keyToFind in this.data) ? this.data[keyToFind] : undefined;
        return result;
    }

    containsItem(keyToFind: string): boolean {
        let result = keyToFind in this.data;
        return result;
    }
}; 