export const Types = {
    GET_USER: '@user/GET_USER',
    SUCCESS_USER: '@user/SUCCESS_USER',
    ERROR_USER: '@user/ERROR_USER',
};

export const Creators = {
    getUser: () => ({
        type: Types.GET_USER,
    }),
    successUser: (data) => ({
        type: Types.SUCCESS_USER,
        payload: { data }
    }),
    errorUser: () => ({
        type: Types.ERROR_USER,
    }),
};