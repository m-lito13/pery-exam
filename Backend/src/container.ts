import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { ArticlesService } from "./services/impl/articlesservice";
import { RequestValidator } from "./controllers/validators/requestvalidator";
export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    });
    Container.register({
        articleService: asClass(ArticlesService).scoped(),
        requestValidator : asClass(RequestValidator).scoped()
    });
    app.use(scopePerRequest(Container));
}