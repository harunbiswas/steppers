import { FaCheck } from 'react-icons/fa6'

export default function QontoStepIcon({ active, completed }) {
  return (
    <div
      className={`flex items-center ${
        active ? 'text-purple-500' : 'text-gray-400'
      }`}
    >
      {completed ? (
        <FaCheck className='text-purple-500' />
      ) : (
        <div className='w-2 h-2 rounded-full bg-current'></div>
      )}
    </div>
  )
}

QontoStepIcon.propTypes = {
  active: Number,
  completed: Object,
}
