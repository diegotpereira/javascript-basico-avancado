import java.util.Scanner;

class Printer <T> {
    
    public <T> void printArray(T[] array) {

        for(T element : array) {

            System.out.println(element);
        }
    }
}
public class App {
    public static void main(String[] args) throws Exception {

        Scanner teclado = new Scanner(System.in);

        int n = teclado.nextInt();

        Integer[] intArray = new Integer[n];

        for(int index = 0; index < n; index += 1) {

            intArray[index] = teclado.nextInt();
        }

        n = teclado.nextInt();
        String[] stringArray = new String[n];

        for(int index = 0; index < n; index += 1) {

            stringArray[index] = teclado.next();
        }

        Printer<Integer> iPrinter = new Printer<Integer>();
        Printer<String> sPrinter = new Printer<String>();

        iPrinter.printArray(intArray);
        sPrinter.printArray(stringArray);

        if(Printer.class.getDeclaredMethods().length > 1) {

            System.out.println("The Printer class should only have 1 method named printArray.");
        }
        teclado.close();
    }
}
