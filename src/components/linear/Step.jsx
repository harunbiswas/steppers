import { BiSolidError } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa6'

export default function Step({
  error,
  index,
  activeStep,
  isStepOptional,
  label,
  stepClass,
}) {
  return (
    <li className='flex items-center w-full lg:w-[max-content]'>
      {(error === index && (
        <span className='text-2xl text-[#f44336]'>
          <BiSolidError />
        </span>
      )) || (
        <span
          className={`w-5 h-5 rounded-full flex items-center justify-center ${stepClass} text-xs text-black `}
        >
          {(activeStep > index && <FaCheck />) || index + 1}
        </span>
      )}
      <div className='ml-2 md:w-[max-content]'>
        <p className={`text-sm ${(error === index && 'text-[#f44336]') || ''}`}>
          {label}
        </p>
        {(error === index && (
          <span className='text-sm text-[#f44336]'>Alert message</span>
        )) ||
          (isStepOptional(index) && (
            <span className='text-sm text-gray-500'>{'Optional'}</span>
          ))}
      </div>
    </li>
  )
}

Step.propTypes = {
  error: Number,
  index: Number,
  activeStep: Number,
  isStepOptional: Object,
  label: String,
  stepClass: String,
}
