import { createContext, useState } from "react";
import { useContext } from "react";

let AuthContext = createContext();

export const AuthProvider = () => {

    const [user, setUser] = useState({});

    const items = () => {
        return {
            user,
            setUser
        }
    }

    return <AuthContext.Provider value={items()} />
}

export const userData = useContext(AuthContext);