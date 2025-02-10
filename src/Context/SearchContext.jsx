import React, { createContext, useEffect, useState } from 'react'

export const SearchContext = createContext();

export default function SearchContextProvider({children}) {
    const [searchProducts, setSearchProducts] = useState({search: ""});

    return <SearchContext.Provider value={{ searchProducts, setSearchProducts }}>
            {children}
    </SearchContext.Provider>
}
