/*
@author LxingA
@project SocASF
@name API
@description Configuración Global de la API
@date 20/04/24 18:00
*/
import 'dotenv/config';
import type Application from "../type/configuration/app";

/** Definición de la Configuración Global de la API */
const AppConfig = (): Application => ({
    port: (process["env"]["CKDefAPIPortListener"] || 3000),
    database: {
        hostname: (process["env"]["CKDefAPIDatabaseHostUrl"]),
        token: (process["env"]["CKDefAPIDatabaseTokenAccessKey"])
    },
    cors: {
        origin: (process["env"]["CKDefAPIContainerOriginAuthorizedAccess"]["split"](",") || []),
        ip: (process["env"]["CKDefAPIContainerIPAuthorizedAccess"]["split"](",") || []),
        methods: (process["env"]["CKDefAPIContainerMethodsAuthorized"]["split"](",") || []),
        headers: (process["env"]["CKDefAPIContainerHeadersAuthorized"]["split"](",") || [])
    },
    version: (process["env"]["CKDefAPICurrentVersionGlobally"] || "1")
});

export default AppConfig;