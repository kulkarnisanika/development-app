import { Box, Card, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard';

const StatusCard = ({ status, cardData }) => {

    return (
        <Stack gap={2}>
            <Typography sx={{ fontSize: '2', color:'#3B373E'}}>{status}</Typography>
            <Box sx={{ height: '606px', backgroundColor: '#C5C0C94D', borderRadius: 2, p:2 }}>
                <Stack gap={2} >
                    {
                        cardData?.map((item) => {
                            return (<TaskCard  title={item?.title} description={item?.description} tag></TaskCard>)
                        })
                    }
                </Stack>
            </Box>
        </Stack>
    )
}

export default StatusCard;
