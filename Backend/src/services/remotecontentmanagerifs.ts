export interface RemoteContentManagerIfs { 
    getArcicleContent(articleName: string, language: string): Promise<string>;
} 