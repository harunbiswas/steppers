import { useState } from 'react'
import { BiSolidError } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa6'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

export default function NonLinear() {
  const [activeStep, setActiveStep] = useState(0)
  const [completeStep, setcompleteStep] = useState([])
  const [completed, setCompleted] = useState({})

  const [error, setError] = useState(null)

  const isStepOptional = step => {
    return step === null
  }

  const totalSteps = () => {
    return steps.length
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }
  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  const handleComplete = () => {
    const newCompleted = { ...completed }
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleStep = step => () => {
    setActiveStep(step)
  }

  return (
    <div className='w-full text-white'>
      <ul className='flex justify-between items-center mb-4 gap-2'>
        {steps.map((label, index) => {
          const stepClass =
            activeStep === index ||
            Object.keys(completed).includes(index.toString())
              ? 'bg-[#90CAF9]'
              : 'bg-gray-300'
          return (
            <>
              <li
                key={label}
                className='flex items-center w-full lg:w-[max-content]'
              >
                {(error === index && (
                  <span className='text-2xl text-[#f44336]'>
                    <BiSolidError />
                  </span>
                )) || (
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${stepClass} text-xs text-black `}
                  >
                    {(Object.keys(completed).includes(index.toString()) && (
                      <FaCheck />
                    )) ||
                      index + 1}
                  </span>
                )}
                <div className='ml-2 md:w-[max-content]'>
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
      {allStepsCompleted() ? (
        <div className=''>
          <p className='mt-2 mb-1 text-base'>
            All steps completed - you're finished
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
        <div>
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
        </div>
      )}
    </div>
  )
}
