import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './index.css'
import Card from "./Card";

function App() {

  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is card 1 description",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is card 2 description",
      image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe",
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is card 3 description",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    {
      id: 4,
      title: "Card 4",
      description: "This is card 4 description",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
    },
    {
      id: 5,
      title: "Card 5",
      description: "This is card 5 description",
      image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
    },
    {
      id: 6,
      title: "Card 6",
      description: "This is card 6 description",
      image: "https://images.unsplash.com/photo-1500534623283-312aade485b7",
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">

      <Card cards={cards} />

    </div>
  );
}

export default App;