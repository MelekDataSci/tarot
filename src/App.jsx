
import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Deck from '../components/Deck'
import Card from '../components/Card'
import './app.css'

export default function App() {
  const [dealtCards, setDealtCards] = useState([])
  const [deckCount, setDeckCount] = useState(52)

  const dealtRefs = useRef([])
  const deckGroupRef = useRef()

  const [dealAnimation, setDealAnimation] = useState(false)  

  const handleDeckChange = (count) => setDeckCount(count)

  const handleDeal = (cards) => {
    dealtRefs.current = cards.map(() => React.createRef())
    setDealtCards(cards)
    setDealAnimation(true)  
  }

  const requestDeal = (n) =>
    window.dispatchEvent(new CustomEvent('deal-request', { detail: n }))

  const resetDeck = () => window.dispatchEvent(new Event('reset-deck'))

  return (
    <div className="container">
      <div className="canvas-wrapper">
        <Canvas
          className="full-canvas"
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 2, 35], fov: 19 }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight
            castShadow
            position={[5, 5, 5]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <Deck
            onDeal={handleDeal}
            onDeckChange={handleDeckChange}
            groupRef={deckGroupRef}
            position={[0, 0, -1.5]}
          />

          {dealtCards.map((code, idx) => {
            const count = dealtCards.length
            const spacing = 3
            const x = (idx - (count - 1) / 2) * spacing

            const cardRef = dealtRefs.current[idx] || React.createRef()
            dealtRefs.current[idx] = cardRef

            return (
              <Card
                key={`${code}-${idx}`}
                ref={cardRef}
                code={code}
                dealt={dealAnimation}  
                position={[x, 0, 1]}   
                delay={idx * 150}  
              />
            )
          })}
        </Canvas>
      </div>

      <div className="controls">
        <div className="deck-count">Deck: {deckCount} cards left</div>
        <div className="buttons">
          {[1, 2, 3, 4, 5, 6, 7].map((n) => (
            <button key={n} onClick={() => requestDeal(n)}>
              Deal {n}
            </button>
          ))}
          <button onClick={resetDeck}>Reset Deck</button>
        </div>
      </div>
    </div>
  )
}
