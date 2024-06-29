import StepContent from './StepContent'
import StepLabel from './StepLabel'

export default function Step({
  index,
  steps = [],
  activeStep,
  step = {},
  handleNext,
  handleBack,
}) {
  return (
    <div key={index} className=' pb-9 relative bg-black '>
      {index < steps.length - 1 && (
        <div className='absolute w-px h-custom-calc bg-white left-3 top-9'></div>
      )}

      <StepLabel
        step={step}
        index={index}
        steps={steps}
        activeStep={activeStep}
      />

      <StepContent
        key={index}
        index={index}
        step={step}
        steps={steps}
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
    </div>
  )
}

Step.propTypes = {
  index: Number,
  steps: Array,
  activeStep: Number,
  step: Object,
  handleBack: Function,
  handleNext: Function,
}
