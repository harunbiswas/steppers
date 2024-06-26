import { FaCheck } from 'react-icons/fa6'

export default function Step({
  index,
  steps = [],
  activeStep,
  step = {},
  handleNext,
  handleBack,
}) {
  return (
    <div className=' pb-8 relative transition-all '>
      {index < steps.length - 1 && (
        <div className='absolute w-px h-custom-calc bg-white left-3 top-9'></div>
      )}
      <div className='flex items-start '>
        <div className='w-6 h-6 flex items-center justify-center rounded-full bg-[#90caf9] text-black mt-1'>
          {(index < activeStep && <FaCheck />) || index + 1}
        </div>
        <div className='ml-4'>
          <div className='text-lg text-white font-medium'>{step.label}</div>
          {index === steps.length - 1 && (
            <div className='text-sm text-white'>Last step</div>
          )}
        </div>
      </div>

      <div className='overflow-hidden'>
        <div
          className={`ml-12 mt-2  ${
            activeStep === index
              ? 'accordion-content-auto'
              : ' accordion-content'
          }`}
        >
          <>
            {' '}
            <p className='text-white'>{step.description}</p>
            <div className='mt-4'>
              <button
                onClick={handleNext}
                className='px-4 py-2 bg-blue-500 text-white rounded mr-2'
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </button>
              <button
                onClick={handleBack}
                disabled={index === 0}
                className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium disabled:text-[#ffffff4d] disabled:hover:bg-transparent'
              >
                Back
              </button>
            </div>
          </>
        </div>
      </div>
    </div>
  )
}

Step.propTypes = {
  index: Number,
  steps: Array,
  activeStep: Number,
  step: Object,
  handleBack: Function,
  handleNext: Function,
}
