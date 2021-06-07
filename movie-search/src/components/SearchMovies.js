import React from 'react'

export default function SearchMovies() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log('submitting')

        const query = 'Jurassic Park'

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b05db59ff9fa56a5ebc6d6dc860991f0&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data);
        }catch(err){
            console.error(err);
        }
    }


    return (
        <form className='form' onSubmit={searchMovies}>
            <label className='label' htmlFor='query'>Movie Search</label>
            <input className='input' type='text' name='query' placeholder='i.e. Marvel Movies'/>
            <button className='button' type='submit'>Search</button>
        </form>
    )
}