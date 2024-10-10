import express from "express";
import { loadControllers } from "awilix-express";
import { loadContainer } from "./container";
import { errorHandlerMiddleware } from "./middlewares/errorhandlermiddleware";

const app: express.Application = express();
const PORT = 3001;
app.use(express.json());
loadContainer(app);
app.use(loadControllers(
    './controllers/*.*s',
    { cwd: __dirname }
));
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});