import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

export default function ColorModeIconDropdown({ size = 'small' }) {
  const { mode, setMode } = useColorScheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    handleClose();
  };

  const getIcon = () => {
    switch (mode) {
      case 'light':
        return <Brightness7Icon />;
      case 'dark':
        return <Brightness4Icon />;
      default:
        return <SettingsBrightnessIcon />;
    }
  };

  return (
    <>
      <IconButton
        size={size}
        onClick={handleClick}
        sx={{ color: 'text.primary' }}
      >
        {getIcon()}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'color-mode-button',
        }}
      >
        <MenuItem onClick={() => handleModeChange('light')}>
          <Brightness7Icon sx={{ mr: 1 }} />
          Light
        </MenuItem>
        <MenuItem onClick={() => handleModeChange('dark')}>
          <Brightness4Icon sx={{ mr: 1 }} />
          Dark
        </MenuItem>
        <MenuItem onClick={() => handleModeChange('system')}>
          <SettingsBrightnessIcon sx={{ mr: 1 }} />
          System
        </MenuItem>
      </Menu>
    </>
  );
}
