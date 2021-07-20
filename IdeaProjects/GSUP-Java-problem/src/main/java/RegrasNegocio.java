
public class RegrasNegocio {

    public static void main(String[] args) {
        int n = 7;//Total Pessoas
        int k = 2;// Inteiro positiv
        int m = 3;// Contagem 
        Cassino cassino = new Cassino();
        // Laço para dados (carrega)
        for (int i = 0; i < n; i++) {
            cassino.add(new Pessoa(i + 1));
        }

        int passo1 = 0;
        int passo2 = 0;
        Pessoa primeira = cassino.getFirst();
        Pessoa ultima = cassino.getLast();

        int count = 0;

        // Verificar simultâneo
        while (cassino.size != 0) {// Falta uma pessoa para terminar
            passo1++;
            passo2++;
            if (passo1 == k && passo2 == m && primeira.num == ultima.num) {// Cessa na contagem
                passo1 = 1;
                passo2 = 1;
                primeira.next.pre = ultima.pre;
                ultima.pre.next = primeira.next;
                cassino.size--;
                System.out.println(primeira.num + " Está fora ao mesmo tempo!");
                primeira = primeira.next;
                ultima = ultima.pre;
            }

            if (passo1 == k && passo2 == m && primeira.next.num == ultima.num) {// Ao mesmo tempo excluído as duas pessoas
                passo1 = 1;
                passo2 = 1;
                primeira.pre.next = ultima.next;
                ultima.next.pre = primeira.pre;
                cassino.size = cassino.size - 2;
                System.out.println(primeira.num + " Divisível " + k + " Fora em tempo simultâneo " + ultima.num + " Divisível " + m + " Fora");
                primeira = primeira.next.next;
                ultima = ultima.pre.pre;
            } else {
                if (passo1 == k) {
                    passo1 = 1;
                    primeira.next.pre = primeira.pre;
                    primeira.pre.next = primeira.next;
                    cassino.size--;
                    System.out.println(primeira.num + " Divisível " + k + " Fora");
                    primeira = primeira.next;
                }

                if (passo2 == m) {
                    passo2 = 1;
                    ultima.next.pre = primeira.pre;
                    ultima.pre.next = primeira.next;
                    cassino.size--;
                    System.out.println(ultima.num + "Divisível " + m + " Fora");
                    ultima = ultima.pre;
                }
            }
            primeira = primeira.next;
            ultima = ultima.pre;
        }
    }
}

