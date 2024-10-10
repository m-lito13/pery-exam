import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { ArticlesService } from "./services/impl/articlesservice";
import { RequestValidator } from "./controllers/validators/requestvalidator";
import { UserTokenService } from "./services/impl/usertokenservice";
import { CacheManager } from "./services/impl/cachemanager";
import { TokenManager } from "./services/impl/tokenmanager";
export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    });
    Container.register({
        articleService: asClass(ArticlesService).scoped(),
        requestValidator : asClass(RequestValidator).scoped(),
        userTokenService : asClass(UserTokenService).singleton(),
        cacheManager : asClass(CacheManager).singleton(),
        tokenManager : asClass(TokenManager).singleton()
    });
    app.use(scopePerRequest(Container));
}