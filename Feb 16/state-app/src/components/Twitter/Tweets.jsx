import React from 'react'
import { useState } from 'react';
import Twitter from './Twitter'

const Tweets = () => {

    const [tweet, setTweet] = useState([
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
    ]);


//Like function 



    const handleLike = (id) =>{
        
        const index = tweet.findIndex( (element) => element.id == id );
        const latestState = [...tweet];
        latestState[index].likes+=1;
        setTweet(latestState);
        console.log(latestState[index].likes);

    }

    const handleDislike = (id) =>{

        const index = tweet.findIndex( (element) => element.id == id );
        const latestState = [...tweet];
        latestState[index].likes-=1;
        setTweet(latestState);
        console.log(latestState[index].likes);

    }

    // console.log(tweet);

    const renderTweets = () => {
        return tweet.map( item => {
            return <Twitter objects  = {item} handleLike = { handleLike}  handleDislike = {handleDislike}  />
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