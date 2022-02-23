import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Tweets from './components/Twitter/Tweets'

const App = () => {

  return (
    <>
      
      {/* <h1>Beverages</h1>
      <Navbar firstBev = {"Coffee"}  secondBev = {"tea"}   /> */}
      {/* <h1>Snacks</h1>
      <Navbar/> */}

      {/* <Card title = "Today's Money" num = "$53,000" logo = "Logo one " />
      <Card title = "Today's Users "  num = "5,300"  logo = "Logo two " />
      <Card  title = "New Clients "  num = "+3,462"  logo = "Logo three "  /> */}


      <Tweets/>

    </>
  )
}

export default App