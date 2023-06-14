"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'

 
export default function Home() {
  const [partyTime, setPartyTime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() =>{

  //const target = new Date ("12/31/2023 23:59:59")
  const target = new Date ("6/14/2023 8:29:59")
  const interval = setInterval(() =>{
  const now = new Date()
  const difference = target.getTime() - now.getTime()

  const d = Math.floor(difference / (1000 * 60 * 60 *24))
  setDays(d)

  const h = Math.floor(difference % (1000 * 60 * 60 *24)/(1000 * 60 * 60))
  setHours(h)

  const m = Math.floor(difference % (1000 * 60 * 60)/(1000 * 60))
  setMinutes(m)

  const s = Math.floor(difference % (1000 * 60)/(1000))
  setSeconds(s)

  if(d<=0 && h<=0 && m<=0 && s<=0){
    setPartyTime(true)
  }

  }, 1000)

  return () => clearInterval(interval)
});


  return (
    
    
    <div className='timer-wrapper'>
      <div className='timer-inner'></div>

      <div className='timer-segment'></div>
      <span className='time'>{days}</span>
      <span className='label'>Days</span>

      <div className='timer-segment'></div>
      <span className='time'>{hours}</span>
      <span className='label'>Hours</span>

      <div className='timer-segment'></div>
      <span className='time'>{minutes}</span>
      <span className='label'>Minutes</span>

      <div className='timer-segment'></div>
      <span className='time'>{seconds}</span>
      <span className='label'>Seconds</span>

    </div>
  )
}
