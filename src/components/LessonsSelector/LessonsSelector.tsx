import React from 'react'
import { Delimiter, LessonsSelectorBg, OnionIcon } from 'assets/svg'
import ProgressIndicator from 'components/ProgressIndicator'
import Tab from '../Tab'
import LessonsSelectorShadow from './LessonsSelectorShadow'
import './lessonsSelector.css'

interface ILesson {
  title: string
  locked: boolean
}

export interface ILessonsSelectorProps {
  chapterTitle: string
  completed: number
  lessons: ILesson[]
}

const LessonsSelector: React.FC<ILessonsSelectorProps> = (props) => {
  const { chapterTitle = '', completed = 0, lessons } = props

  const [activeLesson, setActiveLesson] = React.useState(lessons[1].title)

  const handleTabClick = (title: string) => (): void => {
    setActiveLesson(title)
  }

  return (
    <div className={['w-90', 'relative', 'flex', 'justify-center'].join(' ')}>
      <LessonsSelectorShadow />
      <LessonsSelectorBg className={['w-full', '-z-1'].join(' ')} />

      <OnionIcon
        key={activeLesson}
        className={[
          'w-16',
          'absolute',
          '-top-4',
          'left-6',
          'filter',
          'drop-shadow-onion',
          'z-0',
          'animation-jump',
        ].join(' ')}
      />

      <div className={['absolute', 'top-20', 'left-6'].join(' ')}>
        <b
          className={[
            'font-mono',
            'text-dark',
            'text-sm',
            'mb-2',
            'inline-block',
            'text',
            'tracking-wider',
          ].join(' ')}
        >
          Lecția:
        </b>
        <Delimiter />
      </div>

      <div className={['absolute', 'top-20', 'right-6', 'space-x-2', 'flex'].join(' ')}>
        {lessons.map((lesson) => (
          <Tab
            key={lesson.title}
            title={lesson.title}
            active={lesson.title === activeLesson}
            locked={lesson.locked}
            onClick={handleTabClick(lesson.title)}
          />
        ))}
      </div>

      <p
        className={[
          'absolute',
          'w-56',
          'text-dark',
          'text-2xl',
          'leading-8',
          'bottom-5',
          'left-6',
          'clamp',
        ].join(' ')}
      >
        {chapterTitle}
      </p>

      <div className={['absolute', 'bottom-5', 'right-6'].join(' ')}>
        <ProgressIndicator completed={completed} />
      </div>
    </div>
  )
}

export default LessonsSelector
