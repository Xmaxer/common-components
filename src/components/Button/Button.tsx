import React from 'react';
import { Button as MuiButton, withStyles } from '@material-ui/core';
import { IButtonProps, PRIMARY_BUTTON, SECONDARY_BUTTON } from './Button.types';
import { styled } from '../../utils/theme';

const styles = () => ({
    root: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
    },
});

const PrimaryButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.lightest,
        boxShadow: '0px 1px 3px 0px',
    },
}))(MuiButton);

const SecondaryButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.lightest,
        borderColor: theme.palette.secondary.darkest,
    },
}))(MuiButton);

export const Button: React.FC<IButtonProps> = ({
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

export default styled(
    Object.assign(withStyles(styles, { name: 'CCL-Button' })(Button), {
        displayName: 'Button',
    })
);
