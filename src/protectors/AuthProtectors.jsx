import React, { useEffect } from 'react';
import { load } from '../lib/locaStorage';
import { data, Outlet, useNavigate } from 'react-router';
import { showErrorToast } from '../lib/toast';
import { userData } from '../context/AuthContext';

const AuthProtectors = () => {

    let user = load("logUser");
    let navigate = useNavigate();
    const { setUser } = userData();

    useEffect(() => {
        if (user.name != undefined) {
            showErrorToast("You are already Logged In");
            setUser(user);
            navigate("/");
            return;
        }
    }, [])

    return <Outlet />;
}

export default AuthProtectors
