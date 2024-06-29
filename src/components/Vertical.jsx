import { useState } from 'react'
import Reset from './vertical/Reset'
import Step from './vertical/Step'

const steps = [
  {
    label: 'Select campaign settings',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.An ad group contains one or more ads which target a shared set of keywords.',
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
          <Step
            key={index}
            index={index}
            steps={steps}
            step={step}
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        ))}
      </div>
      {activeStep === steps.length && <Reset handleReset={handleReset} />}
    </div>
  )
}
