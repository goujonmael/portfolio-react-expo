import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    return (
        <StoreContext.Provider value={{ isModalVisible, showModal, hideModal }}>
            {props.children}
        </StoreContext.Provider>
    );
};


export default StoreContextProvider;