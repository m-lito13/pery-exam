import { ArticlesServiceIfs } from "../articlesserviceIfs";

import  { htmlToText} from "html-to-text";


const baseURL = 'https://en.wikipedia.org/w/api.php?';

export class ArticlesService implements ArticlesServiceIfs {
    async getArcicleContent(articleName: string): Promise<string> {
        let res = await this.getArcicleParagraph(articleName);
        return res;
    }
    private async getArcicleParagraph(articleName: string): Promise<string> {
        let articleUrl = `${baseURL}action=query&titles=${articleName}&prop=extracts&format=json&exintro=1`;
        console.log(articleUrl);
        let response = await fetch(articleUrl);

        let jsonData = await response.json();
        console.log('jsonData : '+jsonData );
        let pagesObj = jsonData['query']['pages'] ;
        let keys = Object.keys(pagesObj);
        let keyName = keys[0];
        let extractPage = pagesObj[keyName]['extract'];
        let cleanRes = htmlToText(extractPage);
        return cleanRes;
    }

}