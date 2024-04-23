declare global {
    namespace NodeJS {
        interface ProcessEnv {
            /** Definición del Puerto de Escucha para la API */
            CKDefAPIPortListener: number,
            /** Nombre de la Ruta Absoluta HTTP para el Acceso a la Base de Datos del Proyecto */
            CKDefAPIDatabaseHostUrl: string,
            /** Clave Secreto para el Acceso a la Base de Datos del Proyecto */
            CKDefAPIDatabaseTokenAccessKey: string,
            /** Contenedor con las Cabeceras HTTP Autorizadas en la API (separadas por comas) */
            CKDefAPIContainerHeadersAuthorized: string,
            /** Contenedor con las Direcciones IP de Acceso a la API Autorizadas (separadas por comas) */
            CKDefAPIContainerIPAuthorizedAccess: string,
            /** Contenedor con los Origenes HTTP de Acceso a la API Autorizadas (separadas por comas) */
            CKDefAPIContainerOriginAuthorizedAccess: string,
            /** Contenedor con los Métodos HTTP Autorizadas en la API (separadas por comas) */
            CKDefAPIContainerMethodsAuthorized: string,
            /** Definición de la Versión Estandar Global de la API */
            CKDefAPICurrentVersionGlobally: string
        }
    }
}
export {}