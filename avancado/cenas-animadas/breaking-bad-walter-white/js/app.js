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

    this.formalSmokingMat = '#333'
    this.formalLegsMMat = '#222'
    this.formalSapatoMat = '#585858'

    this.hatMat = new THREE.MeshLambertMaterial({
        color: "#333",
        shading: THREE.FlatShading,
    })
    this.smokingMat = new THREE.MeshLambertMaterial({
        color: this.formalSmokingMat,
        shading: THREE.FlatShading
    })
    this.legsMMAt = new THREE.MeshLambertMaterial({
        color: this.formalLegsMMat,
        shading: THREE.FlatShading
    })
    this.sapatosMat = new THREE.MeshLambertMaterial({
        color: this.formalSapatoMat,
        shading: THREE.FlatShading
    })
    this.oculosMat = new THREE.MeshLambertMaterial({
        color: 'white',
        shading: THREE.FlatShading
    })
    this.pupilaMat = new THREE.MeshLambertMaterial({
        color: '#333',
        shading: THREE.FlatShading
    })

    // cabeça
    var cabeca = new THREE.BoxGeometry(300, 350, 280)
    this.cabeca = new THREE.Mesh(cabeca, this.skinMat)
    this.cabeca.position.x = 0
    this.cabeca.position.y = 160
    this.cabeca.position.z = 400

    // óculos
    var oculos = new THREE.BoxGeometry(120, 78, 10)

    // Retinas Esquerdas
    this.oculosEsquerdo = new THREE.Mesh(oculos, this.oculosMat)
    this.oculosEsquerdo.position.x = -80
    this.oculosEsquerdo.position.y = 4
    this.oculosEsquerdo.position.z = 160 

    // Retinas Direitas
    this.oculosDireito = new THREE.Mesh(oculos, this.oculosMat)
    this.oculosDireito.position.x = 80
    this.oculosDireito.position.y = 4
    this.oculosDireito.position.z = 160

    // retinas meio
    var retinaMeio = new THREE.BoxGeometry(40, 10, 10)

    this.retinaMeio = new THREE.Mesh(retinaMeio, this.pupilaMat)
    this.retinaMeio.position.x = 0
    this.retinaMeio.position.y = 5
    this.retinaMeio.position.z = 155

    // Retinas 
    var retina = new THREE.BoxGeometry(25, 25, 5)

    // retina esquerda
    this.retinaEsquerda = new THREE.Mesh(retina, this.pupilaMat)
    this.retinaEsquerda.position.x = -80
    this.retinaEsquerda.position.y = 5
    this.retinaEsquerda.position.z = 168

    // retina direita
    this.retinaDireita = new THREE.Mesh(retina, this.pupilaMat)
    this.retinaDireita.position.x = 80
    this.retinaDireita.position.y = 5
    this.retinaDireita.position.z = 168

    // chapeu
    var chapeu = new THREE.BoxGeometry(320, 120, 290)
    this.chapeu = new THREE.Mesh(chapeu, this.hatMat)
    this.chapeu.position.x = 0
    this.chapeu.position.z = 0
    this.chapeu.position.y = 180

    // corpo
    var corpo = new THREE.BoxGeometry(300, 250, 600)
    this.corpo = new THREE.Mesh(corpo, this.smokingMat)
    this.corpo.position.x = 0
    this.corpo.position.y = -220
    this.corpo.position.z = 100

    // braços
    var braco = new THREE.BoxGeometry(50, 250, 100)
    
    // braço esquerdo 
    this.bracoEsquerdo = new THREE.Mesh(braco, this.smokingMat)
    this.bracoEsquerdo.position.x = -170
    this.bracoEsquerdo.position.y = 0
    this.bracoEsquerdo.position.z = 200

    // braço direito
    this.bracoDireito = new THREE.Mesh(braco, this.smokingMat)
    this.bracoDireito.position.x = 170
    this.bracoDireito.position.y = 0
    this.bracoDireito.position.z = 200

    // mãos
    var mao = new THREE.BoxGeometry(50, 50, 50)

    this.maoEsquerda = new THREE.Mesh(mao, this.skinMat)
    this.maoEsquerda.position.x = -170
    this.maoEsquerda.position.y = -150
    this.maoEsquerda.position.z = 220

    this.maoDireita = new THREE.Mesh(mao, this.skinMat)
    this.maoDireita.position.x = 170 
    this.maoDireita.position.y = -150
    this.maoDireita.position.z = 220

    // pernas
    var pernas = new THREE.BoxGeometry(10, 130, 5)
    this.pernas = new THREE.Mesh(pernas, this.smokingMat)
    this.pernas.position = 0
    this.pernas.position = -200
    this.pernas.position = 100

    // coxa
    var coxas = new THREE.BoxGeometry(10, 130, 5)
    this.coxas = new THREE.Mesh(coxas, this.legsMMAt)
    this.coxas.position.x = 0
    this.coxas.position.y = -280
    this.coxas.position.z = 248

    // sapatos
    var sapatos = new THREE.BoxGeometry(200, 50, 400)
    this.sapatos = new THREE.Mesh(sapatos, this.sapatosMat)
    this.sapatos.position.x = 0
    this.sapatos.position.y = -400
    this.sapatos.position.z = 100

    // grupo de elementos
    this.cabeca.add(this.chapeu)

    
    this.cabeca.add(this.oculosEsquerdo)
    this.cabeca.add(this.oculosDireito)

    this.cabeca.add(this.retinaMeio)
    this.cabeca.add(this.retinaEsquerda)
    this.cabeca.add(this.retinaDireita)

    this.corpo.add(this.bracoEsquerdo)
    this.corpo.add(this.bracoDireito)
    this.corpo.add(this.maoEsquerda)
    this.corpo.add(this.maoDireita)
    this.corpo.add(this.pernas)
    this.corpo.add(this.coxas)
    this.corpo.add(this.sapatos)

    this.threegroup.add(this.cabeca)
    this.threegroup.add(this.corpo)
}

function loop() {
    renderizador.render(cena, camera)
    // walter.update()
    requestAnimationFrame(loop)
}
init()
criarWalter()
loop()