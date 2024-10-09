import { ArticlesServiceIfs } from "../articlesserviceIfs";

import { htmlToText } from "html-to-text";

export class ArticlesService implements ArticlesServiceIfs {
    async getArcicleContent(articleName: string, language: string): Promise<string> {
        let res = await this.getArcicleParagraph(articleName, language);
        return res;
    }
    private async getArcicleParagraph(articleName: string, language: string): Promise<string> {
        let articleUrl = this.getUrlString(articleName, language);
        console.log(articleUrl);
        let response = await fetch(articleUrl);

        let jsonData = await response.json();
        let pagesObj = jsonData['query']['pages'];
        let keys = Object.keys(pagesObj);
        let keyName = keys[0];
        let extractPage = pagesObj[keyName]['extract'];
        let cleanRes = htmlToText(extractPage);
        return cleanRes;
    }

    private getUrlString(articleName :string, language : string) : string { 
        let baseUrl = `https://${language}.wikipedia.org/w/api.php?`;
        let resultUrl =  `${baseUrl}action=query&titles=${articleName}&prop=extracts&format=json&exintro=1`;
        return resultUrl;
    }

}