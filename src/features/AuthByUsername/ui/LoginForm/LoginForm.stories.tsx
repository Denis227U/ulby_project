import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'Admin', password: 'qweq12' },
})];

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'Admin', password: 'qweq12' },
})];

export const withError = Template.bind({});
withError.args = {
};
withError.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { username: 'Admin', password: 'qweq12', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {
};
Loading.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginForm: { isLoading: true },
})];
