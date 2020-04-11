(async () => {
  let screenTransform;
  let ctx;
  const canvas = document.getElementById('canvas');

  const extendedContext = () => {
    const ctx = canvas.getContext('2d');
    ctx.transform(...screenTransform);
    ctx.circle = (x, y, r) => {
      ctx.beginPath();
      ctx.ellipse(x, y, r, r, 0, 0, 6.283);
      ctx.closePath();
    };
    return ctx;
  };

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    screenTransform = [.5 * window.innerWidth, 0, 0, .5 * window.innerHeight, .5 * window.innerWidth, .5 * window.innerHeight];
    ctx = extendedContext(canvas);
    render(canvas);
  };

  const render = () => {
    ctx.fillStyle = '#000';
    ctx.clearRect(-1, -1, 2, 2);
    ctx.strokeStyle = '#F00';
    ctx.lineWidth = .005;
    const now = Date.now() / 1000;
    const x = .8 * Math.sin(now);
    const y = .8 * Math.cos(now);
    ctx.circle(x, y, .1);
    ctx.stroke();
    window.requestAnimationFrame(() => render(canvas));
  };

  window.addEventListener('resize', () => resize(canvas));
  resize(canvas);
})();
