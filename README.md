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

#### Notes
- If you use a global material with a three js color you need to convert that color using `.convertSRGBToLinear()` otherwise the colour looks completely wrong.
```
const red = new THREE.Color( 0xFE5030 ).convertSRGBToLinear();
const redMat = new THREE.MeshStandardMaterial({color: red,})
```
#### Resources
- https://0xca0a.gumroad.com/l/B4N4N4S


### React XR

### Use-cannon

### React rapier

- Trimesh colliders are for open objects (like terrain). They are hollow so things can get stuck in them.
- Hull colliders are for solid objects
- Make sure your shapes aren't too thin. If they are things will push through them, they will struggle to ever stay still enough to go to sleep and the things will get stuck in them. 0.1 is too thin.

### GTLFJSX

- Use -precision (or -p) flag for models if you are getting scale={0} issues (ie. you can't see your model). EG. `-p=6`
- Use -root (or -r) flag for setting the root from which your model will be imported (https://github.com/pmndrs/gltfjsx/pull/34)
- The overall idea is to try and not have to edit that generated file at all if you can. Otherwise everytime the design changes you will need to edit that file with any manual changes you made.

### Vectary

- 
