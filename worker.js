let canvas = null;
let ctx = null;
onmessage = (e) => {
    canvas = e.data.canvas
    ctx = canvas.getContext('webgl');
    ctx.clearColor(0.0, 0.0, 0.0, 1.0);
    ctx.clear(ctx.COLOR_BUFFER_BIT|ctx.DEPTH_BUFFER_BIT);
    ctx.commit()
}
