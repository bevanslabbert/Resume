import React from 'react';
import '../styles/App.css';
import { Button } from '@mui/material';

interface ButtonProps {
    text: string
}

const ActionButton: React.FC<ButtonProps> = ( props : ButtonProps ) => {
    return (
        <Button variant='contained' sx={
            {
                backgroundColor: '#DC5F00',
                borderRadius: '10px',
                fontWeight: 'bold',
                color: '#FFFFFF',
                width: '30%',
                margin: 'auto',
                '&:active': {
                    backgroundColor: '#EEEEEE',
                },
                '&:hover': {
                    backgroundColor: '#EEEEEE',
                    color: "#DC5F00"
                },
            }
        }>{props.text}</Button>
    );
};
  
export default ActionButton;