import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import heroBannerImage from "../assets/images/banner2.jpeg"

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '120px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position="relative" p="20px">
            <Typography
                color='#dacaca'
                fontWeight="600"
                fontSize='26px'
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb='23px' mt='30px'
                color="#fff"
            >
                Sweat , Smile <br /> and Repeat
            </Typography>
            <Typography
                fontSize='22px'
                lineHeight='35px'
                mb={4}
                color="#fff"
            >
                Check out the most effective exercises
            </Typography>
            <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: "#FF2625", padding: '10px' }}>
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color="#dacaca"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize='200px'
            >
                Exercise
            </Typography>
            <img src={heroBannerImage} alt='banner' className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner
