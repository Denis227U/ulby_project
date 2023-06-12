import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook_avatar.jpg';
import { ProfileCard } from './ProfileCard';

const data = {
  username: 'admin',
  first: 'Den',
  lastname: 'Y',
  age: 99,
  city: 'Moscow',
  country: Country.Russia,
  currency: Currency.RUB,
  avatar: AvatarImg,
};

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data,
};

export const withError = Template.bind({});
withError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
