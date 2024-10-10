import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { Request, Response } from "express";
import { ArticlesServiceIfs } from "../services/articlesserviceIfs";
import { ArticleDTO } from "../dto/articledto";
import { RequestValidatorIfs } from "./validators/requestvalidatorIfs";
import { Unauthorized } from "@tsed/exceptions";
import { UserTokenServiceIfs } from "../services/usertokenserviceifs";

const ACCEPT_LANGUAGE_HEADER = 'Accept-Language';
const X_AUTHENTICATION_HEADER = 'x-authentication';
const ENGLISH_LANGUAGE = 'en';

@route('/introduction')
export class ArticlesController {
    private articleService: ArticlesServiceIfs;
    private requestValidator: RequestValidatorIfs;
    private userTokenService : UserTokenServiceIfs;
    constructor(articleService: ArticlesServiceIfs, requestValidator: RequestValidatorIfs, userTokenService : UserTokenServiceIfs) {
        this.articleService = articleService;
        this.requestValidator = requestValidator;
        this.userTokenService = userTokenService;
    }

    @route('/:articleName')
    @GET()
    async getArticleContant(req: Request, res: Response) {
        this.requestValidator.validateArticlesRequest(req);

        let language = this.getLanguageFromHeader(req);

        let authenticationHeader = this.getTokenFromHeader(req);
        if (!this.isValidToken(authenticationHeader,language)) {
            throw new Unauthorized("Unauthorized user");
        }

        let currentDate = new Date();
        let articleName: string = req.params.articleName;
        let serviceResult = await this.articleService.getArcicleContent(articleName, language, currentDate);
        return res.status(200).json(serviceResult);
    };

    private getLanguageFromHeader(req: Request): string {
        let languageFromHeader = req.get(ACCEPT_LANGUAGE_HEADER);
        if (!languageFromHeader) {
            return ENGLISH_LANGUAGE;
        }

        let parts: string[] = languageFromHeader.split(',');
        let firstLanguage = parts[0];
        let result = firstLanguage.substring(0, 2);
        return result;
    }

    private getTokenFromHeader(req: Request): string | undefined {
        let resultToken = req.get(X_AUTHENTICATION_HEADER);
        return resultToken;
    }

    private isValidToken(tokenToCheck : string | undefined, language : string) : boolean { 
        if (!tokenToCheck) { 
            return false;
        }
        return this.userTokenService.isValidToken(tokenToCheck, language);
    }
}


