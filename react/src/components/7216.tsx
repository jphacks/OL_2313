import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const AlertDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="outlined" sx={{ fontSize: '50px', padding: '16px 32px' }} onClick={handleClickOpen}>
        ゲームに移動しますか？
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"このサイトを離れ、ゲームに移動しますか？"}
        </DialogTitle>
        <DialogContent>
          <div>行った変更が保存されない可能性があります。</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>いいえ</Button>
          <Button onClick={handleClose} autoFocus>はい</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;