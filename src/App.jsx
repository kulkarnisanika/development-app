import { useState } from 'react'
import './App.css'
import { Stack, Typography, Button } from '@mui/material'
import AddTaskModal from './components/AddTaskModal'
import CardContainer from './components/CardContainer'

function App() {

  /**
   *App
      *AddTaskModal
      *CardContainer
          *StatusCard
          *TaskCard
   */

  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState({
    new: [],
    inProgress: [],
    completed: []
  });

  const handleAddTask = (newTask) => {
    let taskDetails = taskList;
    taskDetails?.new?.push(newTask);
    setTaskList(taskDetails);
    setIsOpen(false)
  }

  return (
    <Stack gap="58px">
      <Stack direction='row' flexWrap='wrap' sx={{ dispaly: "flex", justifyContent: "space-between" }}>
        <Stack  >
          <Typography variant="h4" sx={{ fontSize: '32px', fontWeight: 700 }}>Development Tasks</Typography>
          <Typography variant='body1' color='text.secondary'>A board to keep track of development progress.</Typography>
        </Stack>
        <Stack sx={{ display: "flex", justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => setIsOpen(true)}>+ Add new</Button>
        </Stack>
      </Stack>
      <Stack>
        {(taskList?.new?.length > 0 || taskList?.inProgress?.length > 0 || taskList?.completed?.length > 0) && (
          <CardContainer cardsData={taskList}
            setTaskList={setTaskList} />
        )}
        <AddTaskModal openModal={isOpen}
          handleClose={(prev) => setIsOpen(!prev)}
          addTask={(newTask) => handleAddTask(newTask)} />
      </Stack>
    </Stack>
  )
}

export default App
