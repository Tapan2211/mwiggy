import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Logo } from '../Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { isAuthenticated, getToken, AUTH_DATA } from '../Services/authService';

function Navbar() {

    const nav = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    // Retrieve authentication data from localStorage
    const authDataString = localStorage.getItem(AUTH_DATA);

    // Check if authentication data exists and can be parsed
    let userName = null;
    if (authDataString) {
        const authData = JSON.parse(authDataString);
        userName = authData.username;
    }

    const logout = () => {
        localStorage.clear();
        nav('/login')
    }

    return (
        <div className={styles.navbar}>
            <Link to="/">
                <div className={styles.logo}><Logo /></div>
            </Link>
            <div className={`${styles.menuIcon} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <div className={`${styles.menu} ${showMenu ? styles.show : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/Features">Features</Link>
                <Link to="/Price">Pricing</Link>
                <Link to="/Disabled">Disabled</Link>
                {
                    userName ? (
                        <div className={styles.user_profile} onClick={() => logout()}>
                            <Avatar
                                src="./../assets/user.png"
                                alt={userName}
                            />
                        </div>
                    ) : (
                        <div className={styles.user_profile} onClick={() => logout()}>
                            <Avatar
                                src="./../assets/user.png"
                                alt="username"
                            />
                        </div>
                    )
                }
            </div>

        </div>

    );
}

export default Navbar;
