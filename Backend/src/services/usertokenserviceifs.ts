export interface UserTokenServiceIfs { 
    generateToken(userName : string , language : string) : string;
    isValidToken(token : string , language : string) : boolean;
}