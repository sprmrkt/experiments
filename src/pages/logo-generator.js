import React, {useEffect, useRef, useState} from 'react';
import Seo from "../components/molecules/Seo";
import styled from "styled-components";
import Matter from 'matter-js';
import {useWindowSize} from "react-use";

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
      Things = Matter.Composite,
      WashingMachine = Matter.Composite,
      Bodies = Matter.Bodies;

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
    let stack = Composites.stack(200, 250, 10, 5, 0, 0, function (x, y) {
      return Bodies.rectangle(x, y, 30, 30);
    });

    Things.add(world, stack);

    // Add walls
    WashingMachine.add(world, [
      // walls
      Bodies.rectangle(300, 100, 400, 10, {isStatic: true}),
      Bodies.rectangle(300, 500, 400, 10, {isStatic: true}),
      Bodies.rectangle(500, 300, 10, 400, {isStatic: true}),
      Bodies.rectangle(100, 300, 10, 400, {isStatic: true})
    ]);

    let center = Matter.Vector.create(300,300)

    Events.on(runner, 'afterTick', function(event) {
      // Body.setAngularVelocity(compound, 0.02);
      WashingMachine.rotate(world, 0.002, center);
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
