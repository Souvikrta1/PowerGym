import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/LogoN.png';
import css from '../Styles/Navbar.module.css'

const Navbar = () => {
    return (
        <Stack
            direction='row' justifyContent='space-around'
            sx={{
                gap: { sm: '122px', xs: '40px' },
                mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none'
            }} px='20px'
        >
            <Link to="/">
                <img className={css.logo} src={Logo} alt='logo' />
            </Link>
            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'
            >
                <Link to="/" className={css.homeLink}>Home</Link>
                <a href='#exercises' className={css.exerciseAnchor}>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar
