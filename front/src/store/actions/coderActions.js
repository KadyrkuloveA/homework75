import axiosCode from "../../axiosCode";

export const ENCODE_MESSAGE_SUCCESS = 'ENCODE_MESSAGE_SUCCES';
export const DECODE_MESSAGE_SUCCESS = 'DECODE_MESSAGE_SUCCES';
export const CHANGE_HANDLER = 'CHANGE_HANDLER';

export const changeHandler = event => ({type: CHANGE_HANDLER, event});
export const encodeMessageSuccess = encoded => ({type: ENCODE_MESSAGE_SUCCESS, encoded});
export const decodeMessageSuccess = decoded => ({type: DECODE_MESSAGE_SUCCESS, decoded});

export const encodeMessage = (message) => {
    return async dispatch => {
        const response = await axiosCode.post('/encode', message);
        dispatch(encodeMessageSuccess(response.data));
    };
};

export const decodeMessage = (message) => {
    return async dispatch => {
        const response = await axiosCode.post('/decode', message);
        dispatch(decodeMessageSuccess(response.data));
    };
};

