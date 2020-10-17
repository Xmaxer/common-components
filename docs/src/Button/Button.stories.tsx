import React from 'react';
import { Story } from '@storybook/react';
import { IStyledButtonProps } from '@common-components/core/StyledButton/StyledButton.types';
import StyledButton from '@common-components/core/StyledButton';

export default {
    title: 'button/Primary Button',
    component: StyledButton,
};

const Template: Story<IStyledButtonProps> = (args) => (
    <StyledButton {...args} />
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    disabled: false,
    text: 'My button text',
};
