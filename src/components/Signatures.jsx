import React, { useState, useEffect } from 'react'
import Signature from './Signature'
import { getSignatures } from '../services/signatures'

const Signatures = () => {
  const [allSignatures, setAllSignatures] = useState({})

  useEffect(() => {
    const fetchSignatures = async () => {
      const signatures = await getSignatures()
      setAllSignatures(signatures)
    }
    fetchSignatures()
  }, [])

  // const signaturesJSX = allSignatures.map((signature) => 
  //   <Signature name={signature.name} font={signature.fontType}/>
  // )

  return (
    <div>
      
    </div>
  )
}

export default Signatures
