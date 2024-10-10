import { before, DELETE, GET, POST, PUT, route } from "awilix-express";
import { request, Request, Response } from "express";
import { RequestValidatorIfs } from "./validators/requestvalidatorIfs";
import { UserTokenServiceIfs } from "../services/usertokenserviceifs";

@route('/user')
export class UserController {
    private requestValidator: RequestValidatorIfs;
    private userTokenService: UserTokenServiceIfs;
    constructor(requestValidator: RequestValidatorIfs, userTokenService: UserTokenServiceIfs) {
        this.requestValidator = requestValidator;
        this.userTokenService = userTokenService;
    }
    @POST()
    generateTokenForUser(req: Request, res: Response) {
        this.requestValidator.validateUserTokenRequest(req);
        let userName = req.body.userName;
        let language = req.body.language;
        let generatedToken = this.userTokenService.generateToken(userName, language);
        return res.status(200).json({ token: generatedToken });
    }
}