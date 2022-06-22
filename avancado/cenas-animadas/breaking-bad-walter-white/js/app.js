var camera, cena, renderizador
var mundo, walter

var container = {
    width: 0,
    height: 0
}

function init() {
    container.width = window.innerWidth
    container.height = window.innerHeight

    camera = new THREE.PerspectiveCamera(65, container.width / container.height, 1, 2000)
    camera.position.z = 2000
    camera.position.y = 400 
    camera.lookAt(new THREE.Vector3(0, 0, 0))
    
    
    cena = new THREE.Scene()

    renderizador = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true 
    })
    renderizador.setSize(window.innerWidth, window.innerHeight)
    renderizador.shadowMapEnabled = true 

    mundo = document.getElementById('breakingbad')
    mundo.appendChild(renderizador.domElement)

    window.addEventListener('load', function() {
        // document.addEventListener('mousemove', mousemove, false)
        // window.addEventListener('resize', onWindowResize, false)
        // document.addEventListener('mouseup', mouseup, false)
        // documment.addEventListener('mousedown', mousedown, false)
        // document.addEventListener('touchend', touchend, false)
        // document.addEventListener('touchmove', touchmove, false)
    })
}

function mousemove() {}

function criarWalter() {
    walter = new Walter();
    cena.add(walter.threegroup)
}
function Walter() {
    this.threegroup = new THREE.Group()

    this.informalSmokingMat = "#ffc107"
    this.informalLegsMMat = "#755b0b"
    this.informalZipperMat = "#755b0b"

    this.hatMat = new THREE.MeshLambertMaterial({
        color: "#333",
        shading: THREE.FlatShading,
    })

    // cabeça
    var head = new THREE.BoxGeometry(300, 350, 280)
    this.head = new THREE.Mesh(head, this.skinMat)
    this.head.position.x = 0
    this.head.position.y = 160
    this.head.position.z = 400

    // chapeu
    var hatTop = new THREE.BoxGeometry(320, 120, 290)
    this.hatTop = new THREE.Mesh(hatTop, this.hatMat)
    this.hatTop.position.x = 0
    // this.hasTop.position.z = 0
    // this.hasTop.position.y = 180

    // grupo de elementos
    this.head.add(this.hatTop)

    this.threegroup.add(this.head)
}

function loop() {
    renderizador.render(cena, camera)
    // walter.update()
    requestAnimationFrame(loop)
}
init()
criarWalter()
loop()