import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'

const TodoDetail = ({todoDetails, openDialog, setOpenDialog}) => {
  return (
    <>
    <Dialog onClose={() => setOpenDialog(false)} open={openDialog}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
            <Button onClick={() => {
                setOpenDialog(false)
            }}>Close</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default TodoDetail