import React from 'react'
import Article from './Article'

function ArticleList({posts}){
    
    const arrayProps = posts.map(prop =>{
        return(
        <Article key={prop.id} title={prop.title} date={prop.date} preview={prop.preview} />)
    })

    return(
     <main>{arrayProps}</main>
    )
}

export default ArticleList