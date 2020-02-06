import {CHANGE_HANDLER, DECODE_MESSAGE_SUCCESS, ENCODE_MESSAGE_SUCCESS} from "../actions/coderActions";

const initialState = {
    encoded: '',
    decoded: '',
    password: '',
};

const coderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENCODE_MESSAGE_SUCCESS:
            return {...state, encoded: action.encoded.encoded};
        case DECODE_MESSAGE_SUCCESS:
            return {...state, decoded: action.decoded.decoded};
        case CHANGE_HANDLER:
            return {...state, [action.event.target.name]: action.event.target.value};
        default:
            return state;
    }
};

export default coderReducer;