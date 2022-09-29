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

  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: 600,
        height: 600,
        background: 'rgba(255, 0, 0, 0.5)',
        wireframes: false
      }
    });

    const floor = Bodies.rectangle(300, 590, 600, 20, {
      isStatic: true,
      render: {
        fillStyle: 'blue'
      }
    });

    const ball = Bodies.circle(150, 0, 30, {
      restitution: 0.9,
      render: {
        fillStyle: 'yellow'
      }
    });

    World.add(engine.world, [floor, ball]);

    Engine.run(engine);
    Render.run(render);
  }, []);

  return (
    <>
      <Seo title="Logo generator" />
      <CanvasHolder ref={boxRef}>
        <canvas ref={canvasRef} />
      </CanvasHolder>
    </>
  )
};

export default DataVis
;
