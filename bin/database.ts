/*
@author LxingA
@project SocASF
@name API
@description Integración de Diretus como Interprete de Base de Datos para la API
@date 23/04/24 01:00
*/
import {createDirectus,rest,staticToken} from '@directus/sdk';
import AppConfig from '../inc/app.config';
import type Schema from '../type/database';

/** Objeto con la Información General de la Aplicación */
const Configuration = AppConfig();

/** Instancia del Cliente de Directus para la Base de Datos de la API */
const Database = createDirectus<Schema>(Configuration["database"]["hostname"])["with"](rest())["with"](staticToken(Configuration["database"]["token"]));

export default Database;