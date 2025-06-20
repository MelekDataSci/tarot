
import React, { forwardRef, useRef, useImperativeHandle, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { a, useSpring } from '@react-spring/three'
import { cardMap } from '../utils/cardList'

import { useHoverAndClick } from '../src/animations/hovercard'; 



const Card = forwardRef(({ code, position = [0, 0, 0], dealt = false, delay = 0 }, ref) => {
  const meshRef = useRef()
  useImperativeHandle(ref, () => meshRef.current, [])

  const frontUrl = cardMap[code]
  const backUrl = cardMap['CardBacks']
  const [frontTex, backTex] = useLoader(THREE.TextureLoader, [frontUrl, backUrl])

  const [flipped, setFlipped] = useState(false)
  const [hovered, setHovered] = useState(false)

 
  const { rotation, position: springPos } = useSpring({
    rotation: dealt ? [0, Math.PI * 2, 0] : [0, 0, 0],  
    position: hovered ? [position[0], position[1], position[2] + 7.0] : position,  
    config: { mass: 1, tension: 300, friction: 18 },
    delay,  
  })

  const materials = [
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ color: '#222' }),
    new THREE.MeshStandardMaterial({ map: frontTex }),  
    new THREE.MeshStandardMaterial({ map: backTex }),   
  ]

  return (
    <a.mesh
      ref={meshRef}
      position={springPos}   
      rotation={rotation}   
      material={materials}
      onClick={() => setFlipped(p => !p)}  
      onPointerOver={() => setHovered(true)}  
      onPointerOut={() => setHovered(false)}  
      castShadow
      receiveShadow
    >
      <boxGeometry args={[2.5, 3.5, 0.05]} />
    </a.mesh>
  )
})

export default Card
