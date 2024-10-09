import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { Request, Response } from "express";
import { ArticlesServiceIfs } from "../services/articlesserviceIfs";
import { ArticlesResponse } from "./responses/articlesresponse";
import { RequestValidatorIfs } from "./validators/requestvalidatorIfs";

const ACCEPT_LANGUAGE_HEADER = 'Accept-Language';
const ENGLISH_LANGUAGE = 'en';

@route('/introduction')
export class ArticlesController {
    private articleService : ArticlesServiceIfs;
    private requestValidator : RequestValidatorIfs;
    constructor(articleService : ArticlesServiceIfs, requestValidator: RequestValidatorIfs) {
        this.articleService = articleService;
        this.requestValidator = requestValidator;
    }
   
    @route('/:articleName')
    @GET()
    async getArticleContant(req: Request, res: Response) {
        this.requestValidator.validateArticlesRequest(req);
        
        let currentDate = new Date();
        let articleName : string = req.params.articleName;

        let language = this.getLanguageFromHeader(req);

        let service_res = await this.articleService.getArcicleContent(articleName, language);
        let responseData = new ArticlesResponse(service_res, articleName, currentDate.getTime());
        
        return res.status(200).json(responseData);
    };

    getLanguageFromHeader(req: Request) : string {
        let languageFromHeader = req.get(ACCEPT_LANGUAGE_HEADER);
        if (!languageFromHeader) { 
            return ENGLISH_LANGUAGE;
        }

        let parts : string[] = languageFromHeader.split(',');
        let firstLanguage = parts[0];
        let result = firstLanguage.substring(0,2);
        return result;
    }    
    
}


