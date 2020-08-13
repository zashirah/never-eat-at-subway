import React from 'react'

const Products = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around", padding: '50px'}}>
      <div style={{border: 'solid gray 1px', width: '500px'}}>
      <h3>
        Plain white t shirt ($20)
      </h3>
      <p>front says: "I will never eat at subway again"</p>
      <p>back says: "iwillnevereatatsubwayagain.com"</p>
      </div>
      <div style={{border: 'solid gray 1px', width: '500px'}}>
      <h3>
        Plain white t shirt with block letters ($25)
      </h3>
      <p>front says: "I will never eat at subway again"</p>
      <p>back says: "iwillnevereatatsubwayagain.com"</p>
      </div>
    </div>
  )
}

export default Products
