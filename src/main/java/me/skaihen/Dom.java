package me.skaihen;

import java.util.LinkedList;

public class Dom {
    private enum NodeType {
        TEXT, ELEMENT
    }

    public static class Node {
        LinkedList<Node> children;

    }
}
