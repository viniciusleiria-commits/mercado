// Configuração do Firebase da lista de compras.
//
// Estes valores são públicos por natureza: todo app web do Firebase os carrega
// à vista de quem abrir a página. Quem tranca a lista é a senha da casa, que
// nunca é gravada, nunca sai do aparelho e não aparece aqui — ela vira um
// SHA-256 que é o nome do nó onde a lista mora.
//
// Deixando isto como null, a página funciona sozinha e guarda tudo só no
// aparelho de quem abriu: não pede senha e não compartilha nada.

window.MERCADO_FIREBASE = {
  apiKey: "AIzaSyDXkzJ47dZbW4aTnA8Wk6YAY2Bg26eO-Dg",
  authDomain: "mercado-a86d4.firebaseapp.com",
  databaseURL: "https://mercado-a86d4-default-rtdb.firebaseio.com",
  projectId: "mercado-a86d4",
  storageBucket: "mercado-a86d4.firebasestorage.app",
  messagingSenderId: "49897329263",
  appId: "1:49897329263:web:1b540fea28f42245d7f39a"
};
