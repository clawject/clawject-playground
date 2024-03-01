import express from "express";
import * as http from "http";
import { PostConstruct, PreDestroy } from "@clawject/di";
import { ServerManager } from "../../core/server/ServerManager";
import { ReadController } from "../../core/controller/ReadController";
import { CreateController } from "../../core/controller/CreateController";
import { UpdateController } from "../../core/controller/UpdateController";
import { DeleteController } from "../../core/controller/DeleteController";

export class ExpressServerManager extends ServerManager {
    private app = express().use(express.json());
    private server: http.Server | null = null;

    @PostConstruct
    start(): Promise<void> {
        return new Promise(resolve => {
            this.initializeControllers();
            this.server = this.app.listen(this.serverOptions.port, () => {
                console.log(`Server is running on port ${this.serverOptions.port}`);
                const routesSet = new Set(this.allControllers.map(controller => controller.basePath));
                const allRoutes = Array.from(routesSet);
                console.log(`Registered ${this.allControllers.length} controllers for routes: ${allRoutes.join(", ")}`);
                resolve();
            });
        });
    }

    @PreDestroy
    stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.server?.close(err => {
                console.log("Server stopped")
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
    }

    private initializeControllers(): void {
        this.createControllers.forEach(controller => {
            this.initializeCreateController(controller);
        });
        this.readControllers.forEach(controller => {
            this.initializeReadController(controller);
        });
        this.updateControllers.forEach(controller => {
            this.initializeUpdateController(controller);
        });
        this.deleteControllers.forEach(controller => {
            this.initializeDeleteController(controller);
        });
    }

    private initializeCreateController(controller: CreateController<any, any>): void {
        this.app.post(controller.basePath, async(req, res) => {
            const entity = await controller.create(req.body);
            res.json(entity);
        });
    }

    private initializeReadController(controller: ReadController<any>): void {
        this.app.get(controller.basePath, async(req, res) => {
            const entities = await controller.getAll();
            res.json(entities);
        });
        this.app.get(`${controller.basePath}/:id`, async(req, res) => {
            const entity = await controller.getById(req.params.id);
            res.json(entity);
        });
    }

    private initializeUpdateController(controller: UpdateController<any>): void {
        this.app.put(`${controller.basePath}/:id`, async(req, res) => {
            const entity = await controller.update(req.params.id, req.body);
            res.json(entity);
        });
    }

    private initializeDeleteController(controller: DeleteController<any>): void {
        this.app.delete(`${controller.basePath}/:id`, async(req, res) => {
            await controller.delete(req.params.id);
            res.status(204).send();
        });
    }
}
