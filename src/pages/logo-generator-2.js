import React, {useEffect, useRef} from 'react';
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import Matter from 'matter-js';
import 'pathseg';
import s from '../../static/logo-gen/svg/s.svg';
import u from '../../static/logo-gen/svg/u.svg';
import p from '../../static/logo-gen/svg/p.svg';
import e from '../../static/logo-gen/svg/e.svg';
import r from '../../static/logo-gen/svg/r.svg';
import m from '../../static/logo-gen/svg/m.svg';
import a from '../../static/logo-gen/svg/a.svg';
import k from '../../static/logo-gen/svg/k.svg';
import t from '../../static/logo-gen/svg/t.svg';
import sImg from '../../static/logo-gen/png/s.png';
import uImg from '../../static/logo-gen/png/u.png';
import pImg from '../../static/logo-gen/png/p.png';
import eImg from '../../static/logo-gen/png/e.png';
import rImg from '../../static/logo-gen/png/r.png';
import mImg from '../../static/logo-gen/png/m.png';
import aImg from '../../static/logo-gen/png/a.png';
import r2Img from '../../static/logo-gen/png/r2.png';
import kImg from '../../static/logo-gen/png/k.png';
import e2Img from '../../static/logo-gen/png/e2.png';
import tImg from '../../static/logo-gen/png/t.png';

const CanvasHolder = styled.div`
  width: 100%;
  height: var(--windowHeight);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #111111;

  button {
    margin: 10px 0;
  }
`;

function LogoGen2() {

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
        width: 800,
        height: 800,
        wireframes: true,
        background: '#000000',
        // showAngleIndicator: true,
      }
    });

    Render.setPixelRatio(render, 'auto')

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

      let lettersToChain = Composite.create({label: `Letters to chain`});

      ([
        {svg: s, png: sImg, offset:{x:0,y:0}},
        {svg: u, png: uImg, offset:{x:0,y:3}},
        {svg: p, png: pImg, offset:{x:-5,y:-9}},
        {svg: e, png: eImg, offset:{x:-3,y:0}},
        {svg: r, png: rImg, offset:{x:-2,y:-2}},
        {svg: m, png: mImg, offset:{x:0,y:0}},
        {svg: a, png: aImg, offset:{x:0,y:4}},
        {svg: r, png: r2Img, offset:{x:-2,y:-2}},
        {svg: k, png: kImg, offset:{x:-8,y:0}},
        {svg: e, png: e2Img, offset:{x:-3,y:0}},
        {svg: t, png: tImg, offset:{x:0,y:-11}},
      ]).forEach(function (letter, i) {
        loadSvg(letter.svg).then(function (root) {

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
            pointB: {x: letter.offset.x, y: 10 + letter.offset.y},
            length: 0,
            render: {
              // visible: false
            }
          });
          let constraint2 = Constraint.create({
            bodyA: body,
            pointA: {x: 0, y: -10},
            bodyB: spriteHolder,
            pointB: {x: letter.offset.x, y: -10 + letter.offset.y},
            length: 0,
            render: {
              // visible: false
            }
          });

          let group = Composite.create({label: `group-${i}`});
          Composite.add(group, [body, spriteHolder, constraint, constraint2]);
          Composite.add(lettersToChain, group);

        });
      });

      let customChain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        let bodies = composite.composites;
        console.log(bodies)

        for (let i = 1; i < bodies.length; i++) {
          let bodyA = bodies[i - 1].bodies[0],
            bodyB = bodies[i].bodies[0],
            bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
            bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x,
            bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
            bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;

          let defaults = {
            bodyA: bodyA,
            pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
            bodyB: bodyB,
            pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
          };

          let constraint = Common.extend(defaults, options);

          Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';

        return composite;
      };

      console.log(lettersToChain)

      let chainedLetters = customChain(lettersToChain, 0, 0, 0, 0, { stiffness: 0.8, length: 20, render: { type: 'line' } });
      Composite.add(world, chainedLetters);

      let ropeA = Composites.stack(100, 50, 8, 1, 10, 10, function(x, y) {
        return Bodies.rectangle(x, y, 50, 20, );
      });
      console.log(ropeA)
      Composites.chain(ropeA, 0.5, 0, -0.5, 0, { stiffness: 0.8, length: 2, render: { type: 'line' } });
      Composite.add(world, ropeA);

    } else {
      Common.warn('Fetch is not available. Could not load SVG.');
    }




    // Add walls
    // let washingMachine = Composite.create([{label: 'washingMachine'}])
    let washingMachine = Composite.create({label: 'Washing Machine'});
    Composite.add(washingMachine, [
      // walls
      Bodies.rectangle(400, 0, 800, 20, {isStatic: true, slop: 0}),
      Bodies.rectangle(400, 800, 800, 20, {isStatic: true, slop: 0}),
      Bodies.rectangle(0, 400, 20, 800, {isStatic: true, slop: 0}),
      Bodies.rectangle(800, 400, 20, 800, {isStatic: true, slop: 0}),
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

export default LogoGen2
;
