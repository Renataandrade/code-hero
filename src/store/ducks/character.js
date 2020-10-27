import { put, takeLatest } from "redux-saga/effects";
import { CharacterServices } from "../../services/CharacterServices";

// Services
const services = CharacterServices;

// Initial State
export const initialState = {
	offset: 0,
	isLoaded: false,
	results: [],
	details: {
		name: '',
		description: '',
		thumbnail: {},
		comics: [],
		series: [],
		events: []
	}
};

// Types
export const types = {
	GET_ALL_CHARACTER: "[Character] Get All",
	GET_CHARACTER: "[Character] Get by Id",
	LOAD_ALL_CHARACTER: "[Character] Load All",
	LOAD_CHARACTER: "[Character] Load by Id",
	NOT_LOADED: "[Character] Request Not Finished"
}

// Reducers
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LOAD_ALL_CHARACTER:
			let { data } = action.payload;

			return { 
				...state, 
				results: data.results,
				offset: data.offset,
				total: data.total,
				isLoaded: true,
			};

		case types.LOAD_CHARACTER:
			let res = action.payload;
			res = res.data.results[0];

			return { 
				...state, 
				details: {
					name: res.name,
					description: res.description,
					thumbnail: res.thumbnail
				}
			};

		case types.NOT_LOADED:
			return { ...state, isLoaded: false };

		default:
			return state;
	}
}

// Actions
export const actions = {
	getAllCharacter: character => ({ 
		type: types.GET_ALL_CHARACTER, 
		payload: character 
	}),
	getCharacterById: character => ({ 
		type: types.GET_CHARACTER, 
		payload: character 
	}),
	fetchAllCharacter: character => ({ 
		type: types.LOAD_ALL_CHARACTER, 
		payload: character 
	}),
	fetchCharacterById: character => ({ 
		type: types.LOAD_CHARACTER, 
		payload: character 
	}),
	isLoaded: character => ({ 
		type: types.NOT_LOADED, 
		payload: character 
	}),
} 

// Sagas
export function* saga() {
	yield takeLatest(types.GET_ALL_CHARACTER, function* getAllCharacter(action) {
		let offset = yield action.payload;
		offset = ((offset - 1) * 10);

		// loader
		yield actions.isLoaded();

		try {  
			const { data } = yield services.getAll({ limit: 10, offset: offset });
			yield put(actions.fetchAllCharacter(data));
		} catch (error) {
			console.log(error)
		}
	});

	yield takeLatest(types.GET_CHARACTER, function* getCharacter(action) {
		const id = yield action.payload;

		try {  
			const { data } = yield services.getById(id);
			yield put(actions.fetchCharacterById(data));
		} catch (error) {
			console.log(error)
		}
	});
}