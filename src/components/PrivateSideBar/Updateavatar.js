import React,{ useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Avatar } from '@material-ui/core';
import axios from 'axios';

export default function Updateavator( { avatar,setImage,...rest }) {
  const [open, setOpen] = React.useState(false);
  const [newavatar, setNewAvatar]=React.useState('')
  const [avatarr,setAvatarr]=React.useState(avatar)

  useEffect(() => {
    setAvatarr(avatar)

  },[] )
  //setAvatarr(avatar)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const updating =async()=>{
    console.log(newavatar)
    const avatardata=new FormData()
    avatardata.append('file',newavatar);
    avatardata.append('upload_preset','instagram')
    avatardata.append('cloud_name','dwu20')
    try {
      var img=await axios.post('https://david-cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/dwu20/image/upload',avatardata);
      console.log(img)
      await axios.put('/updateavatar',{
        avatardata:img.data.secure_url
      })
      localStorage.setItem('UserImage',(img.data.secure_url))
      setAvatarr((img.data.secure_url))
      setImage(img.data.secure_url)
      handleClose(); 

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Button  startIcon={<Avatar className="private_avatar" src={avatarr?avatarr:avatar}/>}  color="primary" onClick={handleClickOpen}>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Please upload your "}</DialogTitle>

        <DialogActions>

        <Button
          
          label='My Label'>
          <input type="file"  onChange={e=>setNewAvatar(e.target.files[0])}/>
        </Button>
          <Button onClick={updating} color="primary" autoFocus>
            Submit Change
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
