import java.io.*;
import java.util.List;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        Resultado.insertionSort1(n, arr);

        bufferedReader.close();
    }
}


class Resultado {

    public static void insertionSort1(int n, List<Integer> arr) {

        int cur = arr.get(n - 1);

      int i = n - 1;

     while (i >= 0) {
         int next = (i != 0) ? arr.get(i - 1) : cur;
         if (cur < next) {
             arr.set(i, next);
             System.out.println(arr.toString().replaceAll("[\\[\\],]", ""));
             i--;
         } else {
             arr.set(i, cur);
             break;
         }
     }
     System.out.println(arr.toString().replaceAll("[\\[\\],]", ""));
}

    // public static void insertionSort1(int n, List<Integer> arr) {

    //     // Armazena o último elemento do array como o elemento atual
    //     int atual = arr.get(n - 1);

    //     // Inicia o índice i como o índice do último elemento do array
    //     int i = n - 1;

    //     // Percorre o array a partir do último elemento até o início
    //     while (i >= 0) {
            
    //         // Obtém o próximo elemento a ser comparado, que pode ser o elemento anterior a i ou o próprio elemento atual
    //         int proximo = (i != 0) ? arr.get(i - 1) : atual;

    //         // Se o elemento atual for menor que o próximo elemento
    //         if (atual < proximo) {
                
    //             // Move o próximo elemento para a direita e atualiza o índice i
    //             arr.set(i, proximo);

    //             System.out.println(arr.toString().replaceAll("[\\[\\],]", ""));

    //             // continua a comparação do elemento atual com os elementos anteriores do array.
    //             i--;
                
    //         } else {

    //             // Caso contrário, insere o elemento atual na posição i e sai do loop
    //             arr.set(i, atual);
    //             break;
    //         }
    //     }

    //     System.out.println(arr.toString().replaceAll("[\\[\\],]", ""));

    // }
    
}