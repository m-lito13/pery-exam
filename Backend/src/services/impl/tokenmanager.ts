import { TokenManagerIfs } from "../tokenmanagerIfs";
import { v4 as uuidv4 } from 'uuid';

const SEPARATOR : string = '__'; 

export class TokenManager implements TokenManagerIfs{
    private tokensData : {[key:string]: string};
    constructor() { 
        this.tokensData = {};
    }
    generateToken(userName: string, language: string): string {
        let randomUuid = uuidv4();
        let valueToStore : string = `${randomUuid}${SEPARATOR}${language}`;
        this.tokensData[randomUuid] = valueToStore;
        return randomUuid;
    }

    isValidToken(token: string, language : string): boolean {
        if(token in this.tokensData) { 
            let valueFound = this.tokensData[token];
            let parts = valueFound.split(SEPARATOR);
            if (parts.length !== 2) { 
                return false;
            }
            let languageStored = parts[1];
            let result = languageStored === language;
            return result;
        }
        else { 
            return false;
        }
    } 

}