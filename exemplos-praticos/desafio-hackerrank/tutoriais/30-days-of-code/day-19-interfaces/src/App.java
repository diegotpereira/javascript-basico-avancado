import java.util.Scanner;

interface AdvancedArithmetic {

    int divisorSum(int n);
}

class Calculator implements AdvancedArithmetic {

    @Override
    public int divisorSum(int n) {
        int soma = 0;

        for(int i = 1; i <= n; i++) {

            if(n % i == 0) {

                soma += i;
            }
        }
        return soma;
    }

    
}


public class App {
    public static void main(String[] args) throws Exception {

        Scanner teclado = new Scanner(System.in);
        int n = teclado.nextInt();

        teclado.close();

        AdvancedArithmetic minhaCalculadora = new Calculator();
        int soma = minhaCalculadora.divisorSum(n);

        System.out.println("I implemented: " + minhaCalculadora.getClass().getInterfaces()[0].getName());

        System.out.println(soma);
    }
}
