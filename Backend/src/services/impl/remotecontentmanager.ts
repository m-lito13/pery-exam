import { RemoteContentManagerIfs } from "../remotecontentmanagerifs";
import { htmlToText } from "html-to-text";

export class RemoteContentManager implements RemoteContentManagerIfs {
    getArcicleContent(articleName: string, language: string): Promise<string> {
        return this.getArcicleParagraph(articleName, language);
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
    
    private getUrlString(articleName: string, language: string): string {
        let baseUrl = `https://${language}.wikipedia.org/w/api.php?`;
        let resultUrl = `${baseUrl}action=query&titles=${articleName}&prop=extracts&format=json&exintro=1`;
        return resultUrl;
    }
}