//Classe Musica
class Musica {
    //Atributos
    titulo: string;
    artista: string;
    duracao: number;

    //Método Construtor
    constructor(titulo: string, artista: string, duracao: number) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao;
    }

}


//Classe Usuario
class Usuario {
    //Atributos
    nome:string;
    biblioteca:BibliotecaMusical;

    //Método Construtor
    constructor( nome: string,  biblioteca: BibliotecaMusical) {
        this.nome = nome;
        this.biblioteca = biblioteca;
    }
  
    //Método que recebe uma música e adiciona na Biblioteca
    adicionarMusicaNaBiblioteca(musica: Musica) {
      this.biblioteca.adicionarMusica(musica);
    }
      
    //Método que lista as m´usicas da Biblioteca
    listarMusicasNaBiblioteca() {
      return this.biblioteca.listarMusicas();
    }
    //Reproduz uma música pelo indice
    reproduzirMusicaNaBiblioteca(indice: number) {
      this.biblioteca.reproduzirMusica(indice);
    }
}
 
//Classe BibliotecaMusical
class BibliotecaMusical {
    //Declara um array do tipo Musica
    private musicas: Musica[] = [];
    
    //Adiciona uma música na última posição de musicas
    adicionarMusica(musica: Musica) {
      this.musicas.push(musica);
    }
    //Mostra todos os elementos (musicas) do array musicas
    listarMusicas() {
      return this.musicas;
    }
  
    //Verifica se o indice da musica está dentro dos limites do tamanho do array e reproduz a musica do indice indicado
    reproduzirMusica(indice: number) {
      if (indice >= 0 && indice < this.musicas.length) {
        const musica = this.musicas[indice];
        console.log(`Reproduzindo "${musica.titulo}" por ${musica.artista}`);
      } else {
        console.log("O índice da música incorreto."); //Mensagem de erro caso o indice não exista no array.
      }
    }
    
    //Calcula o tempo total de duração ded todas as músicas do array musicas
    calcularDuracaoTotal() {
      const duracaoTotal = this.musicas.reduce((total, musica) => total + musica.duracao, 0);
      return duracaoTotal;
    }
}
  
//Função Principal 
function main (){

//Criar músicas
const musica1 = new Musica("Runaway", "Aurora", 253);
const musica2 = new Musica("Hoje Cedo", "Emicida", 298);

//Criar biblioteca musical
const biblioteca = new BibliotecaMusical();

//Adiciona as músicas à biblioteca
biblioteca.adicionarMusica(musica1);
biblioteca.adicionarMusica(musica2);

//Criar usuário com a biblioteca musical
const usuario = new Usuario("Joy", biblioteca);

//Adicionar mais músicas à biblioteca do usuário
const musica3 = new Musica("Patinho Colorido", "Artista 3", 144);
usuario.adicionarMusicaNaBiblioteca(musica3);

//Listar músicas na biblioteca do usuário
const musicasDoUsuario = usuario.listarMusicasNaBiblioteca();
console.log("Músicas na biblioteca do usuário:", musicasDoUsuario);

//Reproduzir uma música da biblioteca do usuário
usuario.reproduzirMusicaNaBiblioteca(0);

//Calcular a duração total das músicas na biblioteca
const duracaoTotal = biblioteca.calcularDuracaoTotal();
console.log("Duração total das músicas na biblioteca:", duracaoTotal, "segundos");

}

main() 


