/*
@author LxingA
@project SocASF
@name API
@description Definición del Tipo para la Configuración Global de la API
@date 20/04/24 20:00
*/

/** Definición del Prototipo para la Configuración Global de la API */
type Application = {
    /** Número de Puerto TCP para el Escucha de la API */
    port: number,
    /** Objeto con la Información de Acceso a la Base de Datos del Proyecto */
    database: {
        /** Nombre del Host para la Conexión a la Base de Datos del Proyecto */
        hostname: string,
        /** Token Secreto para el Acceso a Toda la Base de Datos del Proyecto */
        token: string
    },
    /** Objeto con la Información de Acceso de Seguridad en la API (CORS) */
    cors: {
        /** Contenedor con las Cabeceras HTTP Autorizadas */
        headers: string[],
        /** Contenedor con las Direcciones IP Autorizadas */
        ip: string[],
        /** Contenedor con los Origenes HTTP Autorizadas */
        origin: string[],
        /** Contenedor con los Métodos HTTP Autorizadas */
        methods: string[]
    },
    /** Versión Actual de la Aplicación */
    version: string
};

export default Application;