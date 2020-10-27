import ApiServices from "./ApiServices";
import { EndPoint } from "./enum/EndPoint";


/**
 * Busca todos os personagems
 * por paginação
 */
const getAll = (params) => {
    return ApiServices.get(EndPoint.CHARACTERS, { params });
}

/**
 * Busca o personagem pelo id
 * @param {integer} id 
 */
const getById = (id) => {
    return ApiServices.get(`${EndPoint.CHARACTERS}/${id}`);
}

/**
 * Busca os quadrinhos pelo id
 * do personagem
 * @param {integer} id 
 */
const getComicsByCharacter = (id) => {
    return ApiServices.get(`${EndPoint.CHARACTERS}/${id}/${EndPoint.COMICS}`);
}

export const CharacterServices = {
    getAll,
    getById,
    getComicsByCharacter
};