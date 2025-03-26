import React, { useState } from 'react'

const Articles = ({ articles }) => {


    return (
        <div id='container' className='flex gap-4 flex-wrap '>
            {articles.map(article => (
                <div key={article.id} id='card' className='p-4 border border-stone-300 w-[30%] rounded-lg'>

                    <h2 className='font-semibold '>{article.titolo}</h2>
                </div>
            ))}
        </div>
    )
}

export default Articles
