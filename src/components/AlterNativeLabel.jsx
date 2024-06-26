import { useState } from 'react'

import AlternativeLabelStep from './linear/AlternativeLabelStep'
import Buttons from './linear/Buttons'
import Reset from './linear/Reset'
import StepContent from './linear/StepContent'

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
              <AlternativeLabelStep
                label={label}
                index={index}
                error={error}
                activeStep={activeStep}
                isStepOptional={isStepOptional}
                stepClass={stepClass}
              />
              {index + 1 < steps.length && (
                <div className='line sm:w-full h-px bg-[#757575]'></div>
              )}
            </>
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
