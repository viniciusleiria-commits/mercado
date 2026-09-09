# Mercado de Sexta

A lista de compras da casa, numa página só. Quem cuida da casa marca o que vai
acabando durante a semana; na sexta a compra já está montada em duas listas —
frutas e verduras para o Hiperideal, o resto para o mercado no iFood — e o
modo pedido passa item por item, copiando o nome para colar na busca do app.

Entra-se com uma senha compartilhada pela casa. Ela nunca é gravada e nunca sai
do aparelho: vira um SHA-256 que é o nome do nó onde a lista mora no Firebase.
As regras do banco deixam ler e escrever dentro de um nó desses, mas não deixam
listar a coleção — quem não sabe a senha não tem como descobrir que nós existem.

## Arquivos

- `index.html` — a página inteira (HTML, CSS e JS num arquivo só). É **gerada**,
  não editada à mão: a fonte é `mercado.html` no repositório do app, e o
  gerador é `site/gerar.py` de lá.
- `config.js` — a configuração do Firebase. Valores públicos por natureza; todo
  app web do Firebase os carrega à vista de quem abrir a página. Quem tranca a
  lista é a senha, que não está aqui.

## Publicação

GitHub Pages, a partir de `main` / `(root)`:
<https://viniciusleiria-commits.github.io/mercado/>
