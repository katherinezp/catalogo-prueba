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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const integracion_model_1 = require("./integracion.model");
let UnidadNegocio = class UnidadNegocio extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], UnidadNegocio.prototype, "id_un", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], UnidadNegocio.prototype, "nombre", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], UnidadNegocio.prototype, "descripcion", void 0);
__decorate([
    repository_1.hasMany(() => integracion_model_1.Integracion),
    __metadata("design:type", Array)
], UnidadNegocio.prototype, "integraciones", void 0);
UnidadNegocio = __decorate([
    repository_1.model({ settings: {} }),
    __metadata("design:paramtypes", [Object])
], UnidadNegocio);
exports.UnidadNegocio = UnidadNegocio;
//# sourceMappingURL=unidad-negocio.model.js.map