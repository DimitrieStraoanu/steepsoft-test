import React from 'react'
import { Story, Meta } from '@storybook/react'
import Tab, { ITabProps } from 'components/Tab'

export default {
  title: 'Components/Tab',
  component: Tab,
} as Meta

const Template: Story<ITabProps> = (args) => <Tab {...args} />

export const Default = Template.bind({})

Default.args = {
  title: '01',
  active: false,
  locked: false,
}
