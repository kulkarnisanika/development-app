import { useState } from 'react'
import './App.css'
import { Stack, Typography, Button } from '@mui/material'
import AddTaskModal from './components/AddTaskModal'
import CardContainer from './components/CardContainer'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [taskList, setTaskList] = useState([]);

  {
    /** 
     * MainContainer
     *    Card Conatiner
     *        Card
     *    AddTaskModal
     
     */
  }


  const mockData = [
    {

      title: "title",
      description: 'desc',
      tags: ['Launch'],
      status: 'completed'
    },
    {

      title: 'title',
      description: 'desc',
      tags: ['Launch'],
      status: 'completed'
    },
    {

      title: 'title',
      description: 'desc',
      tags: ['Launch'],
      status: 'inProgress'
    },
    {

      title: 'title',
      description: 'desc',
      tags: ['Launch'],
      status: 'new'
    }
  ]
  const handleAddTask = (newTask) => {

    let a = [
      ...taskList,
      newTask
    ];

    setTaskList(a);
    setIsOpen(false)


  }

  return (
    <Stack gap="58px">
      <Stack direction='row' sx={{ dispaly: "flex", justifyContent: "space-between" }}>
        <Stack  >
          <Typography variant="h4" sx={{ fontSize: '32px', fontWeight: 700 }}>Development Tasks</Typography>
          <Typography variant='body1' color='text.secondary'>A board to keep track of development progress.</Typography>
        </Stack>
        <Stack sx={{ display: "flex", justifyContent: 'center' }}>
          <Button variant="contained" onClick={() => setIsOpen(true)}>+ Add new</Button>
        </Stack>
      </Stack>
      <Stack>
        <CardContainer cardsData={mockData} />

        <AddTaskModal openModal={isOpen}
          handleClose={(prev) => setIsOpen(!prev)}
          addTask={handleAddTask} />

      </Stack>
    </Stack>
  )
}

export default App
