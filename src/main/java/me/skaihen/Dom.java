package me.skaihen;

import java.util.HashMap;
import java.util.LinkedList;

public class Dom {
    private class AttrMap {
        HashMap<String, String> data;
    }

    private enum NodeType {
        TEXT, ELEMENT
    }

    private static class ElementData {
        String tag_name;
        AttrMap attributes;

    }

    public static class Node {
        LinkedList<Node> children;
        NodeType node_type;

    }

    public Node text(String data) {
        return new Node();
    }
}
