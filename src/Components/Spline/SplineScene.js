import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d-scene');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/eUSHzpuUCcOZ2lLF/scene.splinecode');
  }, []);

  return (
    <div style={{ width: '600px', height: '500px' }}>
      <canvas id="canvas3d-scene" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default SplineScene;
