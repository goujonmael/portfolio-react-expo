import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    // get selected item from cookie
    const getSelectedItem = () => {
        const cookie = document.cookie.split(';').find(cookie => cookie.includes('selectedItem'));
        if (cookie) {
            return JSON.parse(cookie.split('=')[1]);
        }
        return null;
    }
    // update selected item and store the value in cookie
    const updateSelectedItem = (item) => {
        setSelectedItem(item);
        document.cookie = `selectedItem=${JSON.stringify(item)}`;
    }

    return (
        <StoreContext.Provider value={{ isModalVisible, showModal, hideModal, getSelectedItem, updateSelectedItem }}>
            {props.children}
        </StoreContext.Provider>
    );
};


export default StoreContextProvider;