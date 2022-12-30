let stringEntrada = ['6, 3, 5, 4, 7, 2, 1'];
let entradaAtual = 0;

function lerEntrada() {

    return stringEntrada[entradaAtual++];
}

function principal() {

    var tree = new BinarySearchTree();
    var root = null;

    var values = lerEntrada().replace(/\s+$/g, '').split(' ').map(mtxTemp => parseInt(mtxTemp, 10));

    for(let index = 1; index < values.length; index += 1) {

        root = tree.insert(root, values[index]);
    }

    tree.levelOrder(root);
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

            if (root.left) {
                
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
    this.levelOrder = function(root) {

        var queue = [root];
        
        while(queue.length > 0) {
            
            var node = queue.shift();
            
            write(node.data + " ");
            
            if(node.left) {
                
                queue.push(node.left);
            }
            
            if(node.right) {
                
                queue.push(node.right);
            }
        }

        function write(str) {
            
            console.log(str);
        }
    }
}