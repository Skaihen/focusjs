package me.skaihen;

import org.junit.jupiter.api.Test;

public class MainTest {

    @Test
    public void mainContextLoadsAndUnloads() {
        try (Main main = new Main()) {
            main.init();
        }
    }

}