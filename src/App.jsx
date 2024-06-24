import AlternativeLabel from './components/AlterNativeLabel'
import Linear from './components/Linear'
import NonLinear from './components/NonLInear'

function App() {
  return (
    <>
      <div className='main  '>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default App
