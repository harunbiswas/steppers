import { useState } from 'react'
import { BiSolidError } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa6'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

export default function AlternativeLabel() {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const [error, setError] = useState(null)

  const isStepOptional = step => {
    return step === null
  }

  const isStepSkipped = step => {
    return skipped.has(step)
  }

  const handleNext = () => {
    setError(null)
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className='w-full text-white'>
      <ul className='flex justify-between items-center mb-4 gap-2 lg:mx-20'>
        {steps.map((label, index) => {
          const stepClass = activeStep >= index ? 'bg-[#90CAF9]' : 'bg-gray-300'
          return (
            <>
              <li
                key={label}
                className='flex items-center w-full lg:w-[max-content] relative'
              >
                {(error === index && (
                  <span className='text-2xl text-[#f44336]'>
                    <BiSolidError />
                  </span>
                )) || (
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center ${stepClass} text-black `}
                  >
                    {(activeStep > index && <FaCheck />) || index + 1}
                  </span>
                )}
                <div className='ml-2 md:w-[max-content] lg:absolute bottom-[-30px] left-1/2 lg:translate-x-[-50%] '>
                  <p
                    className={`text-sm ${
                      (error === index && 'text-[#f44336]') || ''
                    }`}
                  >
                    {label}
                  </p>
                  {(error === index && (
                    <span className='text-sm text-[#f44336]'>
                      Alert message
                    </span>
                  )) ||
                    (isStepOptional(index) && (
                      <span className='text-sm text-gray-500'>
                        {'Optional'}
                      </span>
                    ))}
                </div>
              </li>
              {index + 1 < steps.length && (
                <div className='line sm:w-full h-px bg-[#757575]'></div>
              )}
            </>
          )
        })}
      </ul>
      {activeStep === steps.length ? (
        <div className='mt-14'>
          <p className='mt-2 mb-1 text-base'>
            All steps completed - you are finished
          </p>
          <div className='flex justify-end pt-2'>
            <button
              onClick={handleReset}
              className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <div className='mt-14'>
          <p className='mt-2 mb-1 text-base'>Step {activeStep + 1}</p>
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
        </div>
      )}
    </div>
  )
}
