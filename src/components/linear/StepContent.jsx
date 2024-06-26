export default function StepContent({ activeStep = 0 }) {
  return <p className='mt-2 mb-1 text-base'>Step {activeStep + 1}</p>
}

StepContent.propTypes = {
  activeStep: Number,
}
