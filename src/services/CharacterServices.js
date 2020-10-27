import ApiServices from "./ApiServices";
import { EndPoint } from "./enum/EndPoint";

const getAll = (params) => {
    return ApiServices.get(EndPoint.CHARACTERS, { params });
}

const getById = (id) => {
    return ApiServices.get(`${EndPoint.CHARACTERS}/${id}`);
}

export const CharacterServices = {
    getAll,
    getById
};