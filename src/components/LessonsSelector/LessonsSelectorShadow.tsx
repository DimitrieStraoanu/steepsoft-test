import React from 'react'

const defaultClasses = [
  'absolute',
  'h-52',
  'shadow-lessons',
  'rounded-4xl',
  'bg-cyan',
  '-z-1',
  'transform',
]

const LessonsSelectorShadow: React.FC = () => (
  <>
    <div className={[...defaultClasses, 'w-10/12', '-bottom-6'].join(' ')}></div>
    <div className={[...defaultClasses, 'w-11/12', '-bottom-3'].join(' ')}></div>
    <div className={[...defaultClasses, 'w-full', 'bottom-0'].join(' ')}></div>
  </>
)

export default LessonsSelectorShadow
