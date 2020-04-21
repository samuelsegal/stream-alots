import { SIGN_IN, SIGN_OUT } from './types';

export const signin = () => {
	return {
		type: SIGN_IN,
	};
};
export const signout = () => {
	return {
		type: SIGN_OUT,
	};
};
