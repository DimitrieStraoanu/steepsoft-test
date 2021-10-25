import React from 'react'
import { Meta, Story } from '@storybook/react'

import ProgressIndicator, { IProgressIndicatorProps } from 'components/ProgressIndicator'

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
} as Meta

const Template: Story<IProgressIndicatorProps> = (args) => <ProgressIndicator {...args} />

export const Default = Template.bind({})

Default.args = {
  completed: 35,
}
