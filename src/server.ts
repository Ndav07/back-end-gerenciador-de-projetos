import express, { Request, Response, NextFunction }  from "express";
import "express-async-errors";

import { AppError } from "@shared/errors/AppError";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";

import "@shared/container/containers";

import { router } from "@shared/infra/express/routes/routes";

PostgresConnectDataBase.initialize().then(() => {
        console.log("Data Source has been initialized!");
        const app = express();
        app.use(express.json());
        app.use(router);

        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            if(err instanceof AppError) {
                return res.status(err.statusCode).json({
                    message: err.message
                })
            }

            return res.status(500).json({
                status: "error",
                message: `Internal serve error - ${err.message}`
            })
        });
        
        app.listen(3333, () => console.log(`API start in ... ${'http://localhost:3333/'}`));
    }).catch((err) => {
        console.error("Error during Data Source initialization", err);
    }
);