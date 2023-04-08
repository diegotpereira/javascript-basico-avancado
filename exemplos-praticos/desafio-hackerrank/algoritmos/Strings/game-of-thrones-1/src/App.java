import java.io.*;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class App {
    public static void main(String[] args) throws Exception {
        
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        String s = bufferedReader.readLine();

        String result = Resultado.gameOfThrones(s);

        bufferedWriter.write(result);
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

class Resultado {

    public static String gameOfThrones(String s) {

        // Verifica se a string está vazia e retorna "YES" se for o caso.
        if (s.isEmpty()) {
            return "YES";
        }

        // Converte a string em um stream de caracteres (IntStream).
        // Em seguida, mapeia cada código Unicode em um char e agrupa os caracteres por contagem usando Collectors.groupingBy() e Collectors.counting().
        // O resultado é um mapa onde cada caractere é associado a um valor que representa quantas vezes ele aparece na string.
        Map<Character, Long> charCounts = s.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        // Usa Stream.filter() para selecionar apenas os valores ímpares (ou seja, aqueles com uma contagem que não é divisível por 2).
        // Usa Stream.count() para contar quantos valores ímpares existem.
        long oddCounts = charCounts.values().stream().filter(count -> count % 2 != 0).count();

        // Retorna "YES" se o número de valores ímpares for igual a 0 ou 1, ou "NO" se for maior que 1.
        return oddCounts <= 1 ? "YES" : "NO";
    }
    

    // public static String gameOfThrones(String s) {

    //     // Verifica se a string está vazia
    //     if(s.length() == 0) return "YES";

    //     // Cria um vetor de inteiros de tamanho 26 (correspondente ao alfabeto em inglês)
    //     int[] arr = new int[26];

    //     // Loop pela string
    //     for (int i = 0; i < s.length(); i++) {
            
    //         // Obtém o caractere atual
    //         char c = s.charAt(i);

    //         // Incrementa o valor do elemento correspondente no vetor "arr"
    //         arr[c - 'a']++;

    //     }

    //     // Define uma flag para indicar se já foi encontrado um valor ímpar
    //     boolean visto = false;

    //     // Loop pelos elementos do vetor "arr"
    //     for(int val : arr) {

    //         // Verifica se o valor é ímpar
    //         if(val % 2 != 0) {

    //             // Se já tiver sido encontrado um valor ímpar anteriormente, retorna "NO"
    //             if(visto) return "NO";

    //             // Define a flag como true, indicando que um valor ímpar foi encontrado
    //             visto = true;
    //         }
    //     }

    //     // Se chegou até aqui, todos os valores são pares ou existe apenas um valor ímpar, então retorna "YES"
    //     return "YES";
    // }

    // public static String gameOfThrones(String s) {

    //     // Cria um vetor de inteiros de tamanho 26 (hash) que será usado para contar a frequência de cada letra da string.
    //     int[] hash = new int[26];

    //     // Percorre a string caracter por caracter (usando um loop "for-each") e atualiza a contagem de cada letra no vetor hash.
    //     for(char ch : s.toCharArray()) hash[ch - 'a']++;

    //     // Inicializa uma variável "impar" com o valor zero, que será usada para contar o número de letras com frequência ímpar.
    //     int impar = 0;


    //     // Percorre o vetor hash verificando se a frequência de cada letra é ímpar.
    //     for(int i = 0; i < 26; i++)

    //         // verifica se o valor do elemento no índice "i" do vetor "hash" é ímpar.
    //         if(hash[i] % 2 != 0) 

    //             // Se a frequência for ímpar e já houver uma letra com frequência ímpar, retorna "NO". 
    //             if(impar > 0) return "NO";

    //             // Caso contrário, atualiza a variável "impar".
    //             else impar++;


    //     // Retorna "YES" se for possível rearranjar as letras da string de modo que ela forme um palíndromo e "NO" caso contrário.
    //     return "YES";
    // }
}