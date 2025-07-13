export function slugify(text: string): string {
  return text
    .normalize('NFKD') // separa acentos de letras (ex: á -> a + ´)
    .toLocaleLowerCase() //todo minuscul
    .replace(/[\u0300-\u036f]/g, '') //remove acentos (marcadores unicode)
    .replace(/[^a-z0-9]+/g, ' ') // troca tudo que nao for letra ou numero por espaço
    .trim() //remote espaços no fim e no começo
    .replace(/\s+/g, '-'); //espaço -> hifen;
}
