import { UserTokenServiceIfs } from "../usertokenserviceifs";
import { v4 as uuidv4 } from 'uuid';

export class UserTokenService implements UserTokenServiceIfs {
    generateToken(userName : string , language : string): string {
        let randomUuid = uuidv4();
        return randomUuid;
    } 
}