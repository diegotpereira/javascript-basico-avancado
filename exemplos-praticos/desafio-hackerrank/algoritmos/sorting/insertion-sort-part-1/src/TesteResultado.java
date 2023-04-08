import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;

public class TesteResultado {

    @Test
    public void testInsertionSort1() {
        // Teste com array desordenado
        // List<Integer> arr1 = Arrays.asList(3, 1, 4, 2, 5);
        // Resultado.insertionSort1(arr1.size(), arr1);
        // List<Integer> expectedArr1 = Arrays.asList(1, 2, 3, 4, 5);
        // assertEquals(expectedArr1, arr1);

        // Teste com array já ordenado
        List<Integer> arr2 = Arrays.asList(1, 2, 3, 4, 5);
        Resultado.insertionSort1(arr2.size(), arr2);
        List<Integer> expectedArr2 = Arrays.asList(1, 2, 3, 4, 5);
        assertEquals(expectedArr2, arr2);

        // Teste com array de tamanho 1
        List<Integer> arr3 = Arrays.asList(1);
        Resultado.insertionSort1(arr3.size(), arr3);
        List<Integer> expectedArr3 = Arrays.asList(1);
        assertEquals(expectedArr3, arr3);
    }
}

