import React from 'react'

const CallOptions = () => {

    const accept = () => {
        console.log("Call Accepted")
    }

    const decline = () => {
        console.log("Call declined")
    }

    const endCall = () => {
        console.log("Call Ended")
    }

  return (
    <div className='flex gap-5 justify-center items-center'>
        <button className='rounded-lg p-3 bg-green-400' onClick={accept}>Accept</button>
        <button className='rounded-lg p-3 bg-red-400' onClick={decline}>Decline</button>
        <button className='rounded-lg p-3 bg-red-400' onClick={endCall}>End</button>
    </div>
  )
}

export default CallOptions