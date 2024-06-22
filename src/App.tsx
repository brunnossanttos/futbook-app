import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';

const App: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (userId) {
            setLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={loggedIn ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} />
                <Route path="/profile" element={loggedIn ? <Profile /> : <Navigate to="/" />} />
            </Routes>
            {loggedIn && <button onClick={handleLogout}>Logout</button>}
        </Router>
    );
}

export default App;
