import { FaCheck } from 'react-icons/fa6'

export default function StepLabel({ step = {}, index, steps, activeStep }) {
  return (
    <div className='flex items-start transition-all'>
      <div className='w-6 h-6 flex items-center justify-center rounded-full bg-[#90caf9] text-black mt-1 text-sm'>
        {(index < activeStep && <FaCheck />) || index + 1}
      </div>
      <div className='ml-4'>
        <div className='text-lg text-white font-medium'>{step.label}</div>
        {index === steps.length - 1 && (
          <div className='text-sm text-white'>Last step</div>
        )}
      </div>
    </div>
  )
}

StepLabel.propTypes = {
  step: Object,
  index: Number,
  steps: Array,
  activeStep: Number,
}
