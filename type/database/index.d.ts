/*
@author LxingA
@project SocASF
@name API
@description Definición del Tipo para el Contexto de la Base de Datos de la API
@date 20/04/24 23:30
*/
import type Language from "./global/language";
import type Domain from "./global/domain";

/** Definición del Prototipo para la Base de los Elementos de la Base de Datos */
export interface Database {
    /** Identificador Único (UUID) del Elemento en la Base de Datos */
    readonly identified?: string,
    /** Indicador del Orden de los Elementos de un Elemento en la Base de Datos */
    readonly sort?: string,
    /** Identificador Único (UUID) del Usuario Creador del Elemento en la Base de Datos */
    readonly user_created: string,
    /** Identificador Único (UUID)del Usuario Modificador del Elemento en la Base de Datos */
    readonly user_updated?: string,
    /** Fecha de Creación (ISO) del Elemento en la Base de Datos */
    readonly date_created: string,
    /** Fecha de Modificación (ISO) del Elemento en la Base de Datos */
    readonly date_updated?: string
};

/** Definición del Prototipo para la Esquema de la Base de Datos */
interface Schema {
    /** Contenedor con los Idiomas Oficiales del Proyecto en la Base de Datos */
    readonly language: Language[],
    /** Contenedor con los Dominios Públicos del Proyecto en la Base de Datos */
    readonly domain: Domain[]
};

export default Schema;