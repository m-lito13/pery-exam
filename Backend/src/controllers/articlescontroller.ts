import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { Request, Response } from "express";
import { ArticlesServiceIfs } from "../services/articlesserviceIfs";
import { ArticlesResponse } from "./customresponses/articlesresponse";
import { RequestValidatorIfs } from "./validators/requestvalidatorIfs";


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
        let articleName : string = req.params.articleName;
        console.log('introdustion '+ req.params.arcticleName);
        let service_res = await this.articleService.getArcicleContent(articleName);
        let currentDate = new Date();
        let responseData = new ArticlesResponse(service_res, articleName, currentDate.getTime());
        return res.status(200).json(responseData);
    };

    
}