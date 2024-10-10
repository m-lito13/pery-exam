import express from "express";
import { loadControllers } from "awilix-express";
import { loadContainer } from "./container";
import { errorHandlerMiddleware } from "./middlewares/errorhandlermiddleware";
import cors from 'cors';

const app: express.Application = express();
const PORT = 3001;
app.use(express.json());

app.use(cors());

loadContainer(app);
app.use(loadControllers(
    './controllers/*.*s',
    { cwd: __dirname }
));
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});