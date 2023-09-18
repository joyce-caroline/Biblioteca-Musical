# Biblioteca Musical

Este é um projeto de uma Biblioteca Musical desenvolvida em TypeScript. A biblioteca inclui as classes `Musica`, `Usuario`, e `BibliotecaMusical`, que permitem criar e gerenciar músicas em uma biblioteca musical pessoal.

## Funcionalidades

- Adicionar músicas à biblioteca.
- Listar músicas na biblioteca.
- Reproduzir músicas da biblioteca.
- Calcular a duração total das músicas na biblioteca.

## Classe `Musica`

A classe `Musica` representa uma música com os seguintes atributos:
- `titulo` (string): o título da música.
- `artista` (string): o nome do artista da música.
- `duracao` (number): a duração da música em segundos.

## Classe `Usuario`

A classe `Usuario` representa um usuário da biblioteca musical com os seguintes atributos:
- `nome` (string): o nome do usuário.
- `biblioteca` (BibliotecaMusical): a biblioteca musical pessoal do usuário.

A classe `Usuario` possui os seguintes métodos:
- `adicionarMusicaNaBiblioteca(musica: Musica)`: adiciona uma música à biblioteca do usuário.
- `listarMusicasNaBiblioteca()`: lista as músicas na biblioteca do usuário.
- `reproduzirMusicaNaBiblioteca(indice: number)`: reproduz uma música da biblioteca com base em seu índice.
  
## Classe `BibliotecaMusical`

A classe `BibliotecaMusical` representa a biblioteca musical com as seguintes funcionalidades:
- `adicionarMusica(musica: Musica)`: adiciona uma música à biblioteca.
- `listarMusicas()`: lista todas as músicas na biblioteca.
- `reproduzirMusica(indice: number)`: reproduz uma música da biblioteca com base em seu índice.
- `calcularDuracaoTotal()`: calcula a duração total de todas as músicas na biblioteca.

## Exemplo de Uso

```typescript
// Criar músicas
const musica1 = new Musica("Runaway", "Aurora", 253);
const musica2 = new Musica("Hoje Cedo", "Emicida", 298);

// Criar biblioteca musical
const biblioteca = new BibliotecaMusical();

// Adicionar as músicas à biblioteca
biblioteca.adicionarMusica(musica1);
biblioteca.adicionarMusica(musica2);

// Criar usuário com a biblioteca musical
const usuario = new Usuario("Joy", biblioteca);

// Adicionar mais músicas à biblioteca do usuário
const musica3 = new Musica("Patinho Colorido", "Artista 3", 144);
usuario.adicionarMusicaNaBiblioteca(musica3);

// Listar músicas na biblioteca do usuário
const musicasDoUsuario = usuario.listarMusicasNaBiblioteca();
console.log("Músicas na biblioteca do usuário:", musicasDoUsuario);

// Reproduzir uma música da biblioteca do usuário
usuario.reproduzirMusicaNaBiblioteca(0);

// Calcular a duração total das músicas na biblioteca
const duracaoTotal = biblioteca.calcularDuracaoTotal();
console.log("Duração total das músicas na biblioteca:", duracaoTotal, "segundos");

