import React from 'react'

export default function SearchMovies() {
    return (
        <form className='form'>
            <label className='label' htmlFor='query'>Movie Search</label>
            <input className='input' type='text' name='query' placeholder='i.e. Marvel Movies'/>
            <button className='button' type='submit'>Search</button>
        </form>
    )
}