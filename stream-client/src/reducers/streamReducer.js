import _ from 'lodash';
import { CREATE_STREAM, EDIT_STREAM, FETCH_STREAM, DELETE_STREAM, FETCH_STREAMS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		case FETCH_STREAMS: {
			const streams = _.mapKeys(action.payload, 'id');
			console.log(streams);
			return { ...state, ...streams };
		}
		default:
			return state;
	}
};
