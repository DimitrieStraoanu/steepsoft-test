import React from 'react'
import { DottedCircleIcon } from 'assets/svg'

const circleLength = 157.08

export interface IProgressIndicatorProps {
  completed: number
}

const ProgressIndicator: React.FC<IProgressIndicatorProps> = (props) => {
  const { completed = 0 } = props
  const [percentCompleted, setPercentCompleted] = React.useState(0)
  const [lengthCompleted, setLengthCompleted] = React.useState(circleLength)

  React.useEffect(() => {
    if (completed < 0) setPercentCompleted(0)
    else if (completed > 100) setPercentCompleted(100)
    else setPercentCompleted(completed)
  }, [completed])

  React.useEffect(() => {
    setLengthCompleted(-(percentCompleted * circleLength) / 100 + circleLength)
  }, [percentCompleted])

  return (
    <div
      className={['w-14', 'h-14', 'flex', 'justify-center', 'items-center', 'relative'].join(' ')}
    >
      <b className={['text-xs', 'text-dark', 'ml-1'].join(' ')}>{percentCompleted + '%'}</b>

      <DottedCircleIcon className={['absolute'].join(' ')} style={{ width: '53px' }} />

      <svg className={['w-14', 'h-14', 'absolute', 'transform', '-rotate-90'].join(' ')}>
        <circle
          className={['transition-all', 'duration-1000'].join(' ')}
          stroke="#865CE8"
          strokeWidth="6"
          strokeDasharray={circleLength}
          strokeDashoffset={lengthCompleted}
          strokeLinecap="round"
          fill="transparent"
          r="25"
          cx="28"
          cy="28"
        />
      </svg>
    </div>
  )
}

export default ProgressIndicator
