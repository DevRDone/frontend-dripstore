import { useState } from "react";

function UseLocalStorage(item) {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(item);
        return storedValue ? JSON.parse(storedValue) : '';
    });

    const updateLocalStorage = (newValue) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    };

    return {
        value,
        updateLocalStorage
    };
}

export default UseLocalStorage;
