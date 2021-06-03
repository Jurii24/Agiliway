package testTask.agiliway;

public class Task0 {
    
    private static final int MAX_NAME_SIZE = 3;
    private static boolean comma = false;

    public static void main(String[] args) {
        for (String name: args) {
            if (name.length() >= MAX_NAME_SIZE) {
                if (comma){
                    System.out.print(",");
                }
                comma = true;
                System.out.print(name.substring(0, 1).toUpperCase()+name.substring(1).toLowerCase());
            }
        }
    }
}
