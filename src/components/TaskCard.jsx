import { CardHeader, Card, CardContent, Typography, Divider, Chip, Stack } from '@mui/material'

const TaskCard = ({ title, description, tag }) => {
    if (!title || !description) return null;
   
    return (
        <Card>
            <CardContent>
                <Stack spacing={2} divider={<Divider orientation='horizontal' ></Divider>}>
                    <Stack spacing={1}>
                        <Typography variant='body1' sx={{ fontWeight: 600, color: '#334155' }}>{title}</Typography>
                        <Typography variant='body2' sx={{ color: '#64748B' }}>{description}</Typography>
                        <Chip
                            label="Launch"
                            sx={{
                                borderRadius: 1,
                                borderColor: '#CBD5E1',   // custom border
                                backgroundColor: '#F1F5F9',
                                color: '#000',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                width: 'fit-content'
                            }}
                        />
                    </Stack>
                    <Stack direction='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Stack spacing={0.5} direction='row' divider={<Typography color="text.secondary">•</Typography>}>
                            <Typography variant='body2' color='text.secondary'>5</Typography>
                            <Typography variant='body2' color='text.secondary'>100 comments</Typography>
                        </Stack>
                        <Typography variant='body2' color='text.secondary'>Jun 24,2022</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default TaskCard