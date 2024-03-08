// src/components/RoundedButton.jsx
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
  borderRadius: '300px',
  padding: '10px 100px',
});

function RoundedButton(props) {
  return <StyledButton variant="contained" {...props}>{props.children}</StyledButton>;
}

export default RoundedButton;
