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
let AplicacionController = class AplicacionController {
    constructor(aplicacionRepository) {
        this.aplicacionRepository = aplicacionRepository;
    }
    async create(aplicacion) {
        return await this.aplicacionRepository.create(aplicacion);
    }
    async count(where) {
        return await this.aplicacionRepository.count(where);
    }
    async find(filter) {
        return await this.aplicacionRepository.find(filter);
    }
    async updateAll(aplicacion, where) {
        return await this.aplicacionRepository.updateAll(aplicacion, where);
    }
    async findById(id) {
        return await this.aplicacionRepository.findById(id);
    }
    async updateById(id, aplicacion) {
        await this.aplicacionRepository.updateById(id, aplicacion);
    }
    async replaceById(id, aplicacion) {
        await this.aplicacionRepository.replaceById(id, aplicacion);
    }
    async deleteById(id) {
        await this.aplicacionRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/aplicacions', {
        responses: {
            '200': {
                description: 'Aplicacion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Aplicacion } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Aplicacion]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "create", null);
__decorate([
    rest_1.get('/aplicacions/count', {
        responses: {
            '200': {
                description: 'Aplicacion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Aplicacion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "count", null);
__decorate([
    rest_1.get('/aplicacions', {
        responses: {
            '200': {
                description: 'Array of Aplicacion model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Aplicacion } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Aplicacion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "find", null);
__decorate([
    rest_1.patch('/aplicacions', {
        responses: {
            '200': {
                description: 'Aplicacion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Aplicacion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Aplicacion, Object]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/aplicacions/{id}', {
        responses: {
            '200': {
                description: 'Aplicacion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Aplicacion } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "findById", null);
__decorate([
    rest_1.patch('/aplicacions/{id}', {
        responses: {
            '204': {
                description: 'Aplicacion PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Aplicacion]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "updateById", null);
__decorate([
    rest_1.put('/aplicacions/{id}', {
        responses: {
            '204': {
                description: 'Aplicacion PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Aplicacion]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/aplicacions/{id}', {
        responses: {
            '204': {
                description: 'Aplicacion DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AplicacionController.prototype, "deleteById", null);
AplicacionController = __decorate([
    __param(0, repository_1.repository(repositories_1.AplicacionRepository)),
    __metadata("design:paramtypes", [repositories_1.AplicacionRepository])
], AplicacionController);
exports.AplicacionController = AplicacionController;
//# sourceMappingURL=aplicacion.controller.js.map