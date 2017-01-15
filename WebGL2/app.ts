window.onload = () => {

    const CANVAS: HTMLCanvasElement = document.getElementById("webglcanvas") as HTMLCanvasElement;
    const GL: WebGL2RenderingContext = CANVAS.getContext("webgl2") as any;

    if (!GL) {
        console.error("WebGL 2.0 context creation failed.");
        return;
    }

    

    console.log("WebGL 2.0 context successfully created.");
};