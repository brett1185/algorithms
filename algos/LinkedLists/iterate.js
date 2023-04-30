class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    addFront(val){
        let new_node = new Node(val)
        if(!this.head){
            this.head = new_node
            return this
        }

        new_node.next = this.head
        this.head = new_node
        return this
    }

    removeFront(){
        if(this.head == null){
            return this.head
        }
        let removed_node = this.head
        this.head = removed_node.next
        removed_node.next = null
        return this.head
    }
    front(){
        if(this.head == null){
            return null
        }
        else{
            return this.head.data
        }
    }
    findSum(){
        let runner = this.head
        let sum = 0

        while(runner !== null){
            sum += runner.data
            runner = runner.next
        }
        return sum
    }
    contains(value){
        let runner = this.head
        while(runner){
            if(runner.data === value){
            return true
        }
            runner = runner.next
        
    }
        

        
            return false
        
    }

    length(){
        let runner = this.head
        let count = 0

        while (runner !== null){
            count += 1
            runner = runner.next
        }
        return count

    }
    
}


const newLL = new LinkedList()
newLL.addFront(10)
newLL.addFront(5)

console.log(newLL.front())
console.log(newLL.length())