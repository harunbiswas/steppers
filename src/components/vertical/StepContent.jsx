import PropTypes from 'prop-types'
import { useRef } from 'react'

export default function StepContent({
  activeStep = 0,
  index = 0,
  step,
  handleNext,
  handleBack,
  steps = [],
}) {
  const ref = useRef(null)

  return (
    <div
      className={` overflow-hidden transition-all ease-in-out box-border ml-12 `}
      style={{
        height: activeStep === index ? ref.current?.offsetHeight + 16 : 0,
      }}
    >
      <div className='' ref={ref}>
        <p className='text-white mt-4'>{step.description}</p>
        <div className=' mt-4'>
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
      </div>
    </div>
  )
}

StepContent.propTypes = {
  activeStep: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  step: PropTypes.object.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
}
