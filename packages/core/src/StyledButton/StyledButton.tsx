import React from 'react';
import { Button, withStyles } from '@material-ui/core';
import { IStyledButtonProps } from './StyledButton.types';

const RedButton = withStyles(() => ({
    root: {
        backgroundColor: 'red',
    },
}))(Button);

const StyledButton: React.FC<IStyledButtonProps> = ({
    text,
    ...ButtonProps
}) => {
    return <RedButton {...ButtonProps}>{text}</RedButton>;
};

export default StyledButton;
