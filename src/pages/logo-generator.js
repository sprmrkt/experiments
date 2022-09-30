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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    margin: 10px 0;
  }
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
      Body = Matter.Body,
      Constraint = Matter.Constraint,
      Bodies = Matter.Bodies;

    // // provide concave decomposition support library
    Common.setDecomp(require('poly-decomp'));

    // create engine
    let engine = Engine.create({
        enableSleeping: true
      }),
      world = engine.world;

    // create renderer
    let render = Render.create({
      element: holderRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        // showAngleIndicator: true,
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
        {svg: './logo-gen/svg/s.svg', png: './logo-gen/png/s.png', offset:{x:0,y:0}},
        {svg: './logo-gen/svg/u.svg', png: './logo-gen/png/u.png', offset:{x:0,y:3}},
        {svg: './logo-gen/svg/p.svg', png: './logo-gen/png/p.png', offset:{x:-5,y:-9}},
        {svg: './logo-gen/svg/e.svg', png: './logo-gen/png/e.png', offset:{x:-3,y:0}},
        {svg: './logo-gen/svg/r.svg', png: './logo-gen/png/r.png', offset:{x:-2,y:-2}},
        {svg: './logo-gen/svg/m.svg', png: './logo-gen/png/m.png', offset:{x:0,y:0}},
        {svg: './logo-gen/svg/a.svg', png: './logo-gen/png/a.png', offset:{x:0,y:4}},
        {svg: './logo-gen/svg/r.svg', png: './logo-gen/png/r2.png', offset:{x:-2,y:-2}},
        {svg: './logo-gen/svg/k.svg', png: './logo-gen/png/k.png', offset:{x:-8,y:0}},
        {svg: './logo-gen/svg/e.svg', png: './logo-gen/png/e2.png', offset:{x:-3,y:0}},
        {svg: './logo-gen/svg/t.svg', png: './logo-gen/png/t.png', offset:{x:0,y:-11}},
      ]).forEach(function (letter, i) {
        loadSvg(letter.svg).then(function (root) {
          // let color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);

          let vertexSets = select(root, 'path')
            .map(function (path) {
              return Vertices.scale(Svg.pathToVertices(path, 3), 2, 2);
            });

          let x = i % 4 * 75 + 175
          let y = Math.floor(i / 4) * 75 + 175

          let body = Bodies.fromVertices(x, y, vertexSets, {
            render: {
              fillStyle: 'none',
              strokeStyle: 'none',
              lineWidth: 1,
              slop: 0,
              visible: false,
            },
          }, true)
          let spriteHolder = Bodies.rectangle(
            body.bounds.min.x,
            body.bounds.min.y,
            (body.bounds.max.x - body.bounds.min.x),
            (body.bounds.max.y - body.bounds.min.y),
            {
              collisionFilter: {
                mask: 0,
              },
              render: {
                fillStyle: 'none',
                strokeStyle: '#ffffff',
                sprite: {
                  texture: letter.png,
                  xOffset: 0,
                  yOffset: 0,
                }
              }
            }
          )
          let constraint = Constraint.create({
            bodyA: body,
            pointA: {x: 0, y: 10},
            bodyB: spriteHolder,
            pointB: {x: 0 + letter.offset.x, y: 10 + letter.offset.y},
            length: 0,
            render: {
              visible: false
            }
          });
          let constraint2 = Constraint.create({
            bodyA: body,
            pointA: {x: 0, y: -10},
            bodyB: spriteHolder,
            pointB: {x: 0 + letter.offset.x, y: -10 + letter.offset.y},
            length: 0,
            render: {
              visible: false
            }
          });

          let group = Composite.create({label: `group-${i}`});
          Composite.add(group, [body, spriteHolder, constraint, constraint2])
          Composite.add(world, group)


        });
      });

    } else {
      Common.warn('Fetch is not available. Could not load SVG.');
    }

    // Add walls
    // let washingMachine = Composite.create([{label: 'washingMachine'}])
    let washingMachine = Composite.create({label: 'Washing Machine'});
    Composite.add(washingMachine, [
      // walls
      Bodies.rectangle(300, 100, 400, 50, {isStatic: true, slop: 0, render: { visible: false }}),
      Bodies.rectangle(300, 500, 400, 50, {isStatic: true, slop: 0, render: { visible: false }}),
      Bodies.rectangle(500, 300, 50, 400, {isStatic: true, slop: 0, render: { visible: false }}),
      Bodies.rectangle(100, 300, 50, 400, {isStatic: true, slop: 0, render: { visible: false }})
    ]);
    Composite.add(world, washingMachine)

    // add mouse control
    let mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    Composite.add(world, mouseConstraint);


    // Set some base variables for the rotation animation
    let center = Matter.Vector.create(300, 300)
    let counter = 0;
    let whereItIs = 0;
    let interval = 8; // Seconds for the interval. The animation will use half of this and then we will pause for 3/4 of it

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
      let whereItShouldBe = Math.PI / 2 * Math.min(1, bowEasing(1.5, counter / 60 / (interval / 4)));
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
