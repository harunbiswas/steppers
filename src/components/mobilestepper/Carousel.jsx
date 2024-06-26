import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export default function Carousel({
  activeStep,
  handleStepChange,
  images = [],
  rtl = false,
  interval = 3000,
  duration = '.5s',
}) {
  return (
    <AutoPlaySwipeableViews
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      axis={rtl ? 'x-reverse' : 'x'}
      interval={interval} // interval between slides in milliseconds
      springConfig={{
        duration: duration,
        easeFunction: 'ease-in-out',
        delay: '0s',
      }}
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
  )
}

Carousel.propTypes = {
  activeStep: Number,
  handleStepChange: Function,
  images: Array,
  rtl: Boolean,
  interval: Number,
  duration: String,
}
