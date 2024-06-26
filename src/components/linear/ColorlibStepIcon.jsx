import { IoMdSettings } from 'react-icons/io'
import { MdOutlineGroupAdd } from 'react-icons/md'
import { RxLaptop } from 'react-icons/rx'

export default function ColorlibStepIcon({
  active,
  completed,
  icon,
  index,
  activeStep,
  steps = [],
}) {
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
