import React from 'react';
import { Story } from '@storybook/react';
import { IButtonProps } from './Button.types';
import Button, { Button as PureButton } from './Button';

export default {
    title: 'Button',
    component: PureButton,
};

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    children: 'Primary button',
    buttonType: 'primary',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
    children: 'Secondary button',
    buttonType: 'secondary',
};
