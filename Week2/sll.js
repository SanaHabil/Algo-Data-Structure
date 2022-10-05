//Add Front
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    addFront(val){
        let new_node = new Node(val);
        if(!this.head){
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront(){
        if(!this.head){
            return this;
        }
        let temp = this.head
        this.head = this.head.next 
        temp.next = null
        
        return this

    }
    front(){
        if(!this.head){
            return null;
        }
        return this.head.data;
    }
}



sll =new LinkedList;
sll.addFront(18);
sll.front();
console.log(sll.front())