import { Box, Button, FormLabel, Modal, Stack, TextField } from '@mui/material'
import  {  useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const AddTaskModal = ({ openModal, handleClose, addTask }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const handleAddTask = () => {
        if (!title) return;
        const newTask = {
            id: uuidv4(),
            title: title,
            description: desc,
            tags: ['Launch'],
            status: 'new'
        }
        addTask(newTask);
        setTitle('');
        setDesc('');
    }

    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box padding={3} sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    p: 3,
                    width: 'auto', height: '300', backgroundColor: 'white', color: 'black', borderRadius: 1
                }}>
                    <form onSubmit={(e) => e.preventDefault()}  >
                        <Stack spacing={2} sx={{ width: 600 }}>
                            <Stack>
                                <FormLabel>Title</FormLabel>
                                <TextField size="small" type="text" name="title" value={title} onChange={(e) => setTitle(e?.target?.value)} variant="outlined" />
                            </Stack>
                            <Stack>
                                <FormLabel>Description</FormLabel>
                                <TextField multiline rows={4} type="text" name="desc" value={desc} placeholder="Tell us about yourself..." onChange={(e) => setDesc(e?.target?.value)} />
                            </Stack>
                            <Stack gap={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
                                <Button variant="contained" onClick={handleAddTask} disabled={!title}>Save</Button>
                                <Button variant="outlined" sx={{ backgroundColor: '#F1F5F9', borderColor: '#CBD5E1', color: 'black' }} onClick={handleClose}>Cancel</Button>
                            </Stack>
                        </Stack>
                    </form>
                </Box>
            </Modal>
        </div>
    )
}

export default AddTaskModal;
