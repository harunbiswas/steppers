export default function ButtonDot({
  handleBack,
  activeStep,
  images = [],
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
      <div className='intigator flex gap-1'>
        {images.map((item, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              (activeStep === i && 'bg-[#90CAF9]') || 'bg-[#ffffff4d] '
            } block `}
          ></span>
        ))}
      </div>
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

ButtonDot.propTypes = {
  handleBack: Function,
  activeStep: Number,
  images: Array,
  handleNext: Function,
  maxSteps: Number,
}
