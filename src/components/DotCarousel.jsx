import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

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

function SwipeableTextMobileStepper() {
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
      <div className='flex items-center h-12 pl-2 bg-black'>
        <p className='text-md text-white'>{images[activeStep].label}</p>
      </div>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className='block h-64 max-w-md w-full overflow-hidden'
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <div className='flex justify-between items-center bg-black px-3 py-2'>
        <button
          className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium disabled:text-[#ffffff4d] disabled:hover:bg-transparent flex gap-2 items-center'
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <FaAngleLeft />
          Back
        </button>
        <div className='intigator flex gap-1'>
          {images.map((item, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                (activeStep === i && 'bg-[#90CAF9]') || 'bg-[#ffffff4d] '
              } block `}
            ></span>
          ))}
        </div>
        <button
          className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium disabled:text-[#ffffff4d] disabled:hover:bg-transparent flex gap-2 items-center'
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}

export default SwipeableTextMobileStepper
