import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'react-feather'

const AccordianContext = createContext()

export function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className='border-b bg-tranparent text-white' {...props}>
      <header
        role='button'
        onClick={() => setSelected(open ? null : value)}
        className='flex justify-between items-center p-4 font-medium'
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className='overflow-y-hidden transition-all'
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className='pt-2 p-4' ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

export default function CustomVertical() {
  const steps = [
    {
      label: 'Select campaign settings',
      description: `For each ad campaign that you create, `,
    },
    {
      label: 'Create an ad group',
      description: `An ad group contains one or more ads which target a shared set of keywords.Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.,`,
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
    },
  ]
  return (
    <Accordian className='max-w-lg bg-transparent'>
      {steps?.map((item, index) => (
        <AccordianItem key={index} value={item.label} trigger={item.label}>
          {item.description}
        </AccordianItem>
      ))}
    </Accordian>
  )
}
