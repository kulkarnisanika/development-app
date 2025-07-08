import { useState, useEffect, useMemo } from 'react'
import StatusCard from './StatusCard'
import { Box, Grid, Stack } from '@mui/material'

const CardContainer = ({ cardsData = [] }) => {

     /*
    onDrop => columnName, index
    to get that item - todoList[TargetColumnName][TargetIndex]

    source Item = clonedList[sourceColumn].splice(sourceIndex,1)
    Add that = clonedList[targetColum].splice(targetIndex,0,sourceItem)

    */
    const [formattedData, setFormattedData] = useState({})
    const [draggedItem, setDraggedItem] = useState(null);
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

    const orderedStatuses = ['new', 'inProgress', 'completed'];

    const handleOnDropItem = (targetColumn, targetIndex)  => {
        const {sourceColumn, sourceItem, sourceIndex} = draggedItem
        const targetItem = formattedData[targetColumn][targetIndex]
        if(!sourceItem || (sourceItem === targetItem)) return;

        //code to drop
        //1. clone into another var
        const clonnedItemList = formattedData;
        //2. remove source item from source column
       clonnedItemList[sourceColumn]?.splice(sourceIndex,1);
        //3. Add draggedItem into target column at target index
       clonnedItemList[targetColumn]?.splice(targetIndex,0,sourceItem);

        setDraggedItem(clonnedItemList)
    }
    return (
        <Box sx={{ width: '100vw' }}>
            <Grid container gap={3}>
                {orderedStatuses.map((statusKey,index) => {
                    const cards = formattedData[statusKey];
                    if (!cards) return null;
                    return (
                        <Grid item key={statusKey} sx={{ flex: 1 }}>
                            <div >
                                <StatusCard
                                    cardData={cards}
                                    status={statusKey}
                                    sx={{ flex: 1 }}
                                    handleOnDragStart={(sourceIndex) => {
                                        //code to set draggableItem
                                    }}
                                    handleOnDrop = {
                                        () => handleOnDropItem(statusKey,index)
                                    }
                                    setDraggedItem={setDraggedItem}
                                />
                            </div>
                        </Grid>
                    );
                })}
            </Grid>

        </Box>
    )
}

export default CardContainer