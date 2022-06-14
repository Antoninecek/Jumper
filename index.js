// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: { wireframes: false }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 600, 80, 80, { label: 'k', render: { fillStyle: selectedBoxColor, inertia: Infinity, inverseInertia: 1 / Infinity } });
// var boxB = Bodies.rectangle(450, 50, 80, 80, { label: 'k', render: { fillStyle: defaultBoxColor } });
// var boxC = Bodies.rectangle(380, 50, 80, 80, { label: 'k', render: { fillStyle: defaultBoxColor } });
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, label: 'podlaha' });
var wallLeft = Bodies.rectangle(0, 400, 60, 810, { isStatic: true, label: 's' });
var wallRight = Bodies.rectangle(800, 400, 60, 810, { isStatic: true, label: 's' });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, ground, wallLeft, wallRight]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

(function run() {
    window.requestAnimationFrame(run);
    Engine.update(engine, 1000 / 60);
})();

