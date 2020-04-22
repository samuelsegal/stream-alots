import { SIGN_IN, SIGN_OUT } from './types';

export const signin = userId => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};
export const signout = () => {
	return {
		type: SIGN_OUT,
	};
};
