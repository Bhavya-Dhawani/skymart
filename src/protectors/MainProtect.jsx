import React, { useEffect } from 'react';
import { load } from '../lib/locaStorage';
import { Outlet, useNavigate } from 'react-router';
import { showErrorToast } from '../lib/toast';

const MainProtect = () => {
    let user = load("logUser");
    let navigate = useNavigate();

    useEffect(() => {
        console.log(user)
        if (user.name == undefined) {
            showErrorToast("Please Login first");
            navigate("/login");
            return;
        }
    }, [])

    return <Outlet />;
}

export default MainProtect
