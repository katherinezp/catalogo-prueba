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
let PaisController = class PaisController {
    constructor(paisRepository) {
        this.paisRepository = paisRepository;
    }
    async create(pais) {
        return await this.paisRepository.create(pais);
    }
    async count(where) {
        return await this.paisRepository.count(where);
    }
    async find(filter) {
        return await this.paisRepository.find(filter);
    }
    async updateAll(pais, where) {
        return await this.paisRepository.updateAll(pais, where);
    }
    async findById(id) {
        return await this.paisRepository.findById(id);
    }
    async updateById(id, pais) {
        await this.paisRepository.updateById(id, pais);
    }
    async replaceById(id, pais) {
        await this.paisRepository.replaceById(id, pais);
    }
    async deleteById(id) {
        await this.paisRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/pais', {
        responses: {
            '200': {
                description: 'Pais model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Pais } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Pais]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "create", null);
__decorate([
    rest_1.get('/pais/count', {
        responses: {
            '200': {
                description: 'Pais model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Pais))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "count", null);
__decorate([
    rest_1.get('/pais', {
        responses: {
            '200': {
                description: 'Array of Pais model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Pais } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Pais))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "find", null);
__decorate([
    rest_1.patch('/pais', {
        responses: {
            '200': {
                description: 'Pais PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Pais))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Pais, Object]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/pais/{id}', {
        responses: {
            '200': {
                description: 'Pais model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Pais } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "findById", null);
__decorate([
    rest_1.patch('/pais/{id}', {
        responses: {
            '204': {
                description: 'Pais PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Pais]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "updateById", null);
__decorate([
    rest_1.put('/pais/{id}', {
        responses: {
            '204': {
                description: 'Pais PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Pais]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/pais/{id}', {
        responses: {
            '204': {
                description: 'Pais DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaisController.prototype, "deleteById", null);
PaisController = __decorate([
    __param(0, repository_1.repository(repositories_1.PaisRepository)),
    __metadata("design:paramtypes", [repositories_1.PaisRepository])
], PaisController);
exports.PaisController = PaisController;
//# sourceMappingURL=pais.controller.js.map