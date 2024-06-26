export default function Reset({ handleReset }) {
  return (
    <div className='p-4 bg-[#121212] mt-4 flex gap-2 flex-col justify-center items-start rounded-sm'>
      <p className='text-white'>All steps completed - you are finished</p>
      <button
        onClick={handleReset}
        className='px-4 py-2 hover:bg-[#90CAF914] text-[#90CAF9] rounded uppercase text-sm font-medium'
      >
        Reset
      </button>
    </div>
  )
}

Reset.propTypes = {
  handleReset: Function,
}
