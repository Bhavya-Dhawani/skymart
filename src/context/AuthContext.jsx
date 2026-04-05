import { createContext, useState } from "react";
import { useContext } from "react";

let AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const items = {
        user,
        setUser
    }

    return <AuthContext.Provider value={items}>
        {children}
    </AuthContext.Provider>
}

export const userData = () => useContext(AuthContext);