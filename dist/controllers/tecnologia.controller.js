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
let TecnologiaController = class TecnologiaController {
    constructor(tecnologiaRepository) {
        this.tecnologiaRepository = tecnologiaRepository;
    }
    async create(tecnologia) {
        return await this.tecnologiaRepository.create(tecnologia);
    }
    async count(where) {
        return await this.tecnologiaRepository.count(where);
    }
    async find(filter) {
        return await this.tecnologiaRepository.find(filter);
    }
    async updateAll(tecnologia, where) {
        return await this.tecnologiaRepository.updateAll(tecnologia, where);
    }
    async findById(id) {
        return await this.tecnologiaRepository.findById(id);
    }
    async updateById(id, tecnologia) {
        await this.tecnologiaRepository.updateById(id, tecnologia);
    }
    async replaceById(id, tecnologia) {
        await this.tecnologiaRepository.replaceById(id, tecnologia);
    }
    async deleteById(id) {
        await this.tecnologiaRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/tecnologias', {
        responses: {
            '200': {
                description: 'Tecnologia model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tecnologia } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tecnologia]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "create", null);
__decorate([
    rest_1.get('/tecnologias/count', {
        responses: {
            '200': {
                description: 'Tecnologia model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tecnologia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "count", null);
__decorate([
    rest_1.get('/tecnologias', {
        responses: {
            '200': {
                description: 'Array of Tecnologia model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Tecnologia } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Tecnologia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "find", null);
__decorate([
    rest_1.patch('/tecnologias', {
        responses: {
            '200': {
                description: 'Tecnologia PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Tecnologia))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Tecnologia, Object]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tecnologias/{id}', {
        responses: {
            '200': {
                description: 'Tecnologia model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Tecnologia } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tecnologias/{id}', {
        responses: {
            '204': {
                description: 'Tecnologia PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tecnologia]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "updateById", null);
__decorate([
    rest_1.put('/tecnologias/{id}', {
        responses: {
            '204': {
                description: 'Tecnologia PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Tecnologia]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/tecnologias/{id}', {
        responses: {
            '204': {
                description: 'Tecnologia DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TecnologiaController.prototype, "deleteById", null);
TecnologiaController = __decorate([
    __param(0, repository_1.repository(repositories_1.TecnologiaRepository)),
    __metadata("design:paramtypes", [repositories_1.TecnologiaRepository])
], TecnologiaController);
exports.TecnologiaController = TecnologiaController;
//# sourceMappingURL=tecnologia.controller.js.map