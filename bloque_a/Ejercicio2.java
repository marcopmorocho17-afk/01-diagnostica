import java.util.Scanner;
java.util.Scanner;
public class Ejercicio2 {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int resta;
        int suma;
        int multiplicacion;
        int division;
        System.out.print("Introduce el primer número: ");
        int num1 = input.nextInt();
        System.out.print("Introduce el segundo número: ");
        int num2 = input.nextInt();
        suma = num1 + num2;
        resta = num1 - num2;
        multiplicacion = num1 * num2;
        division = num1 / num2;
        System.out.println("Suma: " + suma);
        System.out.println("Resta: " + resta);
        System.out.println("Multiplicación: " + multiplicacion);
        System.out.println("División: " + division);
    }
}
