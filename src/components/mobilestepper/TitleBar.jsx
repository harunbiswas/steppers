export default function TitleBar({ label }) {
  return (
    <div className='flex items-center h-12 pl-2 bg-black rounded '>
      <p className='text-md text-white'>{label}</p>
    </div>
  )
}

TitleBar.propTypes = {
  label: String,
}
