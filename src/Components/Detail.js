import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart , gifUrl , name , target , equipment} = exerciseDetail;

    const extraDetail = [
        {
            icon : BodyPartImage ,
            name : bodyPart,
        } , 
        {
            icon : TargetImage ,
            name : target,
        } , 
        {
            icon : EquipmentImage ,
            name : equipment,
        } 
    ]

    return (
        <Stack
            gap='60px'
            sx={{flexDirection : {lg : 'row'} , p:"20px" , alignItems : 'center' , mt:"50px"}}
        >
            <img src={gifUrl} alt={name} loading="lazy" className='detail-image' />
            <Stack sx={{gap :{lg: '35px', xs:"20px"} }}>
                <Typography variant='h3' textTransform='capitalize' color="#dacaca">
                    {name}
                </Typography>
                <Typography variant='h6' color="#fff">
                    Exercises keep you strong. {name} is one of the exercises to target your abs . 
                    It will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item)=>(
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{background : '#fff2db' , borderRadius : '50%' , width : '80px' , height : '80px' }}>
                            <img src={item.icon} alt={bodyPart} style={{width : "50px" , height : "50px"}}/>
                        </Button>
                        <Typography variant='h5' textTransform='capitalize' color="#fff">
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>

    )
}

export default Detail
