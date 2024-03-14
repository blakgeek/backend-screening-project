import express, {NextFunction, Request, Response} from "express";
import * as routes from "./routes";

const app = express();

app.use(express.json());

// Route handlers
app.use(routes.TeamRouter);

// Catch 404 and forward to error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json(err.message);
},);

// Error handler
app.use((req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({code: "path_not_found"});
});

export default app;
