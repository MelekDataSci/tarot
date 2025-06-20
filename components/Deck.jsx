import React, { useState, useMemo, useEffect } from 'react'
import { cardCodes } from '../utils/cardList'
import { animateShuffle } from '../src/animations/shuffle'
import Card from './Card'

// Secure random integer generator (0 to max-1)
function secureRandomInt(max) {
  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  return array[0] % max
}

export default function Deck({ onDeal, onDeckChange, groupRef }) {
  const fullDeck = useMemo(() => [...cardCodes], [])

  // Use state for deck to track current cards
  const [deck, setDeck] = useState(() => shuffleArray([...fullDeck]))

  // Shuffle helper using secure random
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = secureRandomInt(i + 1)
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  useEffect(() => {
    onDeckChange?.(deck.length)
  }, [deck.length, onDeckChange])

  // Shuffle deck with animation and update state
  const shuffleDeck = () => {
    animateShuffle(
      groupRef,
      {
        liftAmount:    2,
        liftTime:      0.3,
        scatterTime:   0.5,
        restackTime:   0.7,
        staggerAmount: 0.02,
      },
      () => {
        const shuffled = shuffleArray([...deck])
        setDeck(shuffled)
        onDeal([])
      }
    )
  }

  const handlePointerDown = (e) => {
    e.stopPropagation()
    shuffleDeck()
  }

  useEffect(() => {
    const handler = (e) => {
      const n = e.detail
      setDeck((prev) => {
        const dealt = prev.slice(0, n)
        const remain = prev.slice(n)
        onDeal(dealt)
        return remain
      })
    }
    window.addEventListener('deal-request', handler)
    return () => window.removeEventListener('deal-request', handler)
  }, [onDeal])

  useEffect(() => {
    const handleReset = () => {
      // Always shuffle a fresh copy on reset to ensure new order
      const freshShuffled = shuffleArray([...fullDeck])
      setDeck(freshShuffled)
      onDeal([])
      onDeckChange?.(freshShuffled.length)
    }
    window.addEventListener('reset-deck', handleReset)
    return () => window.removeEventListener('reset-deck', handleReset)
  }, [fullDeck, onDeal, onDeckChange])

  return (
    <group
      ref={groupRef}
      rotation={[-0.6, Math.PI, 0]}
      position={[5, 1.5, -1]}
    >
      {deck.map((code, idx) => (
        <Card
          key={`${code}-${idx}`}
          code={code}
          position={[0, -idx * 0.02, idx * 0.001]}
        />
      ))}

      {deck.length > 0 && (
        <mesh
          visible={false}
          position={[0, 0, deck.length * 0.001 + 0.01]}
          onPointerDown={handlePointerDown}
        >
          <boxGeometry args={[2.5, 3.5, 0.1]} />
        </mesh>
      )}
    </group>
  )
}
