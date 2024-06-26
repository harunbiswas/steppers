export default function ButtonBar({
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
      <div className='intigator flex w-full md:mx-10 rounded-md overflow-hidden bg-[#ffffff4d]'>
        {images.map((item, i) => (
          <span
            key={i}
            className={`h-2 w-full bg-[#90CAF9] ${
              (activeStep >= i && ' scale-x-1') || 'scale-x-0'
            } block transition-all origin-left`}
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

ButtonBar.propTypes = {
  handleBack: Function,
  activeStep: Number,
  images: Array,
  handleNext: Function,
  maxSteps: Number,
}
