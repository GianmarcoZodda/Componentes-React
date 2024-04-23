import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {TwitterFollowCard} from "./Components/TwitterFollowCard.jsx/"
import {Prueba} from "./Components/Prueba.jsx/"

function App() {

  const users = [
    {
      userName: 'nasa',
      name: 'Nasa',
      isFollowing: true
    },
    {
      userName: 'billgates',
      name: 'Bill Gates',
      isFollowing: false
    },
    {
      userName: 'espn',
      name: 'ESPN',
      isFollowing: false
    },
    {
      userName: 'justinbieber',
      name: 'Justin Bieber',
      isFollowing: false
    }
  ]
 // kingjames

  return (
    <section className = "App">


<Prueba estadoInicial= "prendido"></Prueba>

      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard key={userName} userName = {userName} name = {name} initialIsFollowing = {isFollowing}></TwitterFollowCard>
        )
      )
      }
    </section>
  )
}

export default App
