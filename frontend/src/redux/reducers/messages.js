const initialState = {
    messages: [],
    loaded: false,
    loading: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_MESSAGES': {
            return {
                ...state,
                loading: true,
            }
        }
        case 'FETCH_MESSAGES_ERROR': {
            return {
                ...state,
                error: action.payload,
            }
        }
        case 'LOAD_MESSAGES': {
            return {
                ...state,
                loading: false,
                loaded: true,
                messages: action.payload,
            }
        }
        default: {
            return state;
        }
    }
}
