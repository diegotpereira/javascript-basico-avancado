import java.awt.*;
import java.awt.event.*;

public class App {
    public static void main(String[] args) throws Exception {

        Frame frame = new Frame("ActionListener depois no Java8");

        Button b = new Button("Clique Aqui");
        b.setBounds(50, 100, 80, 50);

        b.addActionListener(new ActionListener() {
    
            @Override
            public void actionPerformed(ActionEvent e) {
                // TODO Auto-generated method stub
                System.out.println("Olá meu Listener a moda antiga!");
            }
        });
        frame.add(b);

        frame.setSize(200, 200);
        frame.setLayout(null);
        frame.setVisible(true);
    }
}
