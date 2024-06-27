import PropTypes from 'prop-types'

export default function StepContent({
  activeStep,
  index,
  step,
  handleNext,
  handleBack,
  steps = [],
}) {
  return (
    <div className={` overflow-hidden`}>
      <div
        className={`ml-12 mt-2 min-h-24 ${
          activeStep === index ? 'accordion-content-auto' : 'accordion-content'
        }`}
      >
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
