/*
@author LxingA
@project SocASF
@name API
@description Módulo Inicial para la Aplicación
@date 20/04/24 18:00
*/
import {Server,Engine} from './main';
import type Template from './type/template';

/** Inicialización de la Aplicación */
(async () => {
    /** Definir la Vista Predeterminada en la Aplicación */
    Engine["all"]("*",(_,rs) => rs["status"](200)["render"]("home",({
        author: "LxingA",
        version: Engine["get"]("global")["version"],
        year: (new Date())["getFullYear"]()
    } as Template)));
    Server["listen"](Engine["get"]("global")["port"]);
})();