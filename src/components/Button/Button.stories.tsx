import React from 'react';
import { Story } from '@storybook/react';
import { IButtonProps } from './Button.types';
import Button from './Button';

export default {
    title: 'button/Primary Button',
    component: Button,
    argTypes: {
        text: {
            description: 'The text of the button',
            control: {
                type: 'text',
            },
        },
    },
};

interface ITemplateArgs extends IButtonProps {
    text: string;
}

const Template: Story<ITemplateArgs> = (args) => (
    <Button {...args}>{args.text}</Button>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    text: 'My button text',
};
