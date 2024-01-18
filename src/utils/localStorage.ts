export const setToLocalStorage = (key: string, value: Object) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key: string) => {
    const value = window.localStorage.getItem(key);

    if (value) {
        return JSON.parse(value);
    }
}