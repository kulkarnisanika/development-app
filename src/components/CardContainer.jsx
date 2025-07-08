import { useState, useEffect, useMemo } from 'react'
import StatusCard from './StatusCard'
import { Box, Grid } from '@mui/material'
import { orderedStatuses } from '../utils/constants'


const CardContainer = ({ cardsData = {}, setTaskList }) => {

    /*
   onDrop => columnName, index
   to get that item - todoList[TargetColumnName][TargetIndex]

   source Item = clonedList[sourceColumn].splice(sourceIndex,1)
   Add that = clonedList[targetColum].splice(targetIndex,0,sourceItem)

   */
    const [draggedItem, setDraggedItem] = useState(null);
    const handleOnDropItem = (targetColumn, targetIndex) => {
        const { sourceColumn, sourceItem, sourceIndex } = draggedItem
        const targetItem = cardsData[targetColumn][targetIndex]
        if (!sourceItem || (sourceItem === targetItem)) return;

        //code to drop
        //1. clone into another var
        const clonnedItemList = {
            new: [...cardsData.new],
            inProgress: [...cardsData.inProgress],
            completed: [...cardsData.completed]
        };
        //2. remove source item from source column
        clonnedItemList[sourceColumn]?.splice(sourceIndex, 1);
        //3. Add draggedItem into target column at target index
        clonnedItemList[targetColumn]?.splice(targetIndex, 0, sourceItem);

        setDraggedItem(null);
        setTaskList(clonnedItemList);
    }
    return (
        <Box sx={{ width: '100vw' }}>
            <Grid container gap={3}>
                {orderedStatuses.map((statusKey, index) => {
                    const cards = cardsData[statusKey];
                    if (!cards) return null;
                    return (
                        <Grid item key={statusKey} sx={{ flex: 1 }}>
                            <div >
                                <StatusCard
                                    cardData={cards}
                                    status={statusKey}
                                    sx={{ flex: 1 }}
                                    handleOnDrop={() => handleOnDropItem(statusKey, index)}
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