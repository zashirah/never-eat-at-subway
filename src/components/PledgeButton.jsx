import React from 'react'

const PledgeButton = ({ setTakePledge }) => {
  
  const handleSubmit = event => {
    event.preventDefault()
    setTakePledge(true)
  }

  return (
    <div>
      <form onSubmit={event => handleSubmit(event)}>
        <input type="submit" name="takePledgeButton" id="takePledgeButton" value="Take the Pledge"/>
      </form>
    </div>
  )
}

export default PledgeButton
