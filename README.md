# The third dimension

This readme serves as a knowledge base on things discovered when working in 3D on the web. These are things that are quite important and were difficult to find when doing them. 

## Project details

### Join the site

1. Clone the site `git clone ...`
1. Install dependencies by running `npm install` inside the project directory
1. Create a .env.development file in the root of the repo to hold the any project variables, like api keys etc. (see https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)
1. Start deving with `gatsby develop`

### Deployment

Master branch set to auto deploy to superd.netlify.app

## Knowledge base

### React Three Fibre

- If you use a global material with a three js color you need to convert that color using `.convertSRGBToLinear()` otherwise the colour looks completely wrong.
```
const red = new THREE.Color( 0xFE5030 ).convertSRGBToLinear();
const redMat = new THREE.MeshStandardMaterial({color: red,})
```

### React XR

### Use-cannon

### React rapier

- Trimesh colliders are for open objects (like terrain). They are hollow so things can get stuck in them.
- Hull colliders are for solid objects

### Vectary
