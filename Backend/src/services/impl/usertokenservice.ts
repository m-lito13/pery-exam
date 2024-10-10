import { TokenManagerIfs } from "../tokenmanagerIfs";
import { UserTokenServiceIfs } from "../usertokenserviceifs";

export class UserTokenService implements UserTokenServiceIfs {
    private tokenManager : TokenManagerIfs;
    constructor(tokenManager : TokenManagerIfs) { 
        this.tokenManager = tokenManager;
    }

    isValidToken(token: string, language: string): boolean {
        console.log('UserTokenService - isValidToken called');
        return this.tokenManager.isValidToken(token, language);
    }
    generateToken(userName : string , language : string): string {
        console.log('UserTokenService - generateToken called');
        return this.tokenManager.generateToken(userName, language);
    } 
}