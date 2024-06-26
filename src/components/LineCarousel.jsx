import { useState } from 'react'
import ButtonBar from './mobilestepper/ButtonBar'
import Carousel from './mobilestepper/Carousel'
import TitleBar from './mobilestepper/TitleBar'

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

function LineSwipeableTextMobileStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return (
    <div className='max-w-md flex flex-col grow m-auto'>
      <TitleBar label={images[activeStep].label} />
      <Carousel
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        images={images}
        rtl={true}
        interval={5000}
        duration='.2s'
      />
      <ButtonBar
        handleBack={handleBack}
        activeStep={activeStep}
        images={images}
        handleNext={handleNext}
        maxSteps={maxSteps}
      />
    </div>
  )
}

export default LineSwipeableTextMobileStepper
