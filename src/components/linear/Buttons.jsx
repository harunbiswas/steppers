export default function Buttons({
  activeStep,
  handleBack,
  isStepOptional,
  handleSkip,
  handleNext,
  steps,
}) {
  return (
    <div className='flex justify-between pt-2'>
      <button
        disabled={activeStep === 0}
        onClick={handleBack}
        className='px-4 py-2 text-white rounded disabled:text-[#ffffff4d] disabled:hover:bg-transparent  hover:bg-[#ffffff14] uppercase text-sm font-medium'
      >
        Back
      </button>
      <div className='flex'>
        {isStepOptional(activeStep) && (
          <button
            onClick={handleSkip}
            className='px-4 py-2  text-white rounded mr-2 hover:bg-[#ffffff14] uppercase text-sm font-medium'
          >
            Skip
          </button>
        )}
        <button
          onClick={handleNext}
          className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  )
}

Buttons.propTypes = {
  activeStep: Number,
  handleBack: Object,
  isStepOptional: Object,
  handleSkip: Object,
  handleNext: Object,
  steps: Array,
}
