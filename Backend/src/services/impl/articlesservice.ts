import { ArticlesServiceIfs } from "../articlesserviceIfs";
import { CacheManagerIfs } from "../cachemanagerIfs";
import { ArticleDTO } from "../../dto/articledto";
import { DateHelper } from "../datehelper";
import { RemoteContentManagerIfs } from "../remotecontentmanagerifs";

const MAX_DATE_DIFF = 300;

export class ArticlesService implements ArticlesServiceIfs {
    private cacheManager: CacheManagerIfs;
    private dateHelper: DateHelper;
    private remoteContentManager: RemoteContentManagerIfs;
    constructor(cacheManager: CacheManagerIfs, remoteContentManager: RemoteContentManagerIfs) {
        this.cacheManager = cacheManager;
        this.remoteContentManager = remoteContentManager;
        this.dateHelper = new DateHelper();
    }

    async getArcicleContent(articleName: string, language: string, requestLocalDate: Date): Promise<ArticleDTO> {
        let itemFromCache = this.getValidItemFromCache(articleName, language, requestLocalDate);
        if (itemFromCache) {
            console.log(`from cache ${articleName} ${language}`);
            itemFromCache.scrapeDate = requestLocalDate.getTime();
            this.updateCache(itemFromCache, language);
            return itemFromCache;
        }
        else {
            console.log(`from service ${articleName} ${language}`);
            let contentFromService = await this.remoteContentManager.getArcicleContent(articleName, language);
            let result = new ArticleDTO(contentFromService, articleName, requestLocalDate.getTime());
            this.updateCache(result, language);
            return result;
        }
    }

    private updateCache(itemToUpdate: ArticleDTO, language: string): void {
        let keyToUpdate = `${itemToUpdate.articleName}_${language}`;
        this.cacheManager.putItem(keyToUpdate, itemToUpdate);
    }

    private getValidItemFromCache(articleName: string, language: string, dateToCheck: Date): ArticleDTO | undefined {
        let keyToFind = `${articleName}_${language}`;
        let itemFromCache = this.cacheManager.getItem(keyToFind);
        if (itemFromCache) {
            let storedDate = new Date(itemFromCache.scrapeDate);
            let dateDiff = Math.abs(this.dateHelper.dateDiffSeconds(dateToCheck, storedDate));
            let result = (dateDiff <= MAX_DATE_DIFF) ? itemFromCache : undefined;
            return result;
        }
        else {
            return itemFromCache;
        }
    }

}