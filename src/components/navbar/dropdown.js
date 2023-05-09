import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function DropDown({open,handleClose,anchorEl}) {

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={()=>handleClose("profile")}>Profile</MenuItem> */}
        <MenuItem onClick={()=>handleClose("logout")}>Logout</MenuItem>
      </Menu>
    </div>
  );
}