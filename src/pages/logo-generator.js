import React, {useEffect, useRef, useState} from 'react';
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import Matter from 'matter-js';
import 'pathseg';

const CanvasHolder = styled.div`
  width: 100%;
  height: var(--windowHeight);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function DataVis() {

  const holderRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Composites = Matter.Composites,
      Common = Matter.Common,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events,
      Composite = Matter.Composite,
      Svg = Matter.Svg,
      Vertices = Matter.Vertices,
      Bodies = Matter.Bodies;

    // // provide concave decomposition support library
    Common.setDecomp(require('poly-decomp'));

    // create engine
    let engine = Engine.create(),
      world = engine.world;

    // create renderer
    let render = Render.create({
      element: holderRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 600,
        height: 600,
        showAngleIndicator: true,
      }
    });

    Render.run(render);

    // create runner
    // https://brm.io/matter-js/docs/classes/Runner.html
    let runner = Runner.create();
    Runner.run(runner, engine);

    // Add bodies

    if (typeof fetch !== 'undefined') {

      let select = function (root, selector) {
        return Array.prototype.slice.call(root.querySelectorAll(selector));
      };

      let loadSvg = function (url) {
        return fetch(url)
          .then(function (response) {
            return response.text();
          })
          .then(function (raw) {
            return (new window.DOMParser()).parseFromString(raw, 'image/svg+xml');
          });
      };


      ([
        './logo-gen/s.svg',
        './logo-gen/u.svg',
        './logo-gen/p-fill.svg',
        './logo-gen/e.svg',
        './logo-gen/r-fill.svg',
        './logo-gen/m.svg',
        './logo-gen/a-fill.svg',
        './logo-gen/r-fill.svg',
        './logo-gen/k.svg',
        './logo-gen/e.svg',
        './logo-gen/t.svg',
      ]).forEach(function (path, i) {
        loadSvg(path).then(function (root) {
          console.log(root)
          let color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);

          let vertexSets = select(root, 'path')
            .map(function (path) {
              return Vertices.scale(Svg.pathToVertices(path, 5), 2, 2);
            });

          console.log(vertexSets)


          Composite.add(world, Bodies.fromVertices(150 + i * 30, 300, vertexSets, {
            render: {
              fillStyle: color,
              strokeStyle: color,
              lineWidth: 1
            }
          }, true))


        });
      });


      // let stack = Composites.stack(200, 250, 10, 5, 0, 0, function (x, y) {
      //   return Bodies.rectangle(x, y, 30, 30);
      // });
      // Composite.add(world, stack);

    } else {
      Common.warn('Fetch is not available. Could not load SVG.');
    }
    
    // Add walls
    // let washingMachine = Composite.create([{label: 'washingMachine'}])
    let washingMachine = Composite.add(world, [
      // walls
      Bodies.rectangle(300, 100, 400, 10, {isStatic: true}),
      Bodies.rectangle(300, 500, 400, 10, {isStatic: true}),
      Bodies.rectangle(500, 300, 10, 400, {isStatic: true}),
      Bodies.rectangle(100, 300, 10, 400, {isStatic: true})
    ]);

    let center = Matter.Vector.create(300, 300)

    // Set some base variables for the rotation animation
    let counter = 0;
    let whereItIs = 0;
    let interval = 6; // Seconds for the interval. The animation will use half of this and then we will pause for half

    // Our easing function for the washing machine animation
    let bowEasing = (x, timeFraction) => {
      return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
    }

    // Our animation loop
    Events.on(runner, 'afterTick', function (event) {
      // Increase counter every time. The counter serves as a millisecond
      // (though I am not sure it actually equals that exactly, I suspect not)
      counter += 1;

      // Find out where the rotation needs be from 0 to 90deg
      let whereItShouldBe = Math.PI / 2 * Math.min(1, bowEasing(1.5, counter / 60 / (interval / 2)));
      // The increment we need to use to rotate the composite is where it should be minus where it is.
      // Find that and use it on the washing machine composite.
      let increment = whereItShouldBe - whereItIs;
      Composite.rotate(washingMachine, increment, center);
      // Update where the washing machine is for the next loop
      whereItIs = whereItShouldBe

      // Reset the counter at the end of each interval
      if (counter >= 60 * interval) {
        counter = 0;
      }

    });

  }, []);

  return (
    <>
      <Seo title="Logo generator" />
      <CanvasHolder ref={holderRef}>
        <canvas ref={canvasRef} />
      </CanvasHolder>
    </>
  )
};

export default DataVis
;
