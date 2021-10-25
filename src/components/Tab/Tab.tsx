import React from 'react'
import { LockIcon } from 'assets/svg'

export interface ITabProps {
  title: string
  active: boolean
  locked: boolean
  onClick: () => void
}

const Tab: React.FC<ITabProps> = (props) => {
  const { title, active = false, locked = false, onClick } = props

  return (
    <button
      className={[
        'group',
        'bg-white',
        'border',
        'border-purple',
        'border-opacity-20',
        'rounded-lg',
        'w-12',
        'h-9',
        'transition-all',
        'duration-300',
        'transform',
        '-skew-x-12',
        'font-mono',
        'hover:bg-purple',
        'disabled:bg-navy',
        'disabled:bg-opacity-30',
        'disabled:border-0',
        'disabled:shadow-none',
        'relative',
        'flex',
        'items-center',
        'justify-center',
        `${active ? 'shadow-tab bg-purple' : ''}`,
      ].join(' ')}
      onClick={onClick}
      disabled={locked}
    >
      <div
        className={[
          'absolute',
          'flex',
          'items-center',
          'transform',
          'skew-x-12',
          `${locked ? 'justify-center' : 'flex-col'}`,
        ].join(' ')}
      >
        {locked ? <LockIcon className={'mr-1'} /> : null}

        <b
          className={[
            'font-mono',
            'leading-none',
            'group-hover:text-white',
            'transition-all',
            'duration-300',
            `${active || locked ? 'text-white' : 'text-dark'}`,
          ].join(' ')}
        >
          {title}
        </b>

        <div
          className={[
            'bg-white',
            'h-0.5',
            'rounded-xl',
            'shadow-glow-sm',
            'transition-all',
            'duration-300',
            `${active && !locked ? 'w-3 mt-1' : 'w-0 mt-0'}`,
          ].join(' ')}
        ></div>
      </div>
    </button>
  )
}

export default Tab
