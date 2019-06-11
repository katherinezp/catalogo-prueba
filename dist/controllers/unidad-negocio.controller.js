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
let UnidadNegocioController = class UnidadNegocioController {
    constructor(unidadNegocioRepository) {
        this.unidadNegocioRepository = unidadNegocioRepository;
    }
    async create(unidadNegocio) {
        return await this.unidadNegocioRepository.create(unidadNegocio);
    }
    async count(where) {
        return await this.unidadNegocioRepository.count(where);
    }
    async find(filter) {
        return await this.unidadNegocioRepository.find(filter);
    }
    async updateAll(unidadNegocio, where) {
        return await this.unidadNegocioRepository.updateAll(unidadNegocio, where);
    }
    async findById(id) {
        return await this.unidadNegocioRepository.findById(id);
    }
    async updateById(id, unidadNegocio) {
        await this.unidadNegocioRepository.updateById(id, unidadNegocio);
    }
    async replaceById(id, unidadNegocio) {
        await this.unidadNegocioRepository.replaceById(id, unidadNegocio);
    }
    async deleteById(id) {
        await this.unidadNegocioRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/unidad-negocios', {
        responses: {
            '200': {
                description: 'UnidadNegocio model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.UnidadNegocio } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.UnidadNegocio]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "create", null);
__decorate([
    rest_1.get('/unidad-negocios/count', {
        responses: {
            '200': {
                description: 'UnidadNegocio model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.UnidadNegocio))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "count", null);
__decorate([
    rest_1.get('/unidad-negocios', {
        responses: {
            '200': {
                description: 'Array of UnidadNegocio model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.UnidadNegocio } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.UnidadNegocio))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "find", null);
__decorate([
    rest_1.patch('/unidad-negocios', {
        responses: {
            '200': {
                description: 'UnidadNegocio PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.UnidadNegocio))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.UnidadNegocio, Object]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/unidad-negocios/{id}', {
        responses: {
            '200': {
                description: 'UnidadNegocio model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.UnidadNegocio } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "findById", null);
__decorate([
    rest_1.patch('/unidad-negocios/{id}', {
        responses: {
            '204': {
                description: 'UnidadNegocio PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.UnidadNegocio]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "updateById", null);
__decorate([
    rest_1.put('/unidad-negocios/{id}', {
        responses: {
            '204': {
                description: 'UnidadNegocio PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.UnidadNegocio]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/unidad-negocios/{id}', {
        responses: {
            '204': {
                description: 'UnidadNegocio DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnidadNegocioController.prototype, "deleteById", null);
UnidadNegocioController = __decorate([
    __param(0, repository_1.repository(repositories_1.UnidadNegocioRepository)),
    __metadata("design:paramtypes", [repositories_1.UnidadNegocioRepository])
], UnidadNegocioController);
exports.UnidadNegocioController = UnidadNegocioController;
//# sourceMappingURL=unidad-negocio.controller.js.map