import React from 'react'

const Form = ({ submitHandler, changeHandler }) => {
    return (
        <form onSubmit={submitHandler} className='text-center p-10'>
            <label htmlFor="title"></label>
            <input onChange={changeHandler} className='border border-stone-300 p-2 rounded-lg mr-3' type="text" name="title" id="title" placeholder='inseriscri il titolo' />
            <button className='bg-blue-500 p-2 text-white rounded-lg' type="submit">Invia</button>
        </form>
    )
}

export default Form
