import './app.css'
import s2 from './assets/s2.gif'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-radial from-orange-200 to-red-300'>
      <img src={s2} className='relative bottom-[15%]' />
      <div className='relative bottom-[20%] text-6xl'>Countdown time</div>
    </div>
  )
}

export default App
