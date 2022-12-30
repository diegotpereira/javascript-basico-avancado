import java.util.Arrays;
import java.util.LinkedHashSet;

public class Solucao {
    
    public static int minimo_indice(int[] seq) {

        if(seq.length == 0) {

            throw new IllegalArgumentException("Não é possível obter o índice de valor mínimo de uma sequência vazia");
        }

        int min_idx = 0;

        for(int indice = 1; indice < seq.length; indice += 1) {

            if(seq[indice] < seq[min_idx]) {

                min_idx = indice;
            }
        }

        return min_idx;
    }

    public static class MatrizVaziaDadosTeste {

        public static int[] obter_array() {

            int[] arr = {};

            return arr;
        }
    }

    public static class ValoresExclusivosDadosTeste {

        static int[] seq = {1, 2, 3, 4, 5};

        public static int[] obter_array() {

            return seq;
        }

        public static int obter_resultado_esperado() {

            return 0;
        }
    }

    public static class DadosTesteExatamenteDoisMinimosDiferentes {

        static int[] seq = {1, 1, 2};

        public static int[] obter_array() {

            return seq;
        }

        public static int obter_resultado_esperado() {

            return 0;
        }

    }
    public static void main(String[] args) {
        
        TesteMatrizVazia();
        TesteValoresExclusivos();

        System.out.println("OK");
    }

    public static void TesteMatrizVazia() {

        try {
            int[] seq = MatrizVaziaDadosTeste.obter_array();
            int resultado = minimo_indice(seq);

            System.out.println(resultado);

        } catch (Exception e) {
            
            return;
        }
        throw new AssertionError("A exceção não foi lançada como esperado");
        
    }

    public static void TesteValoresExclusivos() {

        int[] seq = ValoresExclusivosDadosTeste.obter_array();

        if (seq.length < 2) {
            
            throw new AssertionError("menos de 2 elementos no array");
        }

        Integer[] temp = new Integer[seq.length];

        for(int indice = 0; indice < seq.length; ++indice) {

            temp[indice] = Integer.valueOf(seq[indice]);
        }

        if (!((new LinkedHashSet<Integer>(Arrays.asList(temp)).size() == seq.length))) {
            
            throw new AssertionError("nem todos os valores são únicos");
        }

        int resultado_esperado = ValoresExclusivosDadosTeste.obter_resultado_esperado();
        int resultado = minimo_indice(seq);

        if(resultado != resultado_esperado) {

            throw new AssertionError("resultado é diferente do resultado esperado");
        }
    }
}
