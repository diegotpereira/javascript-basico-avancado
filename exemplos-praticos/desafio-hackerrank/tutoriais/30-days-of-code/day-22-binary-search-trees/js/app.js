let stringEntrada = ['7, 3, 5, 2, 1, 4, 6, 7'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    var tree = new BinarySearchTree();
    var root = null;
    var values = lerEntrada().replace(/\s+$/g, '').split(' ').map(mtxTemp => parseInt(mtxTemp, 10));
    // const t = parseInt(lerEntrada().trim(), 10);

    for(let index = 1; index < values.length; index += 1) {

        root = tree.insert(root, values[index]);
    }

    console.log(tree.getHeight(root));
}

principal();

function Node(data) {

    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {

    this.insert = function(root, data) {

        if(root === null) {

            this.root = new Node(data);

            return this.root;
        }

        if(data <= root.data) {

            if(root.left) {

                this.insert(root.left, data);

            } else {

                root.left = new Node(data);
            }

        } else {

            if(root.right) {

                this.insert(root.right, data);

            } else {

                root.right = new Node(data);
            }
        }
        return this.root;
    }
    this.getHeight = function(root) {

        if(root === null) return - 1;

        return Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;
    };
};