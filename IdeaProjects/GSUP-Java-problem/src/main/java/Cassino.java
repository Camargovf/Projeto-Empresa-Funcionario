public class Cassino {
    Pessoa head;
    int size = 0;

    public Cassino() {
        this.head = new Pessoa(0);
    }

    Pessoa getFirst() {
        return head.next;
    }

    Pessoa getLast() {
        return head.next.pre;

    }

    void add(Pessoa pessoa) {
        if (size == 0) {
            head.next = pessoa;
            pessoa.pre = pessoa;
            pessoa.next = pessoa;
        } else {
            head.next.pre.next = pessoa;
            pessoa.pre = head.next.pre;
            pessoa.next = head.next;
            head.next.pre = pessoa;
        }
        size++;
    }


}
