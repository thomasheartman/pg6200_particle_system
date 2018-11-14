import * as three from 'three'
import { createPoints3D, range } from './utils'

//models
import tex from 'assets/textures/sprites/disc.png'

const velocityVec = () => ({
  x: Math.random() * 2 - 1,
  y: -(Math.random() + .5),
  z: Math.random() * 2 - 1
})

export const create = (n: number) => {
  const points = createPoints3D(n)

  const geometry = new three.BufferGeometry()

  const textureLoader = new three.TextureLoader()

  const sprite = textureLoader.load(tex)

  geometry.addAttribute('position', new three.Float32BufferAttribute(points, 3))

  const material = new three.PointsMaterial({
    size: 35,
    sizeAttenuation: false,
    map: sprite,
    alphaTest: 0.5,
    transparent: true
  })

  material.color.setHSL(1, .3, .7)

  const particles = new three.Points(geometry, material)

  const velocity = velocityVec()
  return { material, points: particles, velocity }
}
