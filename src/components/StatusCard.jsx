import { Box, Card, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TaskCard from './TaskCard';

const StatusCard = ({ status, cardData, handleOnDragStart,handleOnDrop, setDraggedItem }) => {

   
    const statusMap = {
        new: 'Not Started',
        inProgress: 'In Progress',
        completed: 'Completed'
    }
   
    
    return (
        <div onDrop={(handleOnDrop)}
            onDragOver={(e) => e.preventDefault()}>
            <Stack gap={2}>
                <Typography sx={{ fontSize: '2', color: '#3B373E' }}>{statusMap[status]}</Typography>
                <Box sx={{ minHeight: '606px', backgroundColor: '#C5C0C94D', borderRadius: 2, p: 2 }}>
                    <Stack gap={2} >
                        {
                            cardData?.map((item,index) => {
                                return (
                                    <div key={item?.id}
                                        draggable
                                        onDragStart={() => setDraggedItem({
                                            sourceColumn: status,
                                            sourceItem: item,
                                            sourceIndex: index
                                        })}
                                        onDragOver={(e) => e.preventDefault()}
                                        style={{ cursor: "move" }}>
                                        <TaskCard title={item?.title} description={item?.description} tag></TaskCard>
                                    </div>
                                )
                            })
                        }
                    </Stack>
                </Box>
            </Stack>
        </div>
    )
}

export default StatusCard;
