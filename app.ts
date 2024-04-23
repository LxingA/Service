/*
@author LxingA
@project SocASF
@name API
@description Módulo Inicial para la Aplicación
@date 20/04/24 18:00
*/
import {Server,Engine} from './main';

/** Inicialización de la Aplicación */
(async () => {
    Server["listen"](Engine["get"]("global")["port"]);
})();