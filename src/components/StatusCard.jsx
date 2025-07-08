import { Box, Stack, Typography } from '@mui/material'
import TaskCard from './TaskCard';
import { statusMap } from '../utils/constants'; 

const StatusCard = ({ status, cardData,handleOnDrop, setDraggedItem }) => {
  
    return (
        <div onDrop={handleOnDrop}
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
