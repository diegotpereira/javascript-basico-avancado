import static org.junit.Assert.assertEquals;

import java.util.*;

import org.junit.Test;

public class TesteResultado {
    
    @Test
    public void TesteIntro() {

        List<Integer> arr = Arrays.asList(1, 3, 5, 7, 9);
        int V = 5;
        int experado = 2;
        int resultado = Resultado.introTutorial(V, arr);

        assertEquals(experado, resultado);
    }
}
