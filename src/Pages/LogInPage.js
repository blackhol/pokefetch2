import React from 'react';
import LogIn from '..//Components/LogIn';
import {AuthProvider} from "..//Config/AuthContext"


const App = () => (
    <AuthProvider>
        <div>
            <LogIn/>
        </div>
    </AuthProvider>
);

export default App;