import Basic from './components/Basic'

function App() {
  return (
    <>
      <div className='main  '>
        <div className='container m-auto flex flex-col gap-5 mt-5 items-center '>
          <div className='box border p-5 rounded mt-5 w-full '>
            <Basic />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
