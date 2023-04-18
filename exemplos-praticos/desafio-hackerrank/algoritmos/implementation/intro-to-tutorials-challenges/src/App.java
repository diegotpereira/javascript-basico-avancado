import java.io.*;
import java.util.List;
import java.util.stream.Stream;
import static java.util.stream.Collectors.toList;

public class App {
    public static void main(String[] args) throws Exception {

        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(System.out));

        int V = Integer.parseInt(bufferedReader.readLine().trim());
        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> arr = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" ")).map(Integer::parseInt).collect(toList());

        int resultado = Resultado.introTutorial(V, arr);

        bufferedWriter.write(String.valueOf(resultado));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
        
    }
}

class Resultado {

    public static int introTutorial(int V, List<Integer> arr) {

        for (int i = 0; i < arr.size(); i++) {
            
            if (arr.get(i) == V) {
                
                return arr.indexOf(arr.get(i));
            }
        }
        return -1;
    }
}
