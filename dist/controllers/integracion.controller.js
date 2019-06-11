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
let IntegracionController = class IntegracionController {
    constructor(integracionRepository) {
        this.integracionRepository = integracionRepository;
    }
    async create(integracion) {
        return await this.integracionRepository.create(integracion);
    }
    async count(where) {
        return await this.integracionRepository.count(where);
    }
    async find(filter) {
        return await this.integracionRepository.find(filter);
    }
    async updateAll(integracion, where) {
        return await this.integracionRepository.updateAll(integracion, where);
    }
    async findById(id) {
        return await this.integracionRepository.findById(id);
    }
    async updateById(id, integracion) {
        await this.integracionRepository.updateById(id, integracion);
    }
    async replaceById(id, integracion) {
        await this.integracionRepository.replaceById(id, integracion);
    }
    async deleteById(id) {
        await this.integracionRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/integracions', {
        responses: {
            '200': {
                description: 'Integracion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Integracion } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Integracion]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "create", null);
__decorate([
    rest_1.get('/integracions/count', {
        responses: {
            '200': {
                description: 'Integracion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Integracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "count", null);
__decorate([
    rest_1.get('/integracions', {
        responses: {
            '200': {
                description: 'Array of Integracion model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Integracion } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Integracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "find", null);
__decorate([
    rest_1.patch('/integracions', {
        responses: {
            '200': {
                description: 'Integracion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Integracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Integracion, Object]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/integracions/{id}', {
        responses: {
            '200': {
                description: 'Integracion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Integracion } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "findById", null);
__decorate([
    rest_1.patch('/integracions/{id}', {
        responses: {
            '204': {
                description: 'Integracion PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Integracion]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "updateById", null);
__decorate([
    rest_1.put('/integracions/{id}', {
        responses: {
            '204': {
                description: 'Integracion PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Integracion]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/integracions/{id}', {
        responses: {
            '204': {
                description: 'Integracion DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IntegracionController.prototype, "deleteById", null);
IntegracionController = __decorate([
    __param(0, repository_1.repository(repositories_1.IntegracionRepository)),
    __metadata("design:paramtypes", [repositories_1.IntegracionRepository])
], IntegracionController);
exports.IntegracionController = IntegracionController;
//# sourceMappingURL=integracion.controller.js.map