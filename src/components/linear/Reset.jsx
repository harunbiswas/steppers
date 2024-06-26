export default function Reset({ handleReset }) {
  return (
    <div className=''>
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
  )
}

Reset.propTypes = {
  handleReset: Object,
}
