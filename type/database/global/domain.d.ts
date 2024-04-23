/*
@author LxingA
@project SocASF
@name API
@description Definición del Prototipo para el Ambito Global para los Dominios Públicos del Proyecto
@date 22/04/24 00:30
*/
import type {Database} from '../../database';

/** Enumador para la Definición de los Proveedores de ICANN del Dominio Público en el Proyecto */
export enum Provider {
    CloudFlare = "86ed40a09085",
    Google = "34725045a6a5",
    Microsoft = "86715fe4e7ab",
    Hostinger = "3d3bc154b229"
};

/** Prototipo de los Dominios Públicos del Proyecto en la Base de Datos */
interface Domain extends Database {
    /** Indicador de Habiltido del Dominio Público en el Proyecto */
    active?: boolean,
    /** Nombre Identificable Amigable del Dominio Público en el Proyecto */
    name: string,
    /** Nombre del Dominio Público en Formato FQDN para el Proyecto */
    extension: string,
    /** Objeto con los Conceptos Esenciales del Dominio Público en Varios Idiomas para el Proyecto */
    translation: {
        /** Descripción Acerca del Propósito del Dominio Público en el Proyecto */
        description?: string
    },
    /** Fecha de Registro del Dominio Público en el ICANN para el Proyecto */
    register: string,
    /** Identificador Único del Registrante del Dominio Público en el ICANN para el Proyecto */
    provider?: string
};

export default Domain;