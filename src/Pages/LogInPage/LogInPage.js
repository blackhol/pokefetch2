import React from 'react';
import LogIn from '../../Components/LogIn/LogIn';
import {AuthProvider} from "../../Context/AuthContext"


const App = () => (
    <AuthProvider>
        <div>
            <LogIn/>
        </div>
    </AuthProvider>
);

export default App;