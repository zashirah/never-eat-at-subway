import React, { useState } from 'react'
import { createSignature } from '../services/signatures'


const PledgeForm = ( {setUpdateSignatures, setTakePledge} ) => {
  const [pledgee, setPledgee] = useState({
    name: '',
    fontType: ''
  })

  // const [isCreated, setIsCreated] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setPledgee({
      ...pledgee,
      [name]: value
    })
  }

  const handlePledgeeSubmit = async (event) => {
    event.preventDefault()
    await createSignature(pledgee.name, pledgee.fontType)
    setUpdateSignatures(prevState => !prevState)
    setTakePledge(false)
  }

  return (
    <div>
      <form onSubmit={handlePledgeeSubmit}
        style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'middle',
        justifyContent: 'left'
      }}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={event => handleChange(event)}/>
        </div>
        <div>

        <label htmlFor="fontType">Font Type</label>
        <select name="fontType" id="fontType" onChange={handleChange}>
          <option value="'Allura', cursive" style={{fontFamily: "'Allura', cursive"}}>Allura</option>
          <option value="'Amatic SC', cursive;" style={{fontFamily: "'Amatic SC', cursive"}}>Amatic SC</option>
          <option value="'Calligraffitti', cursive" style={{fontFamily: "'Calligraffitti', cursive"}}>Calligraffitti</option>
          <option value="'Dancing Script', cursive" style={{fontFamily: "'Dancing Script', cursive"}}>Dancing Script</option>
          <option value="'Homemade Apple', cursive" style={{fontFamily: "'Homemade Apple', cursive"}}>Homemade Apple</option>
          <option value="'Mr Dafoe', cursive" style={{fontFamily: "'Mr Dafoe', cursive"}}>Mr Dafoe</option>
          <option value="'Mrs Saint Delafield', cursive" style={{fontFamily: "'Mrs Saint Delafield', cursive"}}>Mrs Saint Delafield</option>
          <option value="'Orbitron', sans-serif" style={{fontFamily: "'Orbitron', sans-serif"}}>Orbitron</option>
          <option value="'Satisfy', cursive" style={{fontFamily: "'Satisfy', cursive"}}>Satisfy</option>
          <option value="'Tangerine', cursive" style={{fontFamily: "'Tangerine', cursive"}}>Tangerine</option>
        </select>
        </div>
        <div>
          <input type="submit" name="submitButton" id="submitButton" value="Make the Pledge"/>
        </div>
        
      </form>
      <h1 style={{fontFamily:`${pledgee.fontType}`}}>{pledgee.name}</h1>
    </div>
  )
}

export default PledgeForm