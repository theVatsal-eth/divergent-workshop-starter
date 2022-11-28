import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import React from 'react'

const InitButtons = ( value ) => {

    const startCall = () => {
        console.log(value)
    }

    const startMessage = () => {
        console.log(value)
    }

  return (
    <div className='flex gap-5 items-center justify-center'>
        <button className='p-3 bg-green-400 border-none outline-none rounded-lg' onClick={() => startCall()}>Start Call</button>
        <button className='p-3 bg-green-400 border-none outline-none rounded-lg' onClick={() => startMessage()}>Start Message</button>
    </div>
  )
}

export default InitButtons