import React, { useState } from 'react'
import PledgeButton from '../components/PledgeButton'
import Signatures from '../components/Signatures'
import PledgeForm from '../components/PledgeForm'

const Home = () => {
  const [updateSignatures, setUpdateSignatures] = useState(false)
  const [takePledge, setTakePledge] = useState(false)

  return (
    <div>
      <PledgeButton setTakePledge={setTakePledge}/>
      {takePledge && 
        <PledgeForm setUpdateSignatures={setUpdateSignatures} setTakePledge={setTakePledge}/>
      }
      <Signatures updateSignatures={updateSignatures}/>
    </div>
  )
}

export default Home
