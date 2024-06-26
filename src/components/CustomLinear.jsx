import { useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import Buttons from './linear/Buttons'
import CustomizeStep from './linear/CustomizedStep'
import Reset from './linear/Reset'
import StepContent from './linear/StepContent'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

function QontoStepIcon({ active, completed }) {
  return (
    <div
      className={`flex items-center ${
        active ? 'text-purple-500' : 'text-gray-400'
      }`}
    >
      {completed ? (
        <FaCheck className='text-purple-500' />
      ) : (
        <div className='w-2 h-2 rounded-full bg-current'></div>
      )}
    </div>
  )
}

export default function CustomLinear() {
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
      <ul className='flex justify-between items-center mb-4  '>
        {steps.map((label, index) => {
          return (
            <CustomizeStep
              key={index}
              label={label}
              error={error}
              index={index}
              activeStep={activeStep}
              isStepOptional={isStepOptional}
              steps={steps}
            />
          )
        })}
      </ul>
      {activeStep === steps.length ? (
        <div className='mt-14'>
          <Reset handleReset={handleReset} />
        </div>
      ) : (
        <div className='mt-14'>
          <StepContent activeStep={activeStep} />
          <Buttons
            activeStep={activeStep}
            handleBack={handleBack}
            isStepOptional={isStepOptional}
            handleSkip={handleSkip}
            handleNext={handleNext}
            steps={steps}
          />
        </div>
      )}
    </div>
  )
}
