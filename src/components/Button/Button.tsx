import React from 'react';
import {
    Button as MuiButton,
    withStyles as withMuiStyles,
} from '@material-ui/core';
import { IButtonProps, PRIMARY_BUTTON, SECONDARY_BUTTON } from './Button.types';

const PrimaryButton = withMuiStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
}))(MuiButton);

const SecondaryButton = withMuiStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
    },
}))(MuiButton);

const Button: React.FC<IButtonProps> = ({
    buttonType = PRIMARY_BUTTON,
    ...ButtonProps
}) => {
    const defaultButton = () => {
        console.warn(
            'Invalid buttonType prop: Defaulting to primary button style'
        );
        return <PrimaryButton {...ButtonProps} />;
    };
    if (buttonType === PRIMARY_BUTTON) {
        return <PrimaryButton {...ButtonProps} />;
    } else if (buttonType === SECONDARY_BUTTON) {
        return <SecondaryButton {...ButtonProps} />;
    } else return defaultButton();
};

export default Button;
