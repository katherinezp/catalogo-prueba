"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProyectoController = class ProyectoController {
    constructor(proyectoRepository) {
        this.proyectoRepository = proyectoRepository;
    }
    async create(proyecto) {
        return await this.proyectoRepository.create(proyecto);
    }
    async count(where) {
        return await this.proyectoRepository.count(where);
    }
    async find(filter) {
        return await this.proyectoRepository.find(filter);
    }
    async updateAll(proyecto, where) {
        return await this.proyectoRepository.updateAll(proyecto, where);
    }
    async findById(id) {
        return await this.proyectoRepository.findById(id);
    }
    async updateById(id, proyecto) {
        await this.proyectoRepository.updateById(id, proyecto);
    }
    async replaceById(id, proyecto) {
        await this.proyectoRepository.replaceById(id, proyecto);
    }
    async deleteById(id) {
        await this.proyectoRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/proyectos', {
        responses: {
            '200': {
                description: 'Proyecto model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Proyecto } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proyecto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "create", null);
__decorate([
    rest_1.get('/proyectos/count', {
        responses: {
            '200': {
                description: 'Proyecto model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Proyecto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "count", null);
__decorate([
    rest_1.get('/proyectos', {
        responses: {
            '200': {
                description: 'Array of Proyecto model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Proyecto } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Proyecto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "find", null);
__decorate([
    rest_1.patch('/proyectos', {
        responses: {
            '200': {
                description: 'Proyecto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Proyecto))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Proyecto, Object]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/proyectos/{id}', {
        responses: {
            '200': {
                description: 'Proyecto model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Proyecto } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "findById", null);
__decorate([
    rest_1.patch('/proyectos/{id}', {
        responses: {
            '204': {
                description: 'Proyecto PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Proyecto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "updateById", null);
__decorate([
    rest_1.put('/proyectos/{id}', {
        responses: {
            '204': {
                description: 'Proyecto PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Proyecto]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/proyectos/{id}', {
        responses: {
            '204': {
                description: 'Proyecto DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProyectoController.prototype, "deleteById", null);
ProyectoController = __decorate([
    __param(0, repository_1.repository(repositories_1.ProyectoRepository)),
    __metadata("design:paramtypes", [repositories_1.ProyectoRepository])
], ProyectoController);
exports.ProyectoController = ProyectoController;
//# sourceMappingURL=proyecto.controller.js.map