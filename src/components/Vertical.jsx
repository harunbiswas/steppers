import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'

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

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className='max-w-md mx-auto'>
      <div className='flex flex-col'>
        {steps.map((step, index) => (
          <div key={step.label} className=' pb-8 relative transition-all'>
            {index < steps.length - 1 && (
              <div className='absolute w-px h-custom-calc bg-white left-3 top-9'></div>
            )}
            <div className='flex items-start'>
              <div className='w-6 h-6 flex items-center justify-center rounded-full bg-[#90caf9] text-black mt-1'>
                {(index < activeStep && <FaCheck />) || index + 1}
              </div>
              <div className='ml-4'>
                <div className='text-lg text-white font-medium'>
                  {step.label}
                </div>
                {index === steps.length - 1 && (
                  <div className='text-sm text-white'>Last step</div>
                )}
              </div>
            </div>

            <div className='overflow-hidden'>
              <div
                className={`ml-12 mt-2   origin-top duration-1000 ${
                  activeStep === index ? '' : 'mt-[-50%] '
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
          </div>
        ))}
      </div>
      {activeStep === steps.length && (
        <div className='p-4 bg-[#121212] mt-4 flex gap-2 flex-col justify-center items-start rounded-sm'>
          <p className='text-white'>All steps completed - you are finished</p>
          <button
            onClick={handleReset}
            className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}
