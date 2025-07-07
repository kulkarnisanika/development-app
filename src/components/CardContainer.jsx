import { useState, useEffect, useMemo } from 'react'
import StatusCard from './StatusCard'
import { Box, Grid, Stack } from '@mui/material'

const CardContainer = ({ cardsData = [] }) => {
    const [formattedData, setFormattedData] = useState({})
    useEffect(() => {
        const organizedData = cardsData?.reduce((acc, item) => {
            const { status } = item;
            if (!acc[status]) {
                acc[status] = [item]
            }
            else {
                acc[status] = [
                    ...acc[status],
                    item
                ]
            }
            return acc;
        }, {});
        setFormattedData(organizedData);
    }, [cardsData]);
    const statusMap = {
        new: 'Not Started',
        inProgress: 'In Progress',
        completed: 'Completed'
    }
    const orderedStatuses = ['new', 'inProgress', 'completed'];
    return (
        <Box sx={{ width: '100vw' }}>
            <Grid container gap={3}>
                {orderedStatuses.map((statusKey) => {
                    const cards = formattedData[statusKey];
                    if (!cards) return null;
                    return (
                        <Grid item key={statusKey} sx={{ flex: 1 }}>
                            <StatusCard
                                cardData={cards}
                                status={statusMap[statusKey]}
                                sx={{ flex: 1 }}
                            />
                        </Grid>
                    );
                })}
            </Grid>

        </Box>
    )
}

export default CardContainer