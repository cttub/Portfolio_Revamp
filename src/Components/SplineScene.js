import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const SplineScene = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/KVbRQaSYhum5huCz/scene.splinecode');
  }, []);

  return (
    <div style={{ width: '600px', height: '500px' }}>
      <canvas id="canvas3d" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default SplineScene;
