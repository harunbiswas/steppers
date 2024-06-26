import AlternativeLabel from './components/AlterNativeLabel'
import CustomLinear from './components/CustomLinear'
import SwipeableTextMobileStepper from './components/DotCarousel'
import LineSwipeableTextMobileStepper from './components/LineCarousel'
import Linear from './components/Linear'
import MobileStepper from './components/MobileStepper'
import NonLinear from './components/NonLInear'
import VerticalLinearStepper from './components/Vertical'

function App() {
  return (
    <>
      <div className='main max-w-[800px] m-auto '>
        <div className='container m-auto flex flex-col gap-5 mt-5 items-center  '>
          <div className='box border p-5 rounded mt-5 w-full  flex flex-col gap-4 '>
            <h1 className='text-white text-4xl'>Linear</h1>
            <Linear />
          </div>{' '}
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 '>
            <h1 className='text-white text-4xl'>Non-Linear</h1>
            <NonLinear />
          </div>
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 '>
            <h1 className='text-white text-4xl'>Alternative label</h1>
            <AlternativeLabel />
          </div>{' '}
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 '>
            <h1 className='text-white text-4xl'>
              Customized horizontal steper
            </h1>
            <CustomLinear />
          </div>
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 '>
            <h1 className='text-white text-4xl'>Vertical stepper</h1>
            <VerticalLinearStepper />
          </div>
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 bg-[#1d21265d] '>
            <h1 className='text-white text-4xl'>Mobile stepper</h1>
            <MobileStepper />
          </div>
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 bg-[#1d21265d] '>
            <h1 className='text-white text-4xl'>Text with carousel effect</h1>
            <SwipeableTextMobileStepper />
          </div>{' '}
          <div className='box border p-5 rounded mt-5 w-full flex flex-col gap-4 bg-[#1d21265d] '>
            <h1 className='text-white text-4xl'>Text with carousel Progress</h1>
            <LineSwipeableTextMobileStepper />
          </div>
        </div>
      </div>
      <div className='h-[500px]'></div>
    </>
  )
}

export default App
