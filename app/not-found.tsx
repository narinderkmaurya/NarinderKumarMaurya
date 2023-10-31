import React from 'react'

const Error = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500">Error Occurred</h1>
          <p className="text-gray-700 mt-4">Something went wrong. Please try again later.</p>
        </div>
      </div>
    </div>
  )
}

export default Error