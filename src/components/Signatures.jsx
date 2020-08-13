import React, { useState, useEffect } from 'react'
import Signature from './Signature'
import { getSignatures } from '../services/signatures'

const Signatures = ({ updateSignatures }) => {
  const [allSignatures, setAllSignatures] = useState([])

  useEffect(() => {
    const fetchSignatures = async () => {
      const signatures = await getSignatures()
      setAllSignatures(signatures)
      console.log(typeof signatures)
    }
    fetchSignatures()
  }, [updateSignatures])

  // const signaturesJSX = allSignatures.map((signature) => 
  //   <Signature name={signature.name} font={signature.fontType}/>
  // )

  if (allSignatures) {

  return (
    <div>
      {allSignatures.map(signature => 
        <Signature name={signature.fields.name} font={signature.fields.fontType} key={signature.id}/>
      )}
    </div>
    )
  }
  else {
    return <h1>Loading...</h1>
  }
}

export default Signatures
