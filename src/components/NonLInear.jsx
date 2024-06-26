import { useState } from 'react'
import NonLinearButtons from './linear/NonLinearButtons'
import Reset from './linear/Reset'
import Step from './linear/Step'
import StepContent from './linear/StepContent'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']

export default function NonLinear() {
  const [activeStep, setActiveStep] = useState(0)

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
    setError(null)
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
              <Step
                label={label}
                index={index}
                error={error}
                activeStep={activeStep}
                isStepOptional={isStepOptional}
                stepClass={stepClass}
              />
              {index + 1 < steps.length && (
                <div
                  key={index}
                  className='line sm:w-full h-px bg-[#757575]'
                ></div>
              )}
            </>
          )
        })}
      </ul>
      {allStepsCompleted() ? (
        <Reset handleReset={handleReset} />
      ) : (
        <div>
          <StepContent activeStep={activeStep} />
          <NonLinearButtons
            activeStep={activeStep}
            handleBack={handleBack}
            steps={steps}
            handleNext={handleNext}
            completed={completed}
            handleComplete={handleComplete}
            completedSteps={completedSteps}
            totalSteps={totalSteps}
          />
        </div>
      )}
    </div>
  )
}
