import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {

    if(exerciseVideos.length === 0) return <Loader/>

    return (
        <Box sx={{ marginTop: { lg: '100px', xs: '20px' } }} p="20px">
            <Typography variant='h3' mb="33px" color="#fff">
                Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> Exercise Videos
            </Typography>
            <Stack
                direction='row'
                justifyContent='center'
                flexWrap='wrap'
                alignItems='center'
                sx={{ gap: { lg: '110px', xs: '0' } }}
            >
                {exerciseVideos?.slice(0,3).map((item,index)=>(
                    <a 
                        key={index}
                        className="exercise-video" 
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank" //opening link in new tab
                        rel='noreferrer' //needed in target blank
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
                        <Box>
                            <Typography variant='h5' color="#fff">
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color="#fff">
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
