import React, { useEffect, useState } from 'react'
import { getSignatures } from "../services/signatures"

const PledgeCount = ({ updateSignatures }) => {
  const [pledgeCount, updatePledgeCount] = useState(0)

    useEffect(() => {
    const fetchSignatures = async () => {
      const signatures = await getSignatures()
      updatePledgeCount(signatures.length)
      // console.log(typeof signatures)
    }
    fetchSignatures()
    }, [updateSignatures])
  
  return (

    <div>
      Total Pledges: {pledgeCount}
    </div>
  )
}

export default PledgeCount
