/*
@author LxingA
@project SocASF
@name API
@description Definición del Prototipo para el Ambito Global para los Idiomas del Proyecto
@date 22/04/24 00:30
*/
import type {Database} from '../../database';

/** Prototipo para los Idiomas del Proyecto */
interface Language extends Database {
    /** Identificador ISO del Idioma para el Proyecto */
    readonly iso: string,
    /** Indicador de Habilitación del Idioma en el Proyecto */
    active?: boolean,
    /** Nombre Original del Idioma para el Proyecto */
    label: string,
    /** Descripción Acerca del Propósito del Idioma en el Proyecto */
    description?: string
};

export default Language;