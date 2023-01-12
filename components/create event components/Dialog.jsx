import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({openDialog, setOpenDialog, handleCreateTicket}) {
 
  return (
    <div>
     
      <Dialog
        open={openDialog}
        onClose={()=>setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Create Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure of creating this event with the details filled in the form?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpenDialog(false)}>No</Button>
          <Button onClick={handleCreateTicket} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}