//Java Solution

class Solution {
    public Node flatten(Node head) {
        if (head == null) {
            return head;
        } 
        
        Node child = flatten(head.child);
        Node next = flatten(head.next);
        
        if (child != null) {
            head.next = child;
            child.prev = head;
            addToTail(child, next);
        } else if (next != null) {
            head.next = next;
            next.prev = head;
        }
        head.child = null;
        
        return head;
    }
    
    public Node addToTail(Node child, Node next) {
        if (child == null || next == null) {
            return null;
        }
        
        Node curr = child;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = next;
        next.prev = curr;
        
        return curr;
    }
}