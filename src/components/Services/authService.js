export const AUTH_DATA = 'auth_data';

export const setToken = (token) => {
    localStorage.setItem(AUTH_DATA, token);
}

export const getToken = (token) => {
    // return localStorage.getItem(AUTH_DATA);
    const data = localStorage.getItem(AUTH_DATA);
    return data ? JSON.parse(data) : null;
}

export const removeToken = () => {
    localStorage.removeItem(AUTH_DATA);
};

export const isAuthenticated = () => {
    const token = getToken();
    return !!token; // Returns true if token is present, otherwise false
};
// window.scrollTo(0,0)