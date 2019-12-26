"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class IResponse {
    constructor(statusCode, body) {
        this.headers = corsHeader;
        this.statusCode = statusCode;
        this.body = body;
    }
}
exports.IResponse = IResponse;
const corsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
};
const hello = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const msg = JSON.stringify({
        message: 'Hello, sls-ts-seq-boilerplate',
    });
    const res = new IResponse(200, msg);
    callback(undefined, res);
});
exports.hello = hello;
//# sourceMappingURL=handler.js.map