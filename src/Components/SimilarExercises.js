import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMusclesExercises ,equipmentExercises}) => {

    return (
        <Box sx={{mt : {lg : '30px' , xs : '40px'}}} pl="20px">
            <Typography variant='h3' mb={5} color="#fff">
                Exercises That Target Same Muscle Group
            </Typography>
            <Stack direction='row' sx={{p : '2' , position : "relative"}}>
                {targetMusclesExercises.length ? <HorizontalScrollbar data={targetMusclesExercises}/> : <Loader/>}
            </Stack>
            <Typography variant='h3' mb={5} mt={5} color="#fff">
                Exercises That Uses Same Equipment
            </Typography>
            <Stack direction='row' sx={{p : '2' , position : "relative"}}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/>}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
