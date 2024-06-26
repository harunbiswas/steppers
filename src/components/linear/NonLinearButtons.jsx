export default function NonLinearButtons({
  activeStep,
  handleBack,
  steps = [],
  handleNext,
  completed,
  handleComplete,
  completedSteps,
  totalSteps,
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
        <button
          onClick={handleNext}
          className='px-4 py-2  text-white rounded mr-2 hover:bg-[#ffffff14] uppercase text-sm font-medium'
        >
          Next
        </button>

        {activeStep !== steps.length &&
          (completed[activeStep] ? (
            <span className='text-gray-500'>
              Step {activeStep + 1} already completed
            </span>
          ) : (
            <button
              onClick={handleComplete}
              className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
            >
              {completedSteps() === totalSteps() - 1
                ? 'Finish'
                : 'Complete Step'}
            </button>
          ))}
      </div>
    </div>
  )
}

NonLinearButtons.propTypes = {
  activeStep: Number,
  handleBack: Object,
  handleNext: Object,
  steps: Array,
  completed: Object,
  handleComplete: Object,
  completedSteps: Object,
  totalSteps: Object,
}
