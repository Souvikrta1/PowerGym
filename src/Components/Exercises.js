import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {exerciseOptions,fetchData} from "../utills/FetchData"
import ExerciseCard from './ExerciseCard'

const Exercises = ({exercises , setExercises , bodyPart}) => {

    const [currentPage , setCurrentPage] = useState(1)
    const indexOfLastExercise = currentPage * 9;
    const indexOfFirstExercise = indexOfLastExercise - 9;
    const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

    const paginate = (e,value) =>{
        setCurrentPage(value);
        window.scrollTo({top: 1800 , behavior : 'smooth'})
    }

    useEffect(()=>{
        const fetchExercisesData = async () =>{
            let exercisesData = [];
            if(bodyPart === 'all'){
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData();
    },[bodyPart])

    return (
        <Box id="exercises"
            sx={{mt : {lg : '110px'}}}
            mt = '50px'
            p = "20px"
        >
            <Typography variant='h3' mb="46px" color="#dacaca">
                Showing Results
            </Typography>
        <Stack direction="row" sx={{gap : {lg : '110px' , xs : '50px'}}}
            flexWrap="wrap" justifyContent="center"
        >
            {currentExercises.map((exercise,index)=>(
                <ExerciseCard key={index} exercise={exercise}/>
            ))}    
        </Stack>
        <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination 
                        color='standard' 
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length/9)}
                        page = {currentPage}
                        onChange={paginate}
                        size="large"
                        sx={{backgroundColor : "#dacaca" , px : "20px" , borderRadius : "10px"}}
                    />
                )}
        </Stack>
        </Box>
    )
}

export default Exercises