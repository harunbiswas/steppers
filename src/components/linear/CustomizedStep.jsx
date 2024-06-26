import { BiSolidError } from 'react-icons/bi'
import ColorlibStepIcon from './ColorlibStepIcon'

export default function CustomizeStep({
  label,
  error,
  index,
  activeStep,
  isStepOptional,
  steps,
}) {
  return (
    <li key={label} className='h-10  flex items-center w-full  relative'>
      {(error === index && (
        <span className='text-2xl text-[#f44336]'>
          <BiSolidError />
        </span>
      )) || (
        <div className='relative flex items-center justify-center w-full'>
          <ColorlibStepIcon
            active={index === activeStep}
            completed={index < activeStep}
            icon={index + 1}
            index={index}
            activeStep={activeStep}
            steps={steps}
          />
        </div>
      )}
      <div className='ml-2 md:w-[max-content] md:absolute bottom-[-30px] left-1/2 md:translate-x-[-50%] hidden md:block '>
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

CustomizeStep.propTypes = {
  error: Number,
  index: Number,
  activeStep: Number,
  isStepOptional: Object,
  label: String,
  steps: Array,
}
