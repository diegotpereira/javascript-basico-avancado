import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class ResultadoTeste {
    
    @Test
    public void testGameOfThrones() {

        String entrada1 = "aaabbbb";
        String experado1 = "YES";
        String atualSaida1 = Resultado.gameOfThrones(entrada1);

        assertEquals(experado1, atualSaida1);

        String entrada2 = "cdefghmnopqrstuvw";
        String experado2 = "NO";
        String atualSaida2 = Resultado.gameOfThrones(entrada2);

        assertEquals(experado2, atualSaida2);


        String entrada3 = "cdcdcdcdeeeef";
        String experado3 = "YES";
        String atualSaida3 = Resultado.gameOfThrones(entrada3);

        assertEquals(experado3, atualSaida3);
    }
}
