import React, { useEffect, useState } from 'react'


export default function AddTransaction() {

    const [count , setCount] = useState(0)

    const [Data , setData] = useState([])
    const addItem = ()=>{
        let newItem = {reason : text , amount : amount , id : count};
        setData([...Data , newItem])
        setCount(count + 1);
    }

    useEffect(()=>{
        console.log(Data)
    },[Data])


    const [text, setText] = useState('');
    const [amount , setAmount] = useState(0);



    return (
        <>
            <h3>Add new transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
                 </div>


                <div className="form-control">

                    <label htmlFor="amount">Amount <br />
                        negative - expense, positive - income </label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  />

                </div>


                <button className="btn" onClick={addItem} >Add transaction</button>

                


            </form>
        </>
    )
}






























