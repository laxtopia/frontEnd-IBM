import React from 'react'
import Twitter from './Twitter'

const Tweets = () => {

    const tweet = [
        {
            id:1,
            name: "Elon Musk" ,
            handle : "elonmusk" , 
            likes : 10,
            tweet : " lorem " ,
        },
        {
            id:2,
            name: "Laxman BAndi " ,
            handle : "laxman.ly" , 
            likes : 20,
            tweet : " lorem " ,
        },
        {
            id:3,
            name: " Mayank Gupta " ,
            handle : "maya" , 
            likes : 40,
            tweet : " I train studs  " ,
        }
    ]


    const renderTweets = () => {
        return tweet.map( item => {
            return <Twitter objects  = {item}  />
        }  ) 
    }
  return (
    // tweet.map( x => <Twitter  name = {x.name} handle = {x.handle} tweet = {x.tweet}   /> )

    <>
       {renderTweets()}
       <h1></h1>
    </>
  )
}

export default Tweets