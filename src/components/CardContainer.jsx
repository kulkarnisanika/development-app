import { useState, useEffect } from 'react'
import StatusCard from './StatusCard'
import { Box, Grid, Stack } from '@mui/material'

const CardContainer = ({ cardsData }) => {
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
    }, [cardsData])
    return (
        <Box sx={{ width: '100vw' }}>
            <Grid container gap={3}>
                {Object.entries(formattedData).map(([statusKey, cards]) => (
                    <Grid item key={statusKey} sx={{ flex: 1 }}>
                        <StatusCard
                            cardData={cards}
                            sx={{ flex: 1 }}
                        />
                    </Grid>
                ))}
            </Grid>

        </Box>
    )
}

export default CardContainer