export interface UserTokenServiceIfs { 
    generateToken(userName : string , language : string) : string;
}