import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilarExercises from '../Components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeOptions } from '../utills/FetchData'

const ExerciseDetail = () => {

    const [exerciseDetail,setExerciseDetail] = useState({});
    const [exerciseVideos , setExerciseVideos] = useState([]);
    const [targetMusclesExercises,setTargetMusclesExercises] = useState([]);
    const [equipmentExercises , setEquipmentExercises] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        const fetchExercisesData = async() =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData( `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
            setExerciseVideos(exerciseVideosData.contents);

            const targetMusclesExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
            setTargetMusclesExercises(targetMusclesExercisesData)

            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
            setEquipmentExercises(equipmentExercisesData)
        }

        fetchExercisesData();
    },[id])



    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMusclesExercises={targetMusclesExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetail
