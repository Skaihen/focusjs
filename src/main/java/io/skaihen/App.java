package io.skaihen;

import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.web.WebView;
import javafx.stage.Stage;

public class App extends Application {

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) {
        stage.setTitle("Focus");

        WebView webView = new WebView();

        webView.getEngine().load("http://google.com");

        Scene scene = new Scene(new StackPane(webView), 960, 600);

        stage.setScene(scene);
        stage.show();
    }

}