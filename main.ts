/*
@author LxingA
@project SocASF
@name API
@description Inicialización de la Aplicación
@date 20/04/24 18:00
*/
import {createSecureServer} from 'http2';
import {json,urlencoded} from 'body-parser';
import {hidePoweredBy} from 'helmet';
import {join} from 'path';
import {readFileSync} from 'fs';
import AppConfig from './inc/app.config';
import Core from 'express';
import Bridge from 'http2-express-bridge';
import IP from 'request-ip';

/** Instancia del Motor de la API en Express para la Aplicación */
const Engine = Bridge(Core);

/** Inyectar los Módulos Esenciales para la Aplicación de la API */
Engine["use"](json());
Engine["use"](urlencoded({extended:true}));
Engine["use"](hidePoweredBy());
Engine["use"](IP["mw"]());

/** Integrar EJS como Motor de Plantillas HTML para la Aplicación */
Engine["set"]("view engine","ejs");
Engine["set"]("views",join(__dirname,"./view"));

/** Establecer los Parámetros Globales Esenciales de la Aplicación */
Engine["set"]("global",AppConfig());

/** Instancia del Servidor HTTP con el Motor Express en la Aplicación con el Protocolo H2 */
const Server = createSecureServer({
    cert: readFileSync(join(__dirname,"./certificate.pem")),
    key: readFileSync(join(__dirname,"./certificate.key")),
    passphrase: AppConfig()["database"]["token"],
    allowHTTP1: true
},Engine);

export {
    Server,
    Engine
};