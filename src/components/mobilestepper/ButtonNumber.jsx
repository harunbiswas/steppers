export default function ButtonNumber({
  handleBack,
  activeStep,
  steps = [],
  handleNext,
  maxSteps,
}) {
  return (
    <div className='flex justify-between items-center bg-black rounded p-2'>
      <button
        className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium disabled:text-[#ffffff4d] disabled:hover:bg-transparent'
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        Back
      </button>
      <span className='text-white'>
        {activeStep + 1} / {steps.length}
      </span>
      <button
        className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium disabled:text-[#ffffff4d] disabled:hover:bg-transparent'
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
      >
        Next
      </button>
    </div>
  )
}

ButtonNumber.propTypes = {
  handleBack: Function,
  activeStep: Number,
  steps: Array,
  handleNext: Function,
  maxSteps: Number,
}
