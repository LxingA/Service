/*
@author LxingA
@project SocASF
@name API
@description Definición del Prototipo de la Plantilla 
@date 23/04/24 15:30
*/

/** Definición del Tipo para las Plantillas HTML de la Aplicación */
type Template = {
    /** Nombre del Autor del Proyecto */
    author: string,
    /** Versión Actual de la Aplicación */
    version: string,
    /** Año Actual del Tiempo Currente para la Aplicación */
    year: number,
    /** Titulo a Definir en la Vista del Error */
    title?: string,
    /** Mensaje Descriptivo a Mostrar en la Vista del Error */
    message?: string
};

export default Template;