import React from 'react'

function Form({inputText , setInputText , todos , setTodos , setStatus}) {

  const inputTextHandler = (e)=>{
    setInputText(e.target.value)
  }


  const submitHandler = (e)=>{
    e.preventDefault()
    // if (!inputText || /^\s*$/.test(inputText)) {
    //   return
    // }
    // else{
    //   setTodos([...todos , 
    //     {text : inputText , complete : false , id :Math.random()*2000}])
    //   setInputText('')

    // }
    setTodos([...todos , 
          {text : inputText , complete : false , id :Math.random()*2000}])
        setInputText('')
  }

  const statusHandler = (e) =>{
    setStatus(e.target.value)
  }

  return (
    <div>
        <form >
            <input 
            value={inputText}
            placeholder="Enter you'r Task"
            onChange={inputTextHandler}
            type="text"
             />
            <button 
            className="submit fa fa-check" 
            type='submit'
            onClick={submitHandler}
             />
            <select name="options" onClick={statusHandler} className="options">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Uncompleted">Uncompleted</option>
            </select>
        </form>
    </div>
  )
}

export default Form