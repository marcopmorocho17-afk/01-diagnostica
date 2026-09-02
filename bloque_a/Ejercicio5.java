public class Ejercicio5 {
    static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        double promedio = calcularPromedio(8.5, 9.0);
        System.out.println("Promedio: " + promedio);
        
        Estudiante est = new Estudiante("Juan", 101, 8.5);
        est.mostrarFicha();
    }
}

class Estudiante {
    String nombre;
    int id;
    double promedio;
    

    Estudiante(String nombre, int id, double promedio) {
        this.nombre = nombre;
        this.id = id;
        this.promedio = promedio;
    }
    
    void mostrarFicha() {
        System.out.println("Estudiante: " + nombre + ", ID: " + id + ", Promedio: " + promedio);
    }
}
