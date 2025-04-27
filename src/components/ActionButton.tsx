import React from 'react';
import '../styles/App.css';
import { Button } from '@mui/material';

interface ButtonProps {
    text: string;
    onPressFunction: any;
}

const ActionButton: React.FC<ButtonProps> = ( props : ButtonProps ) => {
    return (
        <Button onClick={props.onPressFunction} variant='contained' sx={
            {
                backgroundColor: 'transparent',
                color: "var(--secondary-color)",
                borderRadius: '10px',
                border: "1px solid var(--secondary-color)",
                fontWeight: 'bold',
                width: '30%',
                margin: 'auto',
                boxShadow: "none",
                '&:active': {
                    backgroundColor: '#EEEEEE',
                },
                '&:hover': {
                    backgroundColor: 'var(--secondary-color)',
                    color: '#FFFFFF',
                    boxShadow: "none"
                },
            }
        }>{props.text}</Button>
    );
};
  
export default ActionButton;