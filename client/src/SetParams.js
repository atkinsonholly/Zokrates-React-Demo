import React, { useState } from "react"

const SetParams = props => {
  const [stackId, setStackID] = useState(null)
  const [inputs, setInputs] = useState({})
  const { drizzle, drizzleState } = props

  const handleSubmit = inputs => setValue(inputs)

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  const setValue = (event) => {
    event.preventDefault()
    console.log(inputs.a, inputs.b, inputs.c, inputs.i)
    const contract = drizzle.contracts.Verifier
    console.log(contract)
    const stackId = contract.methods["verifyTx"].cacheSend(inputs.a, inputs.b, inputs.c, inputs.i, {
      from: drizzleState.accounts[0]
    })
    setStackID(stackId)
  }

  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState
    const txHash = transactionStack[stackId]
    if (!txHash) return null;
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="a" onChange={handleInputChange}/>
        <input type="text" name="b" onChange={handleInputChange}/>
        <input type="text" name="c" onChange={handleInputChange}/>
        <input type="text" name="i" onChange={handleInputChange}/>
        <button type="submit">Submit Inputs</button>
      </form>
      <div>{getTxStatus()}</div>
    </div>
  )
}

export default SetParams
