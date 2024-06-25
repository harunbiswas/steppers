import { useState } from 'react'

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
]

export default function MobileStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = steps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div className='max-w-md flex flex-col m-auto '>
      <div className='flex items-center h-12 pl-2 bg-black rounded '>
        <p className='text-md text-white'>{steps[activeStep].label}</p>
      </div>
      <div className='h-64 max-w-md w-full p-4'>
        <p className='text-white'>{steps[activeStep].description}</p>
      </div>
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
    </div>
  )
}
