const Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Body = Matter.Body;

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 300,
    wireframes: false
  }
});

const paredeSuperior = Bodies.rectangle(400, 10, 800, 20, {
    isStatic: true
})
const paredeEsquerda = Bodies.rectangle(10, 150, 20, 300, {
    isStatic: true
})
const paredeDireita = Bodies.rectangle(790, 150, 20, 300, {
    isStatic: true
})
const paredeInferior = Bodies.rectangle(400, 290, 800, 20, {
    isStatic: true
})

const bola = Bodies.circle(90, 280, 20, {
    render: {
        sprite: {
            texture: "https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png",
            xScale: 0.4,
            yScale: 0.4
        }
    }
})
World.add(engine.world, [paredeSuperior, paredeInferior, paredeEsquerda, paredeDireita, bola])

Engine.run(engine)
Render.run(render)

document.querySelector('#horizontal').addEventListener('click', function() {
    Body.applyForce( bola, { x: bola.position.x, y: bola.position.y}, {x: 0.04, y:0})
})
document.querySelector('#vertical').addEventListener('click', function() {
    Body.applyForce( bola, { x: bola.position.x, y: bola.position.y}, {x: 0, y: -0.04})
})
document.querySelector('#reduzir-atrito').addEventListener('click', function() {
    bola.friction = 0.05,
    bola.frictionAir = 0.0005,
    bola.restitution = 0.9
})
document.querySelector('#restaurar-friccao').addEventListener('click', function() {
    bola.friction = 0.1;
    bola.frictionAir = 0.001;
    bola.restitution = 0;
})

