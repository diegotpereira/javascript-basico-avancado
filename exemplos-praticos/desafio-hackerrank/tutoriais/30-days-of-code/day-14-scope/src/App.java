import java.util.*;

class Diferenca {

    //  matriz inteira privada () para armazenarinteiros não negativos
    private int[]elementos;
    // inteiro público () para armazenar a diferença absoluta máxima.
    public int maximaDiferenca;

    // Um construtor de classe que recebe um array de inteiros como 
    // parâmetro e o salva na variável elementos de instância.
    public Diferenca(int[]nums) {

        elementos = nums;
    }

    // Um método computardiferenca que encontra a diferença máxima absoluta entre 
    // qualquer 2 números em elementos e armazena no maximaDiferenca na variável de instância
    public void computardiferenca() {

        Arrays.sort(elementos);
        // A diferença absoluta entre dois inteiros a e b,e, é escrito como [a - b].
        maximaDiferenca = elementos[elementos.length - 1] - elementos[0];
    }
}

public class App {
    public static void main(String[] args) throws Exception {

        Scanner teclado = new Scanner(System.in);
        int n = teclado.nextInt();
        int[] a = new int[n];

        for(int i = 0; i < n; i++) {

            a[i] = teclado.nextInt();
        }

        teclado.close();

        Diferenca diferenca = new Diferenca(a);
        diferenca.computardiferenca();

        System.out.println(diferenca.maximaDiferenca);
    }
}
