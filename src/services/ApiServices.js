import axios from 'axios';
import md5 from 'md5';

/**
 * Configuração de autenticação
 */
const _authParams = () => {
    const ts = new Date().getTime();
    const apikey = process.env.REACT_APP_API_PUBLIC_KEY;
    const forHash = (ts+process.env.REACT_APP_API_PRIVATE_KEY+apikey).toLowerCase();

    return {
        ts,
        apikey,
        hash: md5(forHash)
    }
}

/**
 * Inicializa as configurações do Header.
 * @return {void}
 */
const setup = () => {
    const params = _authParams();

    axios.defaults.baseURL = process.env.REACT_APP_API;
    axios.defaults.params = params;
}

/**
 * @param {string} URL 
 * @param {any[]} params
 * @return Promise
 */
const get = (URL, params = null) => {
    return axios.get(URL, params);
}

const ApiServices = {
    setup,
    get
}

export default ApiServices;