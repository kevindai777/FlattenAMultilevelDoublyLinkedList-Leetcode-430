//Objective is, given a multi-level doubly linked list where levels are
//denoted as children of a node

class Node {
    constructor(val, prev = null, next = null, child = null) {
        this.val = val 
        this.prev = prev 
        this.next = next 
        this.child = child
    }
}


function flatten(head) {
    if (!head) {
        return null
    }

    let child = flatten(head.child)
    let next = flatten(head.next)

    if (child) {
        head.next = child 
        child.prev = head 
        addToTail(child, next)
    } else if (next) {
        head.next = next 
        next.prev = head
    }
    head.child = null

    function addToTail(child, next) {
        if (!child || !next) {
            return
        }

        let curr = child 
        while (curr.next) {
            curr = curr.next
        }

        curr.next = next 
        next.prev = curr
    }

    return head
}