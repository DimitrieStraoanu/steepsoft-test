import React from 'react'
import { Meta, Story } from '@storybook/react'
import LessonsSelector, { ILessonsSelectorProps } from 'components/LessonsSelector'

export default {
  title: 'Components/LessonsSelector',
  component: LessonsSelector,
} as Meta

const Template: Story<ILessonsSelectorProps> = (args) => <LessonsSelector {...args} />

export const Default = Template.bind({})
Default.args = {
  chapterTitle: 'Supereroii din farfurie',
  lessons: [
    { title: '01', locked: false },
    { title: '02', locked: false },
    { title: '03', locked: true },
    { title: '04', locked: true },
  ],
  completed: 35,
}
