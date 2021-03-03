import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

export const AppProvider = ( {children} )=> {
    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen ] = useState(false);
    const [ location, setLocation ] = useState({ }); 
    const [ page, setPage ] = useState( { page: '', links:[] } );

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }
    const openSubMenu = (text, coordinates) => {
        // text -> products, developers, company
        const page = sublinks.find( (link) => link.page === text ); //{page: "company", links: Array(2)}
        setPage(page)
        setLocation(coordinates);
        setIsSubMenuOpen(true);
    }
    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }

    return (
        <AppContext.Provider
            value= { {
                isSubMenuOpen,
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                openSubMenu,
                closeSubMenu,
                location,
                page
            }}>
                {children}
            </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}
