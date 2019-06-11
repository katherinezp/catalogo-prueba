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
let EstadoIntegracionController = class EstadoIntegracionController {
    constructor(estadoIntegracionRepository) {
        this.estadoIntegracionRepository = estadoIntegracionRepository;
    }
    async create(estadoIntegracion) {
        return await this.estadoIntegracionRepository.create(estadoIntegracion);
    }
    async count(where) {
        return await this.estadoIntegracionRepository.count(where);
    }
    async find(filter) {
        return await this.estadoIntegracionRepository.find(filter);
    }
    async updateAll(estadoIntegracion, where) {
        return await this.estadoIntegracionRepository.updateAll(estadoIntegracion, where);
    }
    async findById(id) {
        return await this.estadoIntegracionRepository.findById(id);
    }
    async updateById(id, estadoIntegracion) {
        await this.estadoIntegracionRepository.updateById(id, estadoIntegracion);
    }
    async replaceById(id, estadoIntegracion) {
        await this.estadoIntegracionRepository.replaceById(id, estadoIntegracion);
    }
    async deleteById(id) {
        await this.estadoIntegracionRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/estado-integracions', {
        responses: {
            '200': {
                description: 'EstadoIntegracion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.EstadoIntegracion } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.EstadoIntegracion]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "create", null);
__decorate([
    rest_1.get('/estado-integracions/count', {
        responses: {
            '200': {
                description: 'EstadoIntegracion model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.EstadoIntegracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "count", null);
__decorate([
    rest_1.get('/estado-integracions', {
        responses: {
            '200': {
                description: 'Array of EstadoIntegracion model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.EstadoIntegracion } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.EstadoIntegracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "find", null);
__decorate([
    rest_1.patch('/estado-integracions', {
        responses: {
            '200': {
                description: 'EstadoIntegracion PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.EstadoIntegracion))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.EstadoIntegracion, Object]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/estado-integracions/{id}', {
        responses: {
            '200': {
                description: 'EstadoIntegracion model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.EstadoIntegracion } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "findById", null);
__decorate([
    rest_1.patch('/estado-integracions/{id}', {
        responses: {
            '204': {
                description: 'EstadoIntegracion PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.EstadoIntegracion]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "updateById", null);
__decorate([
    rest_1.put('/estado-integracions/{id}', {
        responses: {
            '204': {
                description: 'EstadoIntegracion PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.EstadoIntegracion]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/estado-integracions/{id}', {
        responses: {
            '204': {
                description: 'EstadoIntegracion DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadoIntegracionController.prototype, "deleteById", null);
EstadoIntegracionController = __decorate([
    __param(0, repository_1.repository(repositories_1.EstadoIntegracionRepository)),
    __metadata("design:paramtypes", [repositories_1.EstadoIntegracionRepository])
], EstadoIntegracionController);
exports.EstadoIntegracionController = EstadoIntegracionController;
//# sourceMappingURL=estado-integracion.controller.js.map