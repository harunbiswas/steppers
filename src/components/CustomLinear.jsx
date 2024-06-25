import { useState } from 'react'
import { BiSolidError } from 'react-icons/bi'
import { FaCheck } from 'react-icons/fa6'
import { IoMdSettings } from 'react-icons/io'
import { MdOutlineGroupAdd } from 'react-icons/md'
import { RxLaptop } from 'react-icons/rx'

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

function ColorlibStepIcon({ active, completed, icon, index, activeStep }) {
  const icons = {
    1: <IoMdSettings />,
    2: <MdOutlineGroupAdd />,
    3: <RxLaptop />,
  }

  return (
    <>
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${
          active
            ? 'bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg'
            : completed
            ? 'bg-gradient-to-r from-orange-500 to-pink-500'
            : 'bg-[#616161]'
        }`}
      >
        {icons[icon]}
      </div>
      {index < steps.length - 1 && (
        <div
          className={`absolute left-1/2 z-[-1] top-1/2 transform -translate-y-1/2 w-full h-1 ${
            index <= activeStep - 1
              ? 'bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg'
              : 'bg-[#616161]'
          }`}
        ></div>
      )}
    </>
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
          const stepClass = activeStep >= index ? 'bg-[#90CAF9]' : 'bg-gray-300'
          return (
            <>
              <li
                key={label}
                className='h-10  flex items-center w-full  relative'
              >
                {(error === index && (
                  <span className='text-2xl text-[#f44336]'>
                    <BiSolidError />
                  </span>
                )) || (
                  <div className='relative flex items-center justify-center w-full'>
                    <ColorlibStepIcon
                      active={index === activeStep}
                      completed={index < activeStep}
                      icon={index + 1}
                      index={index}
                      activeStep={activeStep}
                    />
                  </div>
                )}
                <div className='ml-2 md:w-[max-content] lg:absolute bottom-[-30px] left-1/2 lg:translate-x-[-50%] '>
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
              {/* {index + 1 < steps.length && (
                <div className='line sm:w-full h-px bg-[#757575]'></div>
              )} */}
            </>
          )
        })}
      </ul>
      {activeStep === steps.length ? (
        <div className='mt-14'>
          <p className='mt-2 mb-1 text-base'>
            All steps completed - you are finished
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
        <div className='mt-14'>
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
              {isStepOptional(activeStep) && (
                <button
                  onClick={handleSkip}
                  className='px-4 py-2  text-white rounded mr-2 hover:bg-[#ffffff14] uppercase text-sm font-medium'
                >
                  Skip
                </button>
              )}
              <button
                onClick={handleNext}
                className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
