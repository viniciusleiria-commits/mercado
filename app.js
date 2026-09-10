// Gerado por site/gerar.py a partir de mercado.html. Não editar aqui.
window.MERCADO_VERSAO = "10/09 14:24";
(function () {
  // Casca velha demais para este app: manda buscar uma nova, num
  // endereço que o cache não tem guardado. O #senha do link de convite
  // vai junto, senão a pessoa cairia no portão. Uma vez só: se voltar
  // velha (Pages ainda publicando), segue com a que tem.
  if ((window.MERCADO_CASCA || 0) < 2 && location.search.indexOf('recarga') < 0) {
    location.replace(location.pathname + '?recarga=' + Date.now() + location.hash);
    return;
  }
  var st = document.createElement('style');
  st.textContent = "\n  :root {\n    --verde: #2A5E5E;\n    --verde-fundo: rgba(42,94,94,.09);\n    --verde-fundo-fraco: rgba(42,94,94,.04);\n    --horti: #3F7D52;\n    --horti-fundo: rgba(63,125,82,.10);\n    --mercado: #B4691F;\n    --mercado-fundo: rgba(180,105,31,.10);\n    --chao: #F6F7F5;\n    --folha: #FFFFFF;\n    --folha-2: #FBFCFB;\n    --linha: #E3E7E3;\n    --linha-forte: #CFD6D1;\n    --tinta: #1C2320;\n    --tinta-fraca: #5D6B64;\n    --tinta-fraquinha: #8A968F;\n    --alerta: #9B6B12;\n    --alerta-fundo: rgba(155,107,18,.10);\n    /* o amarelo do \"Notas\": marca item escolhido, e s\u00f3 isso. O resto do app\n       segue no verde-petr\u00f3leo \u2014 amarelo em bot\u00e3o com texto branco n\u00e3o se l\u00ea. */\n    --marca: #D9A21F;\n    --marca-tinta: #FFFFFF;\n    --sombra: 0 1px 2px rgba(28,35,32,.05);\n    --raio: 12px;\n    --raio-p: 8px;\n    --fonte: \"Sora\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  }\n  @media (prefers-color-scheme: dark) {\n    :root:not([data-theme=\"light\"]) {\n      --verde: #7FBDB4;\n      --verde-fundo: rgba(127,189,180,.12);\n      --verde-fundo-fraco: rgba(127,189,180,.06);\n      --horti: #83C193;\n      --horti-fundo: rgba(131,193,147,.13);\n      --mercado: #E0A45E;\n      --mercado-fundo: rgba(224,164,94,.13);\n      --chao: #111614;\n      --folha: #1A211E;\n      --folha-2: #1E2622;\n      --linha: #2B3531;\n      --linha-forte: #3C4842;\n      --tinta: #E7EDE9;\n      --tinta-fraca: #9BA9A1;\n      --tinta-fraquinha: #74827A;\n      --alerta: #E4B75F;\n      --alerta-fundo: rgba(228,183,95,.13);\n      --marca: #E8BE55;\n      --marca-tinta: #10201E;\n      --sombra: 0 1px 2px rgba(0,0,0,.3);\n    }\n  }\n  :root[data-theme=\"dark\"] {\n    --verde: #7FBDB4;\n    --verde-fundo: rgba(127,189,180,.12);\n    --verde-fundo-fraco: rgba(127,189,180,.06);\n    --horti: #83C193;\n    --horti-fundo: rgba(131,193,147,.13);\n    --mercado: #E0A45E;\n    --mercado-fundo: rgba(224,164,94,.13);\n    --chao: #111614;\n    --folha: #1A211E;\n    --folha-2: #1E2622;\n    --linha: #2B3531;\n    --linha-forte: #3C4842;\n    --tinta: #E7EDE9;\n    --tinta-fraca: #9BA9A1;\n    --tinta-fraquinha: #74827A;\n    --alerta: #E4B75F;\n    --alerta-fundo: rgba(228,183,95,.13);\n    --marca: #E8BE55;\n    --marca-tinta: #10201E;\n    --sombra: 0 1px 2px rgba(0,0,0,.3);\n  }\n\n  * { box-sizing: border-box; }\n  [hidden] { display: none !important; }\n  body {\n    margin: 0;\n    background: var(--chao);\n    color: var(--tinta);\n    font-family: var(--fonte);\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.45;\n    -webkit-text-size-adjust: 100%;\n  }\n  button, input, select, textarea { font: inherit; color: inherit; }\n  button { cursor: pointer; }\n  :focus-visible { outline: 2px solid var(--verde); outline-offset: 2px; }\n  @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }\n\n  #app { max-width: 620px; margin: 0 auto; padding: 0 12px 92px; }\n  #portao { padding-top: 18vh; }\n  .portao-card { max-width: 380px; margin: 0 auto; }\n\n  /* ---- topo ---- */\n  .top {\n    position: sticky; top: 0; z-index: 20;\n    background: var(--chao);\n    padding: 14px 0 10px;\n    display: flex; align-items: baseline; gap: 10px;\n    border-bottom: 1px solid var(--linha);\n    margin-bottom: 14px;\n  }\n  .top h1 { margin: 0; font-size: 17px; font-weight: 500; letter-spacing: -.2px; color: var(--verde); }\n\n  /* ---- cart\u00f5es ---- */\n  .card {\n    background: var(--folha); border: 1px solid var(--linha);\n    border-radius: var(--raio); box-shadow: var(--sombra);\n    margin-bottom: 12px; overflow: hidden;\n  }\n  .card > h2 {\n    margin: 0; padding: 9px 14px;\n    font-size: 12px; font-weight: 500; letter-spacing: .3px; text-transform: uppercase;\n    color: var(--verde); background: var(--verde-fundo);\n    display: flex; align-items: center; gap: 8px;\n  }\n  .card > h2 .cont { margin-left: auto; font-size: 11px; letter-spacing: 0; text-transform: none; color: var(--tinta-fraca); font-variant-numeric: tabular-nums; }\n  .corpo { padding: 14px; }\n  .corpo.sem-topo { padding-top: 12px; }\n\n  .sub { font-size: 12px; color: var(--tinta-fraca); margin: 0 0 10px; }\n  .vazio { padding: 22px 14px; text-align: center; color: var(--tinta-fraca); font-size: 13px; }\n\n  /* ---- bot\u00f5es ---- */\n  .btn {\n    border: 1px solid var(--linha-forte); background: var(--folha);\n    border-radius: var(--raio-p); padding: 9px 14px; font-size: 13px; font-weight: 500;\n    color: var(--tinta); display: inline-flex; align-items: center; gap: 7px; justify-content: center;\n  }\n  .btn:active { background: var(--folha-2); }\n  .btn.principal { background: var(--verde); border-color: var(--verde); color: #fff; }\n  :root[data-theme=\"dark\"] .btn.principal, :root:not([data-theme=\"light\"]) .btn.principal { color: #10201E; }\n  @media (prefers-color-scheme: light) { :root:not([data-theme=\"dark\"]) .btn.principal { color: #fff; } }\n  .btn.larga { width: 100%; }\n  .btn.miuda { padding: 6px 10px; font-size: 12px; }\n  .btn[disabled] { opacity: .45; pointer-events: none; }\n  .linha-btns { display: flex; gap: 8px; flex-wrap: wrap; }\n\n  /* ---- p\u00edlulas / chips ---- */\n  .pilulas { display: flex; gap: 6px; flex-wrap: wrap; }\n  .pilula {\n    border: 1px solid var(--linha-forte); background: var(--folha);\n    border-radius: 999px; padding: 5px 12px; font-size: 12px; color: var(--tinta-fraca);\n  }\n  .pilula[aria-pressed=\"true\"] { background: var(--verde); border-color: var(--verde); color: #fff; font-weight: 500; }\n  :root[data-theme=\"dark\"] .pilula[aria-pressed=\"true\"] { color: #10201E; }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .pilula[aria-pressed=\"true\"] { color: #10201E; } }\n\n  .tag { font-size: 10px; letter-spacing: .3px; text-transform: uppercase; padding: 2px 7px; border-radius: 999px; font-weight: 500; white-space: nowrap; }\n  .tag.horti { background: var(--horti-fundo); color: var(--horti); }\n  .tag.mercado { background: var(--mercado-fundo); color: var(--mercado); }\n\n  /* ---- rodada: um por um ---- */\n  .progresso { height: 4px; background: var(--linha); border-radius: 999px; overflow: hidden; margin: 0 0 4px; }\n  .progresso i { display: block; height: 100%; background: var(--verde); border-radius: 999px; transition: width .18s ease; }\n  .progresso-txt { font-size: 11px; color: var(--tinta-fraquinha); font-variant-numeric: tabular-nums; display: flex; justify-content: space-between; }\n\n  .foco { text-align: center; padding: 6px 0 2px; }\n  .foco .cat { font-size: 11px; letter-spacing: .4px; text-transform: uppercase; color: var(--tinta-fraquinha); }\n  .foco .nome { font-size: 26px; font-weight: 500; letter-spacing: -.4px; margin: 4px 0 6px; text-wrap: balance; line-height: 1.2; user-select: text; -webkit-user-select: text; }\n  .foco .dica { font-size: 12px; color: var(--tinta-fraca); min-height: 16px; }\n  .foco .dica.quente { color: var(--alerta); }\n  .decisao { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 16px; }\n  .decisao .btn { padding: 16px 10px; font-size: 15px; }\n  .btn.sim { background: var(--verde); border-color: var(--verde); color: #fff; }\n  :root[data-theme=\"dark\"] .btn.sim { color: #10201E; }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .btn.sim { color: #10201E; } }\n  .btn.nao { background: var(--folha-2); }\n  .pe { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; }\n  .link { background: none; border: 0; color: var(--tinta-fraca); font-size: 12px; text-decoration: underline; text-underline-offset: 3px; padding: 4px 2px; }\n  .link.forte { color: var(--verde); }\n\n  .campo-quanto {\n    font-size: 24px; font-weight: 500; text-align: center; padding: 12px;\n    font-variant-numeric: tabular-nums; letter-spacing: 1px;\n  }\n  .mostrador {\n    font-size: 30px; font-weight: 500; text-align: center; padding: 8px 12px;\n    font-variant-numeric: tabular-nums; letter-spacing: 1px; color: var(--verde);\n    border-bottom: 2px solid var(--linha); margin-bottom: 12px; min-height: 48px;\n  }\n  .numpad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n  .tecla-num {\n    height: 48px; border: 1px solid var(--linha-forte); background: var(--folha);\n    border-radius: var(--raio-p); font-size: 20px; color: var(--tinta);\n    font-variant-numeric: tabular-nums;\n  }\n  .tecla-num:active { background: var(--folha-2); }\n  .tecla-num.apaga { font-size: 17px; color: var(--tinta-fraca); }\n  .tecla-num.pronto { background: var(--verde); border-color: var(--verde); color: #fff; font-size: 15px; font-weight: 500; }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .tecla-num.pronto { color: #10201E; } }\n  :root[data-theme=\"dark\"] .tecla-num.pronto { color: #10201E; }\n  .quanto-passo { margin-top: 14px; }\n  .pe .meta { font-size: 11px; color: var(--tinta-fraquinha); font-variant-numeric: tabular-nums; }\n\n  /* ---- listas de itens ---- */\n  .grupo-titulo {\n    font-size: 11px; letter-spacing: .4px; text-transform: uppercase; color: var(--tinta-fraca);\n    background: var(--verde-fundo-fraco); padding: 5px 14px; border-top: 1px solid var(--linha); border-bottom: 1px solid var(--linha);\n  }\n  .fila { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; padding: 10px 14px; border-bottom: 1px solid var(--linha); border-left: 3px solid transparent; width: 100%; text-align: left; background: none; border-top: 0; border-right: 0; }\n  .fila:last-child { border-bottom: 0; }\n  .fila.horti { border-left-color: var(--horti); }\n  .fila.mercado { border-left-color: var(--mercado); }\n  .fila .nome { flex: 1; min-width: 0; overflow-wrap: anywhere; }\n  .fila .meta { font-size: 11px; color: var(--tinta-fraquinha); }\n  .fila .freq { display: block; font-size: 11px; font-weight: 400; color: var(--verde); margin-top: 1px; }\n  .fila .nome-btn { background: none; border: 0; padding: 0; font: inherit; color: inherit; text-align: left; }\n  .fila.marcado .nome-btn { font-weight: 500; }\n  .fila .nome-btn { flex: 1 1 110px; }\n  .nao-sabe { font-size: 11px; color: var(--alerta); align-self: center; margin-right: 4px; white-space: nowrap; }\n  /* O item j\u00e1 resolvido mostra s\u00f3 o n\u00famero, do tamanho da caixinha de marcar. */\n  .pastilha {\n    flex: none; min-width: 26px; height: 26px; padding: 0 6px; border-radius: 7px;\n    border: 1px solid var(--verde); background: var(--verde); color: #fff;\n    font-size: 14px; font-weight: 500; font-variant-numeric: tabular-nums;\n  }\n  .pastilha.sem { background: var(--folha); border-color: var(--alerta); color: var(--alerta); }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .pastilha { color: #10201E; } }\n  :root[data-theme=\"dark\"] .pastilha { color: #10201E; }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .pastilha.sem { color: var(--alerta); } }\n  :root[data-theme=\"dark\"] .pastilha.sem { color: var(--alerta); }\n  /* ---- papel: a lista da semana no jeito do \"Notas\" do iPhone ----\n     Ele pediu em 10/09/2026, \u00e9 como a casa est\u00e1 acostumada a ler a lista.\n     Folha lisa, sem moldura nem linha separando item de item, bolinha redonda\n     no lugar do quadradinho e o n\u00famero junto do nome (\"Alho 4\") em vez da\n     pastilha na beirada. Vale s\u00f3 aqui: a aba Itens continua cart\u00e3o, que l\u00e1 \u00e9\n     tela de mexer na lista mestra, n\u00e3o de ler. */\n  .card.papel { border: 0; box-shadow: none; }\n  .card.papel .grupo-titulo {\n    background: none; border: 0; text-transform: none; letter-spacing: 0;\n    font-size: 12px; color: var(--tinta-fraquinha); padding: 16px 16px 4px;\n  }\n  .card.papel .grupo-titulo:first-child { padding-top: 12px; }\n  .card.papel .fila {\n    border-bottom: 0; border-left: 0; padding: 7px 16px; gap: 12px; font-size: 16px;\n  }\n  .card.papel .fila.marcado { background: none; }\n  .card.papel .fila.marcado .nome, .card.papel .fila.marcado .nome-btn { font-weight: 400; }\n  .card.papel .fila .nome-btn { flex: 0 1 auto; }\n  .card.papel .fila.marcado .caixa, .card.papel .fila.feito .caixa {\n    background: var(--marca); border-color: var(--marca); color: var(--marca-tinta);\n  }\n  .card.papel .tecla.escolhida {\n    background: var(--marca); border-color: var(--marca); color: var(--marca-tinta);\n  }\n  /* o vazio \u00e0 direita do nome continua marcando o item: sem isso, encostar o\n     n\u00famero no nome deixava metade da linha sem resposta ao toque */\n  .resto { flex: 1 1 40px; align-self: stretch; min-height: 22px; }\n  .card.papel .caixa { width: 24px; height: 24px; border-radius: 50%; }\n  .card.papel .caixa svg { width: 14px; height: 14px; }\n  /* o n\u00famero encostado no nome, como no Notas, e ainda assim toc\u00e1vel */\n  .card.papel .pastilha {\n    background: none; border: 0; padding: 0 3px; min-width: 0; height: auto;\n    margin-left: -7px; font-size: inherit; font-weight: 400; color: var(--tinta-fraca);\n  }\n  .card.papel .pastilha.sem { color: var(--alerta); }\n  .card.papel .freq { font-size: 12px; }\n\n  .teclas { display: flex; gap: 5px; flex: 1 1 270px; }\n  .tecla {\n    flex: 1; min-width: 0; height: 32px; border: 1px solid var(--linha-forte);\n    background: var(--folha); border-radius: var(--raio-p); font-size: 14px;\n    color: var(--tinta); font-variant-numeric: tabular-nums; padding: 0;\n  }\n  .tecla.escolhida { background: var(--verde); border-color: var(--verde); color: #fff; font-weight: 500; }\n  @media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .tecla.escolhida { color: #10201E; } }\n  :root[data-theme=\"dark\"] .tecla.escolhida { color: #10201E; }\n  .tecla.mais { font-size: 12px; color: var(--tinta-fraca); }\n  .fila.marcado { background: var(--verde-fundo-fraco); }\n  .fila.marcado .nome { font-weight: 500; }\n  .fila.feito .nome { color: var(--tinta-fraquinha); text-decoration: line-through; }\n  .caixa {\n    width: 22px; height: 22px; flex: none; border: 1.5px solid var(--linha-forte); border-radius: 6px;\n    display: grid; place-items: center; background: var(--folha);\n  }\n  .caixa svg { width: 13px; height: 13px; opacity: 0; }\n  .fila.marcado .caixa, .fila.feito .caixa { color: #fff; }\n  @media (prefers-color-scheme: dark) {\n    :root:not([data-theme=\"light\"]) .fila.marcado .caixa,\n    :root:not([data-theme=\"light\"]) .fila.feito .caixa { color: #10201E; }\n  }\n  :root[data-theme=\"dark\"] .fila.marcado .caixa,\n  :root[data-theme=\"dark\"] .fila.feito .caixa { color: #10201E; }\n  .fila.marcado .caixa, .fila.feito .caixa { background: var(--verde); border-color: var(--verde); }\n  .fila.marcado .caixa svg, .fila.feito .caixa svg { opacity: 1; }\n\n  .exp { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding: 10px 14px; border-bottom: 1px solid var(--linha); }\n  .exp-nome { flex: 1; min-width: 150px; font-weight: 500; }\n  .exp-nome .meta { font-weight: 400; font-size: 11px; color: var(--tinta-fraquinha); }\n  .exp-botoes { display: flex; gap: 6px; flex: none; }\n  .exp-texto { flex-basis: 100%; }\n\n  /* ---- texto para copiar ---- */\n  .texto-lista {\n    width: 100%; min-height: 120px; resize: vertical; margin-top: 10px;\n    border: 1px solid var(--linha); border-radius: var(--raio-p); padding: 10px;\n    background: var(--folha-2); color: var(--tinta); font-size: 13px; line-height: 1.6;\n  }\n  .aviso-copia { font-size: 11px; color: var(--tinta-fraca); margin-top: 6px; }\n\n  /* ---- busca e campos ---- */\n  .campo, .selec {\n    width: 100%; border: 1px solid var(--linha-forte); border-radius: var(--raio-p);\n    padding: 9px 11px; background: var(--folha); font-size: 14px;\n  }\n  .rotulo { display: block; font-size: 11px; letter-spacing: .3px; text-transform: uppercase; color: var(--tinta-fraca); margin: 0 0 4px; }\n  .campo-bloco { margin-bottom: 12px; }\n\n  /* ---- abas de baixo ---- */\n  .abas {\n    position: fixed; left: 0; right: 0; bottom: 0; z-index: 30;\n    background: var(--folha); border-top: 1px solid var(--linha);\n    display: flex; padding: 6px 8px calc(6px + env(safe-area-inset-bottom, 0px));\n  }\n  .abas .aba {\n    flex: 1; background: none; border: 0; padding: 6px 2px; border-radius: var(--raio-p);\n    display: flex; flex-direction: column; align-items: center; gap: 3px;\n    font-size: 11px; color: var(--tinta-fraca);\n  }\n  .abas .aba svg { width: 18px; height: 18px; }\n  .abas .aba[aria-current=\"true\"] { color: var(--verde); font-weight: 500; background: var(--verde-fundo); }\n\n  /* ---- modal ---- */\n  /* A folha fica no meio da tela, n\u00e3o colada no p\u00e9. No iPhone a barra do\n     Safari entra e sai conforme a rolagem: colada embaixo, os bot\u00f5es ficavam\n     cortados por ela. No meio, a folha aparece inteira nos dois estados. */\n  .fundo-modal {\n    position: fixed; inset: 0; z-index: 50; background: rgba(16,22,20,.5);\n    display: flex; align-items: center; justify-content: center; padding: 16px;\n  }\n  .modal {\n    background: var(--folha); width: 100%; max-width: 560px; overflow: auto;\n    max-height: 76vh; max-height: 76dvh;\n    border-radius: var(--raio); border: 1px solid var(--linha);\n  }\n  /* o rodap\u00e9 acompanha a rolagem, para o bot\u00e3o n\u00e3o sumir numa folha comprida */\n  .acoes-fim {\n    position: sticky; bottom: -1px; z-index: 2;\n    background: var(--folha); border-top: 1px solid var(--linha);\n    margin: 12px -14px -14px -14px; padding: 10px 14px;\n  }\n  .modal h3 {\n    margin: 0; padding: 12px 14px; font-size: 13px; font-weight: 500; color: var(--verde);\n    background: var(--verde-fundo); display: flex; align-items: center; gap: 8px;\n  }\n  .modal h3 .fechar { margin-left: auto; background: none; border: 0; color: var(--tinta-fraca); font-size: 20px; line-height: 1; padding: 0 4px; }\n  .modal .corpo { padding: 14px; }\n\n  .previa { border: 1px solid var(--linha); border-radius: var(--raio-p); margin: 10px 0; }\n  .previa .fila { padding: 8px 10px; }\n\n  .versao { text-align: center; font-size: 11px; color: var(--tinta-fraquinha); padding: 6px 0 2px; }\n  .nota { background: var(--alerta-fundo); color: var(--alerta); border-radius: var(--raio-p); padding: 9px 11px; font-size: 12px; }\n";
  document.head.appendChild(st);
  var caixa = document.createElement('div');
  caixa.innerHTML = "<div id=\"app\">\n  <div id=\"portao\" hidden>\n    <div class=\"card portao-card\">\n      <h2>Lista da casa</h2>\n      <div class=\"corpo\">\n        <p class=\"sub\" id=\"portao-texto\">A mesma senha para todo mundo da casa. Se ningu\u00e9m entrou ainda, a que voc\u00ea digitar agora vira a senha. Digita uma vez; este aparelho lembra.</p>\n        <label class=\"rotulo\" for=\"senha\">Senha</label>\n        <input class=\"campo\" id=\"senha\" type=\"password\" autocomplete=\"current-password\" enterkeyhint=\"go\">\n        <div class=\"linha-btns\" style=\"margin-top:12px\">\n          <button class=\"btn principal larga\" type=\"button\" id=\"btn-entrar\">Entrar</button>\n        </div>\n        <div id=\"portao-aviso\"></div>\n      </div>\n    </div>\n  </div>\n\n  <header class=\"top\">\n    <h1>Mercado</h1>\n  </header>\n\n  <main>\n    <section class=\"tela\" id=\"tela-rodada\"></section>\n    <section class=\"tela\" id=\"tela-listas\" hidden></section>\n    <section class=\"tela\" id=\"tela-itens\" hidden></section>\n  </main>\n</div>\n\n<nav class=\"abas\" role=\"tablist\">\n  <button class=\"aba\" type=\"button\" data-tela=\"rodada\" aria-current=\"true\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 11l2 2 4-4\"/><rect x=\"3\" y=\"4\" width=\"18\" height=\"17\" rx=\"2\"/><path d=\"M8 2v4M16 2v4\"/></svg>\n    Semana\n  </button>\n  <button class=\"aba\" type=\"button\" data-tela=\"listas\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01\"/></svg>\n    Listas\n  </button>\n  <button class=\"aba\" type=\"button\" data-tela=\"itens\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 6h18l-2 13H5L3 6z\"/><path d=\"M8 6V4a4 4 0 018 0v2\"/></svg>\n    Itens\n  </button>\n</nav>\n\n<div id=\"area-modal\"></div>";
  while (caixa.firstChild) document.body.appendChild(caixa.firstChild);
  // O título mora aqui, não na casca: assim ele troca junto com o app,
  // sem esperar o cache soltar o index.html.
  document.title = "Mercado";


(function () {
  "use strict";

  /* ---------------------------------------------------------------
     Mercado
     - lista/itens        : a lista mestra, um mapa id -> item
     - rodadas/atual      : a rodada da semana (o que foi perguntado)
     - historico/rodadas   : data -> ids que precisaram (para a cadência)
     Escrita sempre por chave (update com merge), nunca despejando o
     mapa inteiro por cima: o Vinicius e a esposa mexem ao mesmo tempo.
  --------------------------------------------------------------- */

  var CAMINHOS = { itens: "lista/itens", rodada: "rodadas/atual", historico: "historico/rodadas" };

  var S = {
    itens: {},
    rodada: null,
    historico: {},
    tela: "rodada",
    soMarcados: false,
    busca: "",
    // O papel vem do link de convite. Quem entra digitando a senha é o dono.
    quem: localStorage.getItem("mercado:quem") || "vini",
    perguntaIdx: 0,
    perguntando: null,
    digitando: "",
    digitou: false,
    // Só um item por vez mostra a fileira de números.
    abertoQtd: null,
    recado: "",
    pronto: false
  };

  /* ---------------- utilidades ---------------- */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function normalizar(s) {
    return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim();
  }
  function hoje() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function dataCurta(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return p[2] + "/" + p[1];
  }

  // O nome da lista é a data em que ela começou e não muda mais: é assim que
  // se sabe de quando é a compra que está na tela.
  function dataLonga(iso) {
    if (!iso) return "";
    var p = iso.split("-");
    return p[2] + "/" + p[1] + "/" + p[0];
  }

  function nomeDaLista() {
    return "Lista de " + dataLonga(dataDaLista());
  }

  function dataDaLista() {
    return S.rodada && S.rodada.data ? S.rodada.data : hoje();
  }
  function diasEntre(a, b) {
    return Math.round((new Date(b + "T12:00:00") - new Date(a + "T12:00:00")) / 86400000);
  }
  function novoId() {
    return "i" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
  function plural(n, um, muitos) { return n + " " + (n === 1 ? um : muitos); }

  /* ---------------- guarda dos dados ---------------- */

  var Store = (function () {
    var db = null;      // banco do Artifact (dentro do Claude)
    var fb = null;      // nó da casa no Firebase (página hospedada)
    var ouvintes = {};
    var local = {};

    // O update do Firebase troca o filho inteiro quando recebe objeto aninhado.
    // Achatando até a folha, ele passa a mesclar campo a campo — que é o que o
    // app precisa: o Vinicius e a casa mexem na mesma semana ao mesmo tempo.
    function achatar(obj, prefixo, saida) {
      saida = saida || {}; prefixo = prefixo || "";
      Object.keys(obj).forEach(function (k) {
        var v = obj[k], caminho = prefixo ? prefixo + "/" + k : k;
        if (v && typeof v === "object" && !Array.isArray(v)) achatar(v, caminho, saida);
        else saida[caminho] = v;
      });
      return saida;
    }

    function chaveLocal(p) { return "mercado:" + p; }
    function lerLocal(p) {
      try { return JSON.parse(localStorage.getItem(chaveLocal(p)) || "null"); } catch (e) { return null; }
    }
    function gravarLocal(p, corpo) {
      local[p] = corpo;
      try { localStorage.setItem(chaveLocal(p), JSON.stringify(corpo)); } catch (e) {}
      if (ouvintes[p]) ouvintes[p](corpo);
    }
    function mesclar(alvo, remendo) {
      Object.keys(remendo).forEach(function (k) {
        var v = remendo[k];
        if (v && typeof v === "object" && !Array.isArray(v)) {
          alvo[k] = mesclar(Object.assign({}, alvo[k] || {}), v);
        } else { alvo[k] = v; }
      });
      return alvo;
    }

    return {
      temBanco: function () { return !!db || !!fb; },
      comoGuarda: function () { return db ? "claude" : fb ? "firebase" : "local"; },

      async abrir() {
        try {
          db = (window.claude && typeof window.claude.use === "function") ? await window.claude.use("db") : null;
        } catch (e) { db = null; }
        return !!db;
      },

      // Página hospedada: a senha vira o nome do nó, e é só ele que as regras
      // do Firebase deixam ler. Sem a senha não há caminho para adivinhar.
      abrirFirebase(config, chave) {
        if (!window.firebase || !config || !config.databaseURL) return false;
        try {
          if (!firebase.apps.length) firebase.initializeApp(config);
          fb = firebase.database().ref("listas/" + chave);
          return true;
        } catch (e) { fb = null; return false; }
      },

      async existeNoFirebase(config, chave) {
        if (!window.firebase || !config || !config.databaseURL) return null;
        try {
          if (!firebase.apps.length) firebase.initializeApp(config);
          var snap = await firebase.database().ref("listas/" + chave + "/marca").get();
          return snap.exists();
        } catch (e) { return null; }
      },

      async marcarCasa(nome) {
        if (fb) await fb.child("marca").set({ nome: nome || "casa", criada: new Date().toISOString() });
      },

      async garantir(p, inicial) {
        if (db) {
          try {
            var snap = await db.doc(p).get();
            if (!snap.exists) await db.doc(p).set(inicial);
          } catch (e) { /* outro visualizador pode ter criado na mesma hora */ }
          return;
        }
        if (fb) {
          var s2 = await fb.child(p).get();
          if (!s2.exists()) await fb.child(p).set(inicial);
          return;
        }
        if (!lerLocal(p)) gravarLocal(p, inicial);
      },

      escutar(p, cb) {
        ouvintes[p] = cb;
        if (db) {
          return db.doc(p).onSnapshot(function (snap) {
            var corpo = snap.exists ? snap.data() : null;
            local[p] = corpo ? Object.assign({}, corpo) : {};
            cb(corpo);
          }, function () { /* assinatura morreu; a tela segue com o que tem */ });
        }
        if (fb) {
          var no = fb.child(p);
          var fn = no.on("value", function (snap) {
            var corpo = snap.val();
            local[p] = corpo ? Object.assign({}, corpo) : {};
            cb(corpo);
          });
          return function () { no.off("value", fn); };
        }
        cb(lerLocal(p));
        return function () {};
      },

      async mesclarDoc(p, remendo) {
        if (db) {
          try { await db.doc(p).update(remendo); }
          catch (e) { await db.doc(p).set(mesclar(Object.assign({}, local[p] || lerLocal(p) || {}), remendo)); }
          return;
        }
        if (fb) { await fb.child(p).update(achatar(remendo)); return; }
        gravarLocal(p, mesclar(Object.assign({}, lerLocal(p) || {}), remendo));
      },

      async gravarDoc(p, corpo) {
        if (db) { await db.doc(p).set(corpo); return; }
        if (fb) { await fb.child(p).set(corpo); return; }
        gravarLocal(p, corpo);
      },

      async lerDoc(p) {
        if (db) { var s = await db.doc(p).get(); return s.exists ? s.data() : null; }
        if (fb) { var s3 = await fb.child(p).get(); return s3.exists() ? s3.val() : null; }
        return lerLocal(p);
      },

      guardarCopia(p, corpo) { local[p] = corpo; }
    };
  })();

  /* ---------------- classificação na importação ---------------- */

  // As categorias são as que a casa usa (o Vinicius as ditou em 09/09/2026),
  // não uma taxonomia de supermercado. "Temperos" atravessa as duas listas:
  // cheiro-verde vem do Hiperideal, cominho vem do mercado.
  var CATEGORIAS = [
    { cat: "Verduras e legumes", destino: "horti", p: ["abobora", "abobrinha", "acelga", "agriao", "aipim", "alface", "alho", "batata", "batata doce", "berinjela", "beterraba", "brocolis", "cebola", "cebola roxa", "cenoura", "chuchu", "couve", "couve flor", "espinafre", "inhame", "jilo", "mandioca", "macaxeira", "maxixe", "milho", "milho espiga", "pepino", "pimentao", "quiabo", "rabanete", "repolho", "rucula", "vagem", "ervilha fresca", "feijao verde", "tomate", "tomate cereja", "verdura", "legume", "salada", "banana da terra"] },
    { cat: "Frutas", destino: "horti", p: ["abacate", "abacaxi", "ameixa", "banana", "banana da prata", "caju", "caja", "acerola", "coco", "goiaba", "graviola", "kiwi", "laranja", "lima", "limao", "maca", "mamao", "manga", "manga palmer", "maracuja", "melancia", "melao", "morango", "pera", "pinha", "tangerina", "umbu", "uva", "uva verde", "fruta"] },
    { cat: "Temperos", destino: "horti", p: ["cebolinha", "salsinha", "salsa", "coentro", "cheiro verde", "hortela", "manjericao", "gengibre", "alecrim"] },
    { cat: "Temperos", destino: "mercado", p: ["sal", "pimenta", "pimenta do reino", "paprica", "cominho", "oregano", "louro", "folha de louro", "canela", "curcuma", "acafrao", "colorau", "tempero", "noz moscada", "cravo"] },
    { cat: "Dispensa", destino: "mercado", p: ["arroz", "feijao", "macarrao", "massa", "massinha", "penne", "spaguetti", "espaguete", "talharim", "farinha", "farinha de mandioca", "acucar", "oleo", "azeite", "vinagre", "molho", "extrato", "milho verde", "ervilha", "atum", "sardinha", "fermento", "gelatina", "aveia", "granola", "cuscuz", "tapioca", "goma", "flocao", "biscoito", "bolacha", "cracker", "cream cracker", "beiju", "cereal", "geleia", "mel", "amendoim", "castanha", "nozes", "chia", "linhaca", "uva passa", "chocolate", "chiclete", "bala", "azeitona", "leite de coco", "leite em po", "lentilha", "grao de bico", "sopa", "miojo", "pipoca", "polvilho", "batata palha", "banana chips", "bananada", "achocolatado em po", "pao", "paes", "bisnaga", "broa", "torrada", "bolo", "pao de queijo", "agua", "refrigerante", "coca", "guarana", "suco", "cerveja", "heineken", "vinho", "cafe", "filtro cafe", "cha", "energetico", "isotonico", "agua de coco", "agua com gas", "achocolatado", "toddy", "nescau", "tonica", "gin", "vodka", "whisky", "racao"] },
    { cat: "Geladeira", destino: "mercado", p: ["leite", "queijo", "mussarela", "requeijao", "iogurte", "manteiga", "margarina", "creme de leite", "ovo", "ovos", "coalhada", "ricota", "nata", "cottage", "cream cheese", "presunto", "mortadela", "salame", "molho ingles", "shoyu", "mostarda", "ketchup", "maionese"] },
    { cat: "Freezer", destino: "mercado", p: ["carne", "picanha", "alcatra", "coxao", "coxao duro", "patinho", "acem", "moida", "frango", "peito de frango", "coxa", "sobrecoxa", "linguica", "bacon", "salsicha", "peixe", "tilapia", "camarao", "salmao", "file", "filezinho", "costela", "peru", "hamburguer", "charque", "carne seca", "carne do sol", "bacalhau", "cha de dentro", "cha de fora", "maminha", "fraldinha", "pernil", "suina", "suino", "polpa"] },
    { cat: "Materiais de limpeza", destino: "mercado", p: ["detergente", "sabao", "amaciante", "desinfetante", "agua sanitaria", "candida", "esponja", "bucha", "alvejante", "multiuso", "veja", "cif", "omo", "vanish", "tixan", "limpador", "limpa vidro", "brilux", "tira limo", "azulim", "higienizador", "saco de lixo", "papel toalha", "lustra", "cloro", "bombril", "perfex", "vassoura", "rodo", "pano de chao", "flanela", "alcool", "desengordurante", "bicarbonato", "papel aluminio", "papel filme", "papel manteiga", "saco plastico", "guardanapo", "fosforo", "vela", "palito", "pilha", "lampada", "isqueiro"] },
    { cat: "Outros", destino: "mercado", p: ["papel higienico", "sabonete", "shampoo", "condicionador", "pasta de dente", "creme dental", "escova de dente", "desodorante", "absorvente", "fralda", "lenco", "algodao", "cotonete", "hidratante", "protetor solar", "aparelho de barbear", "gilete", "fio dental", "fita dental", "enxaguante", "band aid", "curativo", "acetona", "higi", "hastes"] }
  ];

  // "Outros" é a gaveta que só o Vinicius e a esposa marcam; a tela de quem
  // cuida da casa não a mostra. O que o app não reconhece vai para "Sem
  // gaveta", que todos veem — senão um item acrescentado por ela poderia
  // desaparecer da própria tela dela.
  var SEM_GAVETA = "Sem gaveta";
  var OCULTAS_DA_CASA = ["Outros"];

  function escondidaDaCasa(it) {
    return OCULTAS_DA_CASA.indexOf(it.categoria) >= 0;
  }

  // O que ela pode responder: fora das gavetas privadas e fora do que o
  // Vinicius ou a esposa já puseram na compra — item que eles marcaram some da
  // fila dela, para ela não desfazer sem querer o que já foi resolvido.
  // Some só o que eles marcaram COMO NECESSÁRIO. "Tirar da compra" não apaga a
  // marcação, grava precisa: false com o nome deles; se isso também escondesse,
  // item marcado e desmarcado por engano sumia da fila dela para sempre — e era
  // justamente o que ela precisava ser perguntada.
  function universoDaCasa() {
    return ordemLista().filter(function (it) {
      if (escondidaDaCasa(it)) return false;
      var m = marcado(it.id);
      return !m || m.por === "casa" || !m.precisa;
    });
  }

  function respondeuEla(id) {
    var m = marcado(id);
    return !!(m && m.por === "casa");
  }

  var GRUPOS = [
    { cat: "Verduras e legumes", destino: "horti", palavras: ["verduras", "legumes", "verduras e legumes", "hortifruti", "feira", "hiperideal", "sacolao"] },
    { cat: "Frutas", destino: "horti", palavras: ["frutas", "fruta"] },
    { cat: "Temperos", destino: "horti", palavras: ["temperos", "tempero", "cheiro verde"] },
    { cat: "Geladeira", destino: "mercado", palavras: ["geladeira", "laticinios", "frios"] },
    { cat: "Freezer", destino: "mercado", palavras: ["freezer", "congelados", "carnes", "carne", "acougue"] },
    { cat: "Materiais de limpeza", destino: "mercado", palavras: ["limpeza", "materiais de limpeza", "produtos de limpeza"] },
    { cat: "Outros", destino: "mercado", palavras: ["banheiro", "higiene", "farmacia", "outros"] },
    { cat: "Dispensa", destino: "mercado", palavras: ["dispensa", "despensa", "alimentacao", "alimentacao (dispensa)", "mercearia", "secos", "bebidas", "padaria", "atacadao", "assai", "ifood"] }
  ];

  // Ganha a palavra mais específica, não a primeira encontrada: "Sabão de coco"
  // é sabão e não coco, "Extrato tomate" é extrato e não tomate, "Chã de
  // dentro" é carne e não chá. Sem isso a ordem das listas decidia, e errado.
  function adivinhar(nome, grupoAtual) {
    var palavras = normalizar(nome).split(/[ ,/()\-]+/).filter(Boolean);
    var seco = " " + palavras.join(" ") + " ";
    var melhor = null;

    CATEGORIAS.forEach(function (g) {
      g.p.forEach(function (alvo) {
        if (seco.indexOf(" " + alvo + " ") < 0) return;
        if (!melhor || alvo.length > melhor.tamanho) {
          melhor = { categoria: g.cat, destino: g.destino, tamanho: alvo.length };
        }
      });
    });

    if (melhor) return { categoria: melhor.categoria, destino: melhor.destino };
    if (grupoAtual) return { categoria: grupoAtual.cat, destino: grupoAtual.destino };
    return { categoria: SEM_GAVETA, destino: "mercado" };
  }

  function grupoDaLinha(linha) {
    var n = normalizar(linha).replace(/:$/, "");
    for (var i = 0; i < GRUPOS.length; i++) {
      if (GRUPOS[i].palavras.indexOf(n) >= 0) return GRUPOS[i];
    }
    return null;
  }

  function analisarTexto(texto) {
    var linhas = String(texto || "").split(/\r?\n/);

    function limpar(bruta) {
      return bruta
        .replace(/^[\s\u2022\u25e6\u25aa\u00b7*\-\u2013\u2014+>]+/, "")
        .replace(/^\[[\sxX\u2713\u2714]?\]\s*/, "")
        .replace(/^\d+[.)]\s+/, "")
        .replace(/[\u2705\u2611\u274c\u2714\ufe0f]/g, "")
        .trim();
    }

    // Número solto no fim do nome é a conta da semana passada, não o nome do
    // item: "Arroz 2" vira "Arroz". Fica de fora tudo que mostra intenção de
    // fazer parte do nome: número colado ao que vem antes ("Papel alumínio
    // 30x4", "Arroz 5kg") e número entre parênteses, que é medida ou modelo
    // ("Filtro de café (103)").
    function tirarConta(l) {
      var semConta = l.replace(/\s+[-\u2013\u2014:=xX\u00d7]?\s*\d+(?:[.,]\d+)?\s*$/, "").trim();
      return semConta || l;
    }

    // Se a nota inteira está em maiúsculas, MAIÚSCULA não pode significar
    // categoria — senão nada seria importado. Aí só os dois-pontos contam.
    var uteis = linhas.map(limpar).filter(Boolean);
    var caixaAlta = uteis.filter(function (l) { return l === l.toUpperCase() && /[A-ZÀ-Ú]/.test(l); }).length;
    var maiusculaValeCategoria = uteis.length > 0 && caixaAlta / uteis.length < 0.6;

    var grupo = null, saida = [], vistos = {};
    linhas.forEach(function (bruta) {
      var l = limpar(bruta);
      if (!l) return;
      var doisPontos = /:\s*$/.test(bruta);
      var soMaiuscula = maiusculaValeCategoria && l === l.toUpperCase() && /[A-ZÀ-Ú]/.test(l) && l.length <= 28 && !/\d/.test(l);
      if (doisPontos || soMaiuscula) {
        var rotulo = l.replace(/:\s*$/, "").trim();
        if (!rotulo) return;
        // "(Hiperideal)" / "(Mercado)" no fim do cabeçalho diz quem compra —
        // é assim que a bancada devolve as correções sem o app readivinhar.
        var forcado = "";
        var marca = /\(([^)]*)\)\s*$/.exec(rotulo);
        if (marca) {
          var m = normalizar(marca[1]);
          if (m === "hiperideal" || m === "esposa" || m === "horti") forcado = "horti";
          else if (m === "mercado" || m === "ifood" || m === "voce") forcado = "mercado";
          if (forcado) rotulo = rotulo.replace(/\s*\([^)]*\)\s*$/, "").trim();
        }
        if (!rotulo) return;
        var conhecido = grupoDaLinha(rotulo);
        var arrumado = rotulo === rotulo.toUpperCase()
          ? rotulo.charAt(0).toUpperCase() + rotulo.slice(1).toLowerCase()
          : rotulo;
        grupo = {
          cat: conhecido && !forcado ? conhecido.cat : arrumado,
          destino: forcado || (conhecido ? conhecido.destino : adivinhar(rotulo, null).destino)
        };
        return;
      }
      l = l.replace(/\s{2,}/g, " ");
      l = tirarConta(l);
      var chave = normalizar(l);
      if (!chave || vistos[chave]) return;
      vistos[chave] = true;
      // Categoria escrita à mão vale mais que palpite: é o que o texto que sai
      // da bancada de edição usa para trazer as correções de volta.
      var palpite = adivinhar(l, grupo);
      if (grupo) palpite = { categoria: grupo.cat, destino: grupo.destino };
      saida.push({ nome: l, categoria: palpite.categoria, destino: palpite.destino });
    });
    return saida;
  }

  var LISTA_BASE = [
    "Banana prata", "Maçã", "Mamão", "Melancia", "Laranja", "Limão", "Abacate",
    "Tomate", "Cebola", "Alho", "Batata", "Batata-doce", "Cenoura", "Chuchu", "Abobrinha",
    "Pimentão", "Alface", "Couve", "Cheiro-verde", "Coentro", "Brócolis", "Aipim",
    "Pão francês", "Pão de forma", "Bolo",
    "Carne moída", "Peito de frango", "Coxa e sobrecoxa", "Linguiça", "Bacon", "Presunto", "Peixe",
    "Leite", "Queijo mussarela", "Requeijão", "Iogurte", "Manteiga", "Ovos", "Creme de leite",
    "Arroz", "Feijão", "Macarrão", "Farinha de mandioca", "Açúcar", "Sal", "Óleo", "Azeite",
    "Molho de tomate", "Café", "Achocolatado em pó", "Biscoito", "Aveia", "Tapioca", "Cuscuz",
    "Água mineral", "Refrigerante", "Suco", "Cerveja",
    "Detergente", "Sabão em pó", "Amaciante", "Água sanitária", "Desinfetante", "Esponja", "Saco de lixo", "Papel toalha",
    "Papel higiênico", "Sabonete", "Shampoo", "Condicionador", "Creme dental", "Desodorante",
    "Papel alumínio", "Fósforo", "Pilha"
  ];

  /* ---------------- cadência ---------------- */

  function rodadasPassadas() {
    var r = S.historico && S.historico.rodadas ? S.historico.rodadas : {};
    return Object.keys(r).sort().reverse();
  }

  function estat(id) {
    var datas = rodadasPassadas().filter(function (d) {
      var arr = S.historico.rodadas[d];
      return Array.isArray(arr) && arr.indexOf(id) >= 0;
    });
    var total = rodadasPassadas().length;
    if (!datas.length) return { vezes: 0, total: total, ultima: null, dica: total ? "não precisou ainda" : "", quente: false };
    var ultima = datas[0];
    var freq = datas.length / Math.max(total, 1);
    var intervalo;
    if (datas.length >= 2) {
      var somas = 0;
      for (var i = 0; i < datas.length - 1; i++) somas += diasEntre(datas[i + 1], datas[i]);
      intervalo = somas / (datas.length - 1);
    } else {
      intervalo = freq > 0 ? 7 / freq : 21;
    }
    var desde = diasEntre(ultima, hoje());
    var ritmo = freq >= 0.75 ? "toda semana"
      : freq >= 0.4 ? "a cada 2 semanas"
      : freq >= 0.2 ? "a cada 3 ou 4 semanas"
      : "de vez em quando";
    var quente = desde >= intervalo * 0.9;
    var quandoTxt = desde <= 1 ? "hoje" : desde < 14 ? "há " + desde + " dias" : "há " + Math.round(desde / 7) + " semanas";
    return {
      vezes: datas.length, total: total, ultima: ultima, quente: quente,
      dica: ritmo + " · última " + quandoTxt
    };
  }

  /* ---------------- listas derivadas ---------------- */

  // A lista mestra é a memória da casa: um toque errado tira o item de todo
  // mundo. Aparelho que entrou por link de convite fica travado no seu papel e
  // só marca e acrescenta; editar é de quem entrou digitando a senha.
  // São dois perfis: o de casa (o Vinicius e a esposa, que fazem tudo) e o de
  // quem cuida da casa, que só responde as perguntas. "esposa" continua sendo
  // aceito nos links antigos e cai no mesmo perfil deles.
  function podeEditar() {
    return S.quem !== "casa";
  }

  // Item comprado quase sempre merece um aviso embaixo do nome: é o que faz
  // alguém parar e conferir se ainda tem em casa. Só aparece com histórico —
  // antes de três semanas o app não sabe o que é frequente.
  function avisoFrequencia(id) {
    var e = estat(id);
    if (e.total < 3 || !e.vezes) return "";
    var freq = e.vezes / e.total;
    if (freq >= 0.7) return "comprado toda semana";
    if (freq >= 0.35) return "comprado quase toda semana";
    return "";
  }

  // As gavetas que existem: as do código, na ordem, mais qualquer uma que
  // tenha entrado pela importação e não esteja prevista.
  function gavetas() {
    var vistas = {}, fora = [];
    CATEGORIAS.forEach(function (g) { if (!vistas[g.cat]) { vistas[g.cat] = true; fora.push(g.cat); } });
    fora.push(SEM_GAVETA);
    vistas[SEM_GAVETA] = true;
    itensArray().forEach(function (it) {
      if (it.categoria && !vistas[it.categoria]) { vistas[it.categoria] = true; fora.push(it.categoria); }
    });
    return fora;
  }

  function donoDaGaveta(cat) {
    var achou = null;
    CATEGORIAS.forEach(function (g) { if (!achou && g.cat === cat) achou = g.destino; });
    return achou || "mercado";
  }

  function itensArray() {
    return Object.keys(S.itens).map(function (id) {
      return Object.assign({ id: id }, S.itens[id]);
    }).filter(function (it) { return it && it.nome; });
  }

  // A gaveta segue a ordem em que apareceu na lista mestra; dentro dela, A-Z,
  // para achar o item sem varrer a tela inteira.
  function ordemLista() {
    var arr = itensArray();
    var ordemCat = {};
    arr.forEach(function (it) {
      var o = it.ordem == null ? 9999 : it.ordem;
      if (ordemCat[it.categoria] === undefined) ordemCat[it.categoria] = o;
      else ordemCat[it.categoria] = Math.min(ordemCat[it.categoria], o);
    });
    arr.sort(function (a, b) {
      var da = ordemCat[a.categoria] - ordemCat[b.categoria];
      if (da) return da;
      return normalizar(a.nome).localeCompare(normalizar(b.nome), "pt-BR");
    });
    return arr;
  }

  function marcado(id) {
    var m = S.rodada && S.rodada.marcados ? S.rodada.marcados[id] : null;
    return m || null;
  }
  function precisa(id) {
    var m = marcado(id);
    return !!(m && m.precisa);
  }
  function decidido(id) {
    return !!marcado(id);
  }
  function decididos() {
    return itensArray().filter(function (it) { return decidido(it.id); }).length;
  }
  function daLista(destino) {
    return ordemLista().filter(function (it) {
      return precisa(it.id) && (!destino || destino === "tudo" || it.destino === destino);
    });
  }
  function feito(id) {
    return !!(S.rodada && S.rodada.feitos && S.rodada.feitos[id]);
  }

  function textoDaLista(destino) {
    var itens = daLista(destino);
    var quando = dataLonga(dataDaLista());
    var cab = destino === "horti" ? "Hiperideal · " + quando
      : destino === "mercado" ? "iFood · " + quando
      : nomeDaLista();
    // Sem o nome da gaveta: um item por linha, direto. A ordem continua a da
    // tela (gaveta por gaveta, A-Z dentro de cada uma), só sem os títulos.
    var linhas = itens.map(linhaDoTexto);
    return cab + "\n\n" + (linhas.length ? linhas.join("\n") : "(nada nesta semana)");
  }

  function linhaDoTexto(it) {
    var m = marcado(it.id) || {};
    var partes = [];
    if (m.qtd) partes.push(String(m.qtd));
    if (it.obs) partes.push(it.obs);
    return partes.length ? it.nome + " — " + partes.join(" · ") : it.nome;
  }

  /* ---------------- desenho das telas ---------------- */

  var CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l6 6L20 6"/></svg>';

  function pilula(acao, valor, ativo, rotulo, extra) {
    return '<button class="pilula" type="button" data-acao="' + acao + '" data-valor="' + valor + '" aria-pressed="' + (ativo ? "true" : "false") + '"' + (extra || "") + '>' + esc(rotulo) + "</button>";
  }

  function desenhaRodada() {
    var alvo = document.getElementById("tela-rodada");
    var arr = ordemLista();

    if (!arr.length) {
      alvo.innerHTML =
        '<div class="card"><h2>Comece pela lista</h2><div class="corpo">' +
        '<p class="sub">Esta é a lista de tudo que costumam comprar — a mesma das Notas do iPhone. ' +
        'Com ela no lugar, quem cuida da casa marca o que vai acabando durante a semana e, na sexta, ' +
        'a compra já está montada: uma lista de frutas e verduras e uma do mercado.</p>' +
        (podeEditar()
          ? '<div class="linha-btns">' +
            '<button class="btn principal" type="button" data-acao="importar">Colar a lista das Notas</button>' +
            '<button class="btn" type="button" data-acao="base">Começar com uma lista base</button>' +
            "</div>"
          : '<div class="nota">A lista ainda não foi montada.</div>') +
        "</div></div>";
      return;
    }

    var marcados = arr.filter(function (it) { return precisa(it.id); });
    var topo =
      '<div class="card"><h2>' + esc(nomeDaLista()) +
      '<span class="cont">' + plural(marcados.length, "marcado", "marcados") + "</span></h2><div class=\"corpo\">" +
      pilulasDaLista(marcados.length) +
      (S.recado ? '<div class="nota" style="margin-top:10px">' + esc(S.recado) + "</div>" : "") +
      '<input class="campo" id="busca-lista" type="search" placeholder="Buscar item" value="' + esc(S.busca) + '" style="margin-top:10px">' +
      "</div></div>";

    var daCasa = arr.filter(function (it) {
      var m = marcado(it.id);
      return m && m.precisa && m.por === "casa";
    });
    var aviso = "";
    if (daCasa.length) {
      aviso = '<div class="card"><h2>Marcado durante a semana<span class="cont">' +
        plural(daCasa.length, "item", "itens") + "</span></h2>";
      daCasa.forEach(function (it) {
        var m = marcado(it.id) || {};
        aviso += '<div class="fila marcado"><span class="caixa">' + CHECK + "</span>" +
          '<span class="nome">' + esc(it.nome) + "</span>" +
          '<span class="meta">' + esc(dataCurta(m.quando || "")) + "</span></div>";
      });
      aviso += "</div>";
    }

    var pe = "";
    if (marcados.length) {
      pe = '<button class="btn principal larga" type="button" data-acao="fechar">' +
        (S.rodada && S.rodada.fechada ? "Atualizar as listas" : "Gerar as listas") +
        " (" + marcados.length + ")</button>";
    }
    var extras = podeEditar()
      ? '<div style="text-align:center;margin-top:10px">' +
        '<button class="btn miuda" type="button" data-acao="faltou">+ Faltou uma coisa que não está na lista</button></div>' +
        '<div style="text-align:center;margin-top:10px">' +
        '<button class="link" type="button" data-acao="nova">Começar uma lista nova</button></div>'
      : "";

    alvo.innerHTML = topo + aviso + listaMarcavel(S.soMarcados ? marcados : arr) + pe + extras;
    ligarBusca("busca-lista", "tela-rodada");
  }

  function ligarBusca(idCampo, idTela) {
    aplicarBusca(idTela);
    var campo = document.getElementById(idCampo);
    if (campo) campo.addEventListener("input", function () { S.busca = campo.value; aplicarBusca(idTela); });
  }

  function listaMarcavel(arr) {
    if (!arr.length) return '<div class="card"><div class="vazio">Nada marcado ainda.</div></div>';
    var html = '<div class="card papel">';
    var catAtual = null;
    arr.forEach(function (it) {
      if (it.categoria !== catAtual) {
        catAtual = it.categoria;
        html += '<div class="grupo-titulo">' + esc(catAtual || "Outros") + "</div>";
      }
      var aviso = avisoFrequencia(it.id);
      var quer = precisa(it.id);
      var m = marcado(it.id) || {};
      // Marcou, os números aparecem ao lado na hora: um toque marca, o outro
      // diz quanto, e não há um terceiro no meio só para abrir a fileira. Em
      // tela estreita a fileira desce para a linha de baixo, colada no item.
      // A fileira de números fica aberta só no item que ele está mexendo. Com
      // vários marcados, dez botões embaixo de cada um viravam uma parede e o
      // nome do item sumia no meio. Escolhido o número, a fileira vira uma
      // pastilha pequena ao lado do nome; um toque nela reabre.
      var teclas = "";
      var pastilha = "";
      if (quer && S.abertoQtd === it.id) {
        teclas = '<div class="teclas">' +
          (m.naoSei && !m.qtd ? '<span class="nao-sabe">não sabe</span>' : "");
        for (var n = 1; n <= 9; n++) {
          teclas += '<button class="tecla' + (m.qtd === n ? " escolhida" : "") + '" type="button" ' +
            'data-acao="quanto-num" data-id="' + it.id + '" data-valor="' + n + '">' + n + "</button>";
        }
        teclas += '<button class="tecla mais' + (m.qtd > 9 ? " escolhida" : "") + '" type="button" ' +
          'data-acao="quanto-mais" data-id="' + it.id + '">' + (m.qtd > 9 ? esc(m.qtd) : "9+") + "</button>";
        teclas += "</div>";
      } else if (quer) {
        pastilha = '<button class="pastilha' + (m.naoSei && !m.qtd ? " sem" : "") + '" type="button" ' +
          'data-acao="abrir-qtd" data-id="' + it.id + '" aria-label="mudar a quantidade">' +
          (m.naoSei && !m.qtd ? "?" : esc(m.qtd || 1)) + "</button>";
      }
      html += '<div class="fila' + (quer ? " marcado" : "") +
        '" data-busca="' + esc(normalizar(it.nome + " " + it.categoria)) + '">' +
        '<button class="caixa" type="button" data-acao="alternar" data-id="' + it.id + '" aria-label="marcar ou desmarcar">' + CHECK + "</button>" +
        '<button class="nome nome-btn" type="button" data-acao="alternar" data-id="' + it.id + '">' + esc(it.nome) +
        (aviso ? '<span class="freq">' + esc(aviso) + "</span>" : "") +
        "</button>" + pastilha +
        '<span class="resto" data-acao="alternar" data-id="' + it.id + '"></span>' +
        teclas + "</div>";
    });
    return html + "</div>";
  }

  function pilulasDaLista(marcados) {
    return '<div class="pilulas">' +
      pilula("so-marcados", "tudo", !S.soMarcados, "A lista toda") +
      pilula("so-marcados", "marcados", S.soMarcados, "Só os marcados (" + marcados + ")") +
      "</div>";
  }

  // A tela de quem cuida da casa é uma pergunta por vez: item grande, Não ou
  // Sim, e quando é Sim abre o quanto, com teclado numérico e "não sei" — quem
  // lembra de uma coisa por vez nem sempre sabe a quantidade.
  function desenhaPergunta() {
    var alvo = document.getElementById("tela-rodada");
    var fila = universoDaCasa();

    if (!fila.length) {
      alvo.innerHTML = '<div class="card"><div class="vazio">A lista ainda não foi montada.</div></div>';
      return;
    }
    if (S.perguntaIdx > fila.length) S.perguntaIdx = fila.length;

    var respondidos = fila.filter(function (it) { return respondeuEla(it.id); }).length;
    var marcados = fila.filter(function (it) { return precisa(it.id); }).length;
    var pct = Math.round((respondidos / fila.length) * 100);

    var topo = '<div class="card"><h2>O que está acabando' +
      '<span class="cont">' + plural(marcados, "marcado", "marcados") + "</span></h2><div class=\"corpo\">" +
      '<div class="progresso"><i style="width:' + pct + '%"></i></div>' +
      '<div class="progresso-txt"><span>' + respondidos + " de " + fila.length + " respondidos</span><span>" + pct + "%</span></div>" +
      "</div></div>";

    if (S.perguntaIdx >= fila.length) {
      var lista = fila.filter(function (it) { return precisa(it.id); });
      var resumo = '<div class="card"><h2>Já pode parar<span class="cont">' +
        plural(lista.length, "item", "itens") + "</span></h2>";
      if (lista.length) {
        lista.forEach(function (it) {
          var m = marcado(it.id) || {};
          resumo += '<div class="fila marcado"><span class="caixa">' + CHECK + "</span>" +
            '<span class="nome">' + esc(it.nome) + "</span>" +
            '<span class="meta">' + esc(m.qtd ? m.qtd : m.naoSei ? "não sei" : "") + "</span></div>";
        });
      } else {
        resumo += '<div class="vazio">Nada precisou desta vez.</div>';
      }
      resumo += '<div class="corpo"><div class="linha-btns">' +
        '<button class="btn" type="button" data-acao="pergunta-voltar">Voltar um item</button>' +
        '<button class="btn" type="button" data-acao="pergunta-recomecar">Rever desde o começo</button>' +
        "</div></div></div>";
      alvo.innerHTML = topo + resumo;
      return;
    }

    var it = fila[S.perguntaIdx];
    var m = marcado(it.id) || {};
    var aviso = avisoFrequencia(it.id);
    var jaRespondeu = respondeuEla(it.id);

    var corpo;
    if (S.perguntando === it.id) {
      // Teclado na própria tela, em vez do teclado do sistema: a resposta é
      // sempre um número pequeno, e o do sistema cobre metade da tela e some
      // com o item que está sendo perguntado.
      var mostrador = S.digitando === "" ? "1" : S.digitando;
      corpo = '<div class="quanto-passo">' +
        '<p class="sub" style="text-align:center;margin-bottom:6px">Quantos precisa?</p>' +
        '<div class="mostrador">' + esc(mostrador) + "</div>" +
        '<div class="numpad">';
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function (n) {
        corpo += '<button class="tecla-num" type="button" data-acao="digito" data-valor="' + n + '">' + n + "</button>";
      });
      corpo += '<button class="tecla-num apaga" type="button" data-acao="apaga" aria-label="apagar">⌫</button>' +
        '<button class="tecla-num" type="button" data-acao="digito" data-valor="0">0</button>' +
        '<button class="tecla-num pronto" type="button" data-acao="quanto-ok" data-id="' + it.id + '">Pronto</button>' +
        "</div>" +
        '<div class="linha-btns" style="margin-top:10px">' +
        '<button class="btn larga" type="button" data-acao="quanto-nao-sei" data-id="' + it.id + '">Não sei</button>' +
        "</div></div>";
    } else {
      corpo = '<div class="decisao">' +
        '<button class="btn nao" type="button" data-acao="responder" data-id="' + it.id + '" data-valor="0">Não</button>' +
        '<button class="btn sim" type="button" data-acao="responder" data-id="' + it.id + '" data-valor="1">Sim</button>' +
        "</div>";
    }

    alvo.innerHTML = topo +
      '<div class="card"><div class="corpo">' +
      '<div class="foco">' +
      '<div class="cat">' + esc(it.categoria || "") + "</div>" +
      '<div class="nome">' + esc(it.nome) + "</div>" +
      '<div class="dica' + (aviso ? " quente" : "") + '">' +
      esc(aviso || (jaRespondeu ? (m.precisa ? "você marcou" + (m.qtd ? ": " + m.qtd : m.naoSei ? ": não sei" : "") : "você disse que não") : "")) +
      "</div></div>" +
      corpo +
      '<div class="pe">' +
      '<button class="link" type="button" data-acao="pergunta-voltar"' + (S.perguntaIdx === 0 ? " disabled" : "") + ">← Voltar</button>" +
      '<span class="meta">' + (S.perguntaIdx + 1) + " de " + fila.length + "</span>" +
      '<button class="link" type="button" data-acao="pergunta-pular">Pular →</button>' +
      "</div></div></div>";

  }

  function avancarPergunta() {
    var fila = universoDaCasa();
    S.perguntando = null;
    S.perguntaIdx++;
    while (S.perguntaIdx < fila.length && respondeuEla(fila[S.perguntaIdx].id)) S.perguntaIdx++;
    desenhar();
  }

  async function confirmarQuanto(id) {
    var quanto = Number(S.digitando === "" ? 1 : S.digitando);
    await marcar(id, true, quanto > 0 ? quanto : 1);
    S.digitando = "";
    S.digitou = false;
    avancarPergunta();
  }

  function cartaoSemana() {
    var itens = daLista("tudo");
    var html = '<div class="card"><h2>' + esc(nomeDaLista()) + '<span class="cont">' +
      plural(itens.length, "item", "itens") + "</span></h2>";
    if (!itens.length) {
      return html + '<div class="vazio">Nada marcado nesta semana.</div></div>';
    }
    var catAtual = null;
    itens.forEach(function (it) {
      if (it.categoria !== catAtual) {
        catAtual = it.categoria;
        html += '<div class="grupo-titulo">' + esc(catAtual || "Outros") + "</div>";
      }
      var mq = marcado(it.id) || {};
      html += '<div class="fila' + (feito(it.id) ? " feito" : "") + '">' +
        '<button class="caixa" type="button" data-acao="feito" data-id="' + it.id + '" aria-label="marcar como pedido">' + CHECK + "</button>" +
        '<span class="nome">' + esc(it.nome) + (it.obs ? ' <span class="meta">(' + esc(it.obs) + ")</span>" : "") + "</span>" +
        (mq.qtd ? '<span class="meta">' + esc(mq.qtd) + "</span>" : mq.naoSei ? '<span class="meta">não sei</span>' : "") +
        "</div>";
    });
    return html + "</div>";
  }

  var EXPORTACOES = [
    { chave: "tudo", nome: "Lista toda" },
    { chave: "horti", nome: "Hiperideal" },
    { chave: "mercado", nome: "iFood" }
  ];

  function cartaoExportar() {
    var html = '<div class="card"><h2>Exportar</h2>';
    EXPORTACOES.forEach(function (e) {
      var quantos = daLista(e.chave).length;
      html += '<div class="exp">' +
        '<div class="exp-nome">' + esc(e.nome) +
        '<span class="meta"> · ' + plural(quantos, "item", "itens") + "</span>" +
        "</div>" +
        '<div class="exp-botoes">' +
        '<button class="btn miuda" type="button" data-acao="copiar" data-valor="' + e.chave + '"' +
        (quantos ? "" : " disabled") + ">Copiar</button>" +
        "</div>" +
        '<div class="exp-texto" id="txt-' + e.chave + '" hidden><textarea class="texto-lista" readonly>' +
        esc(textoDaLista(e.chave)) + "</textarea></div>" +
        "</div>";
    });
    return html + "</div>";
  }

  function desenhaListas() {
    var alvo = document.getElementById("tela-listas");
    var arr = ordemLista();
    if (!arr.length) { alvo.innerHTML = '<div class="card"><div class="vazio">Sem lista ainda. Comece pela aba Itens.</div></div>'; return; }
    alvo.innerHTML = cartaoSemana() + cartaoExportar();
  }

  function desenhaItens() {
    var alvo = document.getElementById("tela-itens");
    var arr = ordemLista();
    var cabecalho = '<div class="card"><h2>Lista mestra<span class="cont">' + arr.length + " itens</span></h2><div class=\"corpo\">" +
      (podeEditar()
        ? '<div class="linha-btns" style="margin-bottom:10px">' +
          '<button class="btn" type="button" data-acao="novo">+ Item</button>' +
          '<button class="btn" type="button" data-acao="importar">Colar das Notas</button>' +
          (arr.length ? "" : '<button class="btn" type="button" data-acao="base">Lista base</button>') +
          "</div>"
        : '<p class="sub">Esta é a lista fixa da casa, e ela não se mexe por aqui. ' +
          'Para pedir uma coisa que não está nela, use “+ Faltou uma coisa” na aba Semana.</p>') +
      '<input class="campo" id="busca" type="search" placeholder="Buscar item" value="' + esc(S.busca) + '">' +
      "</div></div>";

    if (!arr.length) {
      alvo.innerHTML = cabecalho + '<div class="card"><div class="vazio">Nenhum item ainda.</div></div>';
      return;
    }

    var html = '<div class="card">';
    var catAtual = null;
    var visiveis = arr;
    visiveis.forEach(function (it) {
      if (it.categoria !== catAtual) {
        catAtual = it.categoria;
        html += '<div class="grupo-titulo" data-grupo="' + esc(normalizar(catAtual)) + '">' + esc(catAtual || "Outros") + "</div>";
      }
      var e = estat(it.id);
      var edita = podeEditar();
      html += "<" + (edita ? "button" : "div") + ' class="fila"' +
        (edita ? ' type="button" data-acao="editar" data-id="' + it.id + '"' : "") +
        ' data-busca="' + esc(normalizar(it.nome + " " + it.categoria)) + '">' +
        '<span class="nome">' + esc(it.nome) + "</span>" +
        '<span class="meta">' + esc(e.vezes ? e.vezes + "x" : "") + "</span>" +
        "</" + (edita ? "button" : "div") + ">";
    });
    // Carimbo da versão: quando algo parecer "código antigo fazendo o app
    // mudar as coisas", esta linha diz se o celular está com a página de agora
    // ou com uma cópia guardada pelo navegador.
    var carimbo = window.MERCADO_VERSAO
      ? '<div class="versao">versão de ' + esc(window.MERCADO_VERSAO) + " · " +
        (Store.temBanco() ? "compartilhado" : "só neste aparelho") + "</div>"
      : "";
    alvo.innerHTML = cabecalho + html + "</div>" + cartaoConvites() + carimbo;
    aplicarBusca();
    var campo = document.getElementById("busca");
    if (campo) {
      campo.addEventListener("input", function () { S.busca = campo.value; aplicarBusca(); });
    }
  }

  // Quem é quem passa a vir só do link: cada pessoa abre o seu e a página não
  // pergunta nem mostra nada disso. Os links moram aqui, em Itens, que é tela
  // de quem edita.
  function cartaoConvites() {
    if (!podeEditar() || Store.comoGuarda() !== "firebase") return "";
    return '<div class="card"><h2>Links de quem usa</h2><div class="corpo">' +
      '<p class="sub">Cada link abre a página já no papel certo, sem pedir senha e sem perguntar quem é. ' +
      "O de vocês faz tudo; o de quem cuida da casa só responde as perguntas.</p>" +
      '<div class="linha-btns">' +
      '<button class="btn miuda" type="button" data-acao="convidar" data-valor="vini">Para nós dois</button>' +
      '<button class="btn miuda" type="button" data-acao="convidar" data-valor="casa">Para quem cuida da casa</button>' +
      "</div>" +
      '<div class="aviso-copia" id="convite-aviso">O link carrega a senha: mande só para quem pode mexer na lista.</div>' +
      '<div style="text-align:center;margin-top:14px">' +
      '<button class="link" type="button" data-acao="esquecer">Esquecer a senha neste aparelho</button></div>' +
      "</div></div>";
  }

  function aplicarBusca(ondeId) {
    var termo = normalizar(S.busca);
    var alvo = document.getElementById(ondeId || "tela-itens");
    if (!alvo) return;
    alvo.querySelectorAll(".fila[data-busca]").forEach(function (el) {
      el.hidden = !!termo && el.getAttribute("data-busca").indexOf(termo) < 0;
    });
    alvo.querySelectorAll(".grupo-titulo").forEach(function (t) {
      var algum = false, n = t.nextElementSibling;
      while (n && n.classList.contains("fila")) { if (!n.hidden) algum = true; n = n.nextElementSibling; }
      t.hidden = !algum;
    });
  }

  function desenhar() {
    var y = window.scrollY;
    var soCasa = S.quem === "casa";
    document.querySelector(".abas").hidden = soCasa;
    if (soCasa) S.tela = "rodada";
    ["rodada", "listas", "itens"].forEach(function (t) {
      document.getElementById("tela-" + t).hidden = S.tela !== t;
    });
    document.querySelectorAll(".abas .aba").forEach(function (b) {
      b.setAttribute("aria-current", b.getAttribute("data-tela") === S.tela ? "true" : "false");
    });
    if (soCasa) desenhaPergunta();
    else if (S.tela === "rodada") desenhaRodada();
    else if (S.tela === "listas") desenhaListas();
    else desenhaItens();
    window.scrollTo(0, y);
  }

  /* ---------------- ações ---------------- */

  async function garantirRodada() {
    if (S.rodada && S.rodada.data) return;
    var nova = { data: hoje(), marcados: {}, feitos: {}, fechada: false };
    S.rodada = nova;
    await Store.gravarDoc(CAMINHOS.rodada, nova);
  }

  async function marcar(id, quer, quanto) {
    await garantirRodada();
    var m = marcado(id) || {};
    var corpo = { precisa: !!quer, quando: hoje(), por: S.quem || "" };
    if (quanto !== undefined) {
      corpo.qtd = quanto === null ? null : Number(quanto);
      corpo.naoSei = quanto === null;
    } else if (quer) {
      // Marcou sem dizer quanto: um é o caso comum, e quem quiser outro número
      // toca do lado. Mexer numa lista não devia começar por uma pergunta.
      corpo.qtd = m.qtd || 1;
      corpo.naoSei = false;
    }
    S.rodada.marcados = S.rodada.marcados || {};
    S.rodada.marcados[id] = Object.assign({}, m, corpo);
    desenhar();
    await Store.mesclarDoc(CAMINHOS.rodada, { marcados: (function (o) { o[id] = corpo; return o; })({}) });
  }

  async function alternarFeito(id) { return definirFeito(id, !feito(id)); }

  async function definirFeito(id, novo) {
    await garantirRodada();
    S.rodada.feitos = S.rodada.feitos || {};
    S.rodada.feitos[id] = novo;
    desenhar();
    await Store.mesclarDoc(CAMINHOS.rodada, { feitos: (function (o) { o[id] = novo; return o; })({}) });
  }

  async function fecharRodada() {
    await garantirRodada();
    var ids = itensArray().filter(function (it) { return precisa(it.id); }).map(function (it) { return it.id; });
    var data = S.rodada.data || hoje();
    var rodadas = Object.assign({}, S.historico.rodadas || {});
    rodadas[data] = ids;
    var chaves = Object.keys(rodadas).sort();
    while (chaves.length > 60) { delete rodadas[chaves.shift()]; }
    S.historico.rodadas = rodadas;
    S.rodada.fechada = true;
    S.tela = "listas";
    desenhar();
    await Store.mesclarDoc(CAMINHOS.historico, { rodadas: (function (o) { o[data] = ids; return o; })({}) });
    await Store.mesclarDoc(CAMINHOS.rodada, { fechada: true });
  }

  async function novaRodada() {
    if (S.rodada && decididos() && !S.rodada.fechada) {
      if (!confirm("A " + nomeDaLista().toLowerCase() + " ainda não virou pedido. Começar uma nova mesmo assim?")) return;
    }
    var nova = { data: hoje(), marcados: {}, feitos: {}, fechada: false };
    S.rodada = nova;
    S.tela = "rodada";
    desenhar();
    await Store.gravarDoc(CAMINHOS.rodada, nova);
  }

  async function gravarItem(id, dados) {
    S.itens[id] = Object.assign({}, S.itens[id] || {}, dados);
    desenhar();
    await Store.mesclarDoc(CAMINHOS.itens, { itens: (function (o) { o[id] = dados; return o; })({}) });
  }

  async function excluirItem(id) {
    var doc = (await Store.lerDoc(CAMINHOS.itens)) || { itens: {} };
    var itens = Object.assign({}, doc.itens || {});
    delete itens[id];
    S.itens = itens;
    desenhar();
    await Store.gravarDoc(CAMINHOS.itens, { itens: itens });
  }

  async function adicionarVarios(lista, substituir) {
    var base = substituir ? {} : Object.assign({}, S.itens);
    var maiorOrdem = 0;
    Object.keys(base).forEach(function (k) { maiorOrdem = Math.max(maiorOrdem, base[k].ordem || 0); });
    var novos = {};
    var existentes = {};
    Object.keys(base).forEach(function (k) { existentes[normalizar(base[k].nome)] = true; });
    lista.forEach(function (it, i) {
      var chave = normalizar(it.nome);
      if (existentes[chave]) return;
      existentes[chave] = true;
      novos[novoId()] = {
        nome: it.nome, categoria: it.categoria, destino: it.destino,
        obs: it.obs || "", ordem: maiorOrdem + i + 1
      };
    });
    if (substituir) {
      S.itens = novos;
      await Store.gravarDoc(CAMINHOS.itens, { itens: novos });
      await novaRodada();
    } else {
      Object.assign(S.itens, novos);
      await Store.mesclarDoc(CAMINHOS.itens, { itens: novos });
    }
    desenhar();
    return Object.keys(novos).length;
  }

  function copiar(texto, botao) {
    function feedback(ok) {
      if (!botao) return;
      var antes = botao.textContent;
      botao.textContent = ok ? "Copiado" : "Copie do texto abaixo";
      setTimeout(function () { botao.textContent = antes; }, 1800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texto).then(function () { feedback(true); }, function () { manual(); });
    } else { manual(); }
    function manual() {
      var ta = document.createElement("textarea");
      ta.value = texto;
      ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      feedback(ok);
      if (botao) {
        var caixa = document.getElementById("txt-" + botao.getAttribute("data-valor"));
        if (caixa && !ok) caixa.hidden = false;
      }
    }
  }

  /* ---------------- modais ---------------- */

  var previa = [];

  function abrirModal(html) {
    document.getElementById("area-modal").innerHTML =
      '<div class="fundo-modal" data-acao="fundo">' + html + "</div>";
  }
  function fecharModal() { document.getElementById("area-modal").innerHTML = ""; previa = []; }

  function modalImportar() {
    abrirModal(
      '<div class="modal"><h3>Colar a lista das Notas<button class="fechar" type="button" data-acao="fechar-modal">×</button></h3>' +
      '<div class="corpo"><p class="sub">Cole o texto inteiro da nota do iPhone. Um item por linha; marcadores, caixinhas e numeração são ignorados. ' +
      'Linha em maiúsculas ou terminada em dois-pontos vira categoria.</p>' +
      '<textarea class="campo" id="txt-importar" rows="6" placeholder="HORTIFRUTI&#10;- Banana&#10;- Tomate&#10;&#10;MERCEARIA&#10;- Arroz&#10;- Café"></textarea>' +
      '<div id="previa-area"></div>' +
      "</div></div>"
    );
    var t = document.getElementById("txt-importar");
    var espera = null;
    t.addEventListener("input", function () {
      clearTimeout(espera);
      espera = setTimeout(function () {
        previa = analisarTexto(t.value);
        desenhaPrevia();
      }, 200);
    });
    setTimeout(function () { t.focus(); }, 40);
  }

  function desenhaPrevia() {
    var area = document.getElementById("previa-area");
    if (!area) return;
    if (!previa.length) {
      area.innerHTML = document.getElementById("txt-importar").value.trim()
        ? '<div class="nota" style="margin-top:10px">Não achei nenhum item nesse texto.</div>' : "";
      return;
    }
    var jaTem = {};
    Object.keys(S.itens).forEach(function (k) { jaTem[normalizar(S.itens[k].nome)] = true; });
    var novos = previa.filter(function (p) { return !jaTem[normalizar(p.nome)]; }).length;
    var html = '<div class="linha-btns" style="margin-top:12px">' +
      '<button class="btn principal" type="button" data-acao="importar-add"' + (novos ? "" : " disabled") + ">Adicionar " + plural(novos, "item", "itens") + "</button>" +
      '<button class="btn" type="button" data-acao="importar-sub">Substituir a lista toda</button></div>' +
      '<p class="sub" style="margin-top:10px">' + previa.length + " itens lidos" + (novos < previa.length ? " · " + (previa.length - novos) + " já estão na lista" : "") +
      ". Confira embaixo; toque na etiqueta para trocar de lista.</p>" +
      '<div class="previa">';
    previa.forEach(function (p, i) {
      html += '<div class="fila ' + p.destino + (jaTem[normalizar(p.nome)] ? " feito" : "") + '">' +
        '<span class="nome">' + esc(p.nome) + '<span class="meta"> · ' + esc(p.categoria) + "</span></span>" +
        '<button class="tag ' + p.destino + '" type="button" data-acao="virar" data-valor="' + i + '">' +
        (p.destino === "horti" ? "Hiperideal" : "Mercado") + "</button></div>";
    });
    html += "</div>";
    area.innerHTML = html;
  }

  // Desmarcar apaga o item da compra da semana para todo mundo, e ninguém
  // repara na falta até o mercado chegar sem ele. Toque em item marcado
  // pergunta antes; marcar continua sendo um toque só.
  function modalDesmarcar(id) {
    var it = S.itens[id];
    if (!it) return;
    abrirModal(
      '<div class="modal"><h3>Tirar da compra?<button class="fechar" type="button" data-acao="fechar-modal">×</button></h3>' +
      '<div class="corpo"><p class="sub" style="margin-bottom:0"><b>' + esc(it.nome) + "</b> está marcado como " +
      "necessário nesta semana. Tirando, ele sai da compra.</p>" +
      '<div class="acoes-fim"><div class="linha-btns">' +
      '<button class="btn principal" type="button" data-acao="desmarcar" data-id="' + id + '">Tirar da compra</button>' +
      '<button class="btn" type="button" data-acao="fechar-modal">Deixar marcado</button>' +
      "</div></div></div></div>"
    );
  }

  function modalQuanto(id) {
    var it = S.itens[id];
    if (!it) return;
    var m = marcado(id) || {};
    abrirModal(
      '<div class="modal"><h3>Quanto de ' + esc(it.nome) + "?" +
      '<button class="fechar" type="button" data-acao="fechar-modal">×</button></h3>' +
      '<div class="corpo">' +
      '<input class="campo campo-quanto" id="f-quanto-item" type="text" inputmode="numeric" ' +
      'pattern="[0-9]*" autocomplete="off" value="' + esc(m.qtd ? m.qtd : "") + '" placeholder="0">' +
      '<div class="acoes-fim">' +
      '<button class="btn principal larga" type="button" data-acao="quanto-item-ok" data-id="' + id + '">Pronto</button>' +
      "</div></div></div>"
    );
    var campo = document.getElementById("f-quanto-item");
    setTimeout(function () { campo.focus(); campo.select(); }, 60);
    campo.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") { ev.preventDefault(); salvarQuantoItem(id); }
    });
  }

  async function salvarQuantoItem(id) {
    var campo = document.getElementById("f-quanto-item");
    var bruto = campo ? campo.value.replace(/[^\d]/g, "") : "";
    S.abertoQtd = null;
    await marcar(id, true, bruto === "" ? null : Number(bruto));
    fecharModal();
    desenhar();
  }

  function modalFaltou() {
    var opcoes = gavetas();
    abrirModal(
      '<div class="modal"><h3>Faltou o quê?<button class="fechar" type="button" data-acao="fechar-modal">×</button></h3>' +
      '<div class="corpo"><p class="sub">Entra nesta lista e passa a fazer parte da lista da casa, ' +
      "para aparecer nas próximas.</p>" +
      '<div class="campo-bloco"><label class="rotulo" for="f-faltou">O que é</label>' +
      '<input class="campo" id="f-faltou" placeholder="Papel alumínio" autocomplete="off"></div>' +
      '<div class="campo-bloco"><label class="rotulo" for="f-faltou-cat">Em qual gaveta</label>' +
      '<select class="campo" id="f-faltou-cat">' +
      opcoes.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("") +
      "</select></div>" +
      '<div class="acoes-fim">' +
      '<button class="btn principal larga" type="button" data-acao="salvar-faltou">Adicionar</button>' +
      "</div></div></div>"
    );
    var campo = document.getElementById("f-faltou");
    var gaveta = document.getElementById("f-faltou-cat");
    gaveta.value = SEM_GAVETA;
    // Enquanto ele não escolher, a gaveta acompanha o que está sendo digitado.
    // Escolheu, para de acompanhar: palpite não desfaz decisão de gente.
    var escolhida = false;
    gaveta.addEventListener("change", function () { escolhida = true; });
    campo.addEventListener("input", function () {
      if (escolhida) return;
      var nome = campo.value.trim();
      gaveta.value = nome ? adivinhar(nome, null).categoria : SEM_GAVETA;
    });
    setTimeout(function () { campo.focus(); }, 40);
    campo.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter") { ev.preventDefault(); salvarFaltou(); }
    });
  }

  async function salvarFaltou() {
    var campo = document.getElementById("f-faltou");
    var nome = campo.value.trim();
    if (!nome) { campo.focus(); return; }
    var existente = itensArray().filter(function (x) { return normalizar(x.nome) === normalizar(nome); })[0];
    var id = existente ? existente.id : novoId();
    if (!existente) {
      var seletor = document.getElementById("f-faltou-cat");
      var palpite = adivinhar(nome, null);
      var cat = seletor ? seletor.value : palpite.categoria;
      // Mantendo a gaveta do palpite, o dono dela vem do palpite também (é ele
      // que sabe que cheiro-verde é do Hiperideal). Trocando, vem do padrão da
      // gaveta escolhida, e o resto se ajusta no item.
      var dono = cat === palpite.categoria ? palpite.destino : donoDaGaveta(cat);
      var maior = 0;
      itensArray().forEach(function (x) { maior = Math.max(maior, x.ordem || 0); });
      await gravarItem(id, {
        nome: nome, categoria: cat, destino: dono,
        obs: "", ordem: maior + 1
      });
    }
    await marcar(id, true);
    S.recado = nome + " entrou na " + nomeDaLista().toLowerCase() + ".";
    fecharModal();
    desenhar();
  }

  function modalItem(id) {
    var it = id ? S.itens[id] : null;
    var cats = {};
    itensArray().forEach(function (x) { if (x.categoria) cats[x.categoria] = true; });
    var opcoes = Object.keys(cats).sort().map(function (c) { return '<option value="' + esc(c) + '"></option>'; }).join("");
    abrirModal(
      '<div class="modal"><h3>' + (it ? "Editar item" : "Novo item") + '<button class="fechar" type="button" data-acao="fechar-modal">×</button></h3>' +
      '<div class="corpo">' +
      '<div class="campo-bloco"><label class="rotulo" for="f-nome">Nome</label>' +
      '<input class="campo" id="f-nome" value="' + esc(it ? it.nome : "") + '" placeholder="Banana prata"></div>' +
      '<div class="campo-bloco"><label class="rotulo" for="f-cat">Categoria</label>' +
      '<input class="campo" id="f-cat" list="lista-cats" value="' + esc(it ? it.categoria : "") + '" placeholder="Mercearia">' +
      '<datalist id="lista-cats">' + opcoes + "</datalist></div>" +
      '<div class="campo-bloco"><span class="rotulo">Quem pede</span><div class="pilulas" id="f-destino">' +
      pilula("destino", "horti", (it ? it.destino : "mercado") === "horti", "Hiperideal · esposa") +
      pilula("destino", "mercado", (it ? it.destino : "mercado") !== "horti", "iFood · você") +
      "</div></div>" +

      '<div class="campo-bloco"><label class="rotulo" for="f-obs">Observação fixa (opcional)</label>' +
      '<input class="campo" id="f-obs" value="' + esc(it ? it.obs || "" : "") + '" placeholder="da marca X, bem verde"></div>' +
      '<div class="acoes-fim"><div class="linha-btns"><button class="btn principal" type="button" data-acao="salvar-item" data-id="' + (id || "") + '">Salvar</button>' +
      (id ? '<button class="btn" type="button" data-acao="excluir-item" data-id="' + id + '">Excluir</button>' : "") +
      "</div></div></div></div>"
    );
    setTimeout(function () { var n = document.getElementById("f-nome"); if (n && !it) n.focus(); }, 40);
  }

  /* ---------------- eventos ---------------- */

  function acaoDe(alvo) {
    var el = alvo.closest("[data-acao]");
    return el ? { el: el, acao: el.getAttribute("data-acao"), valor: el.getAttribute("data-valor"), id: el.getAttribute("data-id") } : null;
  }

  document.getElementById("app").addEventListener("click", function (ev) {
    var a = acaoDe(ev.target);
    if (!a) return;
    if (S.recado && a.acao !== "faltou") S.recado = "";
    var arr = ordemLista();
    switch (a.acao) {
      case "so-marcados": S.soMarcados = a.valor === "marcados"; desenhar(); break;
      case "faltou": if (podeEditar()) modalFaltou(); break;
      case "quanto-num": S.abertoQtd = null; marcar(a.id, true, Number(a.valor)); break;
      case "quanto-mais": modalQuanto(a.id); break;
      case "abrir-qtd": S.abertoQtd = a.id; desenhar(); break;
      case "convidar": {
        var senhaGuardada = "";
        try { senhaGuardada = localStorage.getItem("mercado:senha") || ""; } catch (e) {}
        var caixa = document.getElementById("convite-aviso");
        if (!senhaGuardada) {
          caixa.textContent = "Este aparelho entrou antes de eu guardar a senha. Toque em \u201cEsquecer a senha neste aparelho\u201d, entre de novo e o link fica pronto.";
          break;
        }
        var papel = a.valor;
        var convite = location.origin + location.pathname +
          "#casa=" + encodeURIComponent(senhaGuardada) + "&papel=" + papel;
        copiar(convite, a.el);
        caixa.textContent = "Link copiado: " +
          (papel === "casa" ? "quem cuida da casa" : "vocês dois") +
          ". Ele carrega a senha, então mande só para quem é.";
        break;
      }
      case "esquecer":
        if (confirm("Este aparelho vai pedir a senha de novo na próxima vez. Continuar?")) {
          try {
            localStorage.removeItem("mercado:chave");
            localStorage.removeItem("mercado:senha");
            localStorage.removeItem("mercado:quem");
          } catch (e) {}
          location.reload();
        }
        break;
      case "responder":
        if (a.valor === "1") {
          var jaTem = marcado(a.id) || {};
          S.perguntando = a.id;
          S.digitando = jaTem.qtd ? String(jaTem.qtd) : "";
          S.digitou = false;
          desenhar();
        }
        else { marcar(a.id, false); avancarPergunta(); }
        break;
      case "quanto-ok": confirmarQuanto(a.id); break;
      case "digito":
        // O primeiro toque troca o 1 sugerido; do segundo em diante, acumula.
        S.digitando = (S.digitou ? S.digitando : "") + a.valor;
        S.digitando = S.digitando.replace(/^0+(?=\d)/, "").slice(0, 3);
        S.digitou = true;
        desenhar();
        break;
      case "apaga":
        S.digitando = (S.digitou ? S.digitando : "1").slice(0, -1);
        S.digitou = true;
        desenhar();
        break;
      case "quanto-nao-sei":
        marcar(a.id, true, null);
        S.digitando = "";
        S.digitou = false;
        avancarPergunta();
        break;
      case "pergunta-voltar":
        if (S.perguntaIdx > 0) { S.perguntaIdx--; S.perguntando = null; desenhar(); }
        break;
      case "pergunta-pular":
        S.perguntando = null; S.perguntaIdx++; desenhar();
        break;
      case "pergunta-recomecar":
        S.perguntaIdx = 0; S.perguntando = null; desenhar();
        break;
      case "alternar":
        if (precisa(a.id)) { modalDesmarcar(a.id); }
        else { S.abertoQtd = a.id; marcar(a.id, true); }
        break;
      case "feito": alternarFeito(a.id); break;
      case "fechar": fecharRodada(); break;
      case "nova": if (podeEditar()) novaRodada(); break;
      case "copiar": copiar(textoDaLista(a.valor), a.el); break;
      case "ver-texto": var c = document.getElementById("txt-" + a.valor); if (c) c.hidden = !c.hidden; break;
      case "editar": modalItem(a.id); break;
      case "novo": modalItem(null); break;
      case "importar": modalImportar(); break;
      case "base":
        adicionarVarios(analisarTexto(LISTA_BASE.join("\n")), false);
        break;
    }
  });

  document.querySelector(".abas").addEventListener("click", function (ev) {
    var b = ev.target.closest(".aba");
    if (!b) return;
    S.tela = b.getAttribute("data-tela");
    desenhar();
  });

  document.getElementById("area-modal").addEventListener("click", function (ev) {
    var a = acaoDe(ev.target);
    if (!a) {
      if (ev.target.classList.contains("fundo-modal")) fecharModal();
      return;
    }
    switch (a.acao) {
      case "fechar-modal": fecharModal(); break;
      case "salvar-faltou": salvarFaltou(); break;
      case "quanto-item-ok": salvarQuantoItem(a.id); break;
      case "desmarcar": marcar(a.id, false); fecharModal(); break;
      case "virar":
        var i = Number(a.valor);
        previa[i].destino = previa[i].destino === "horti" ? "mercado" : "horti";
        if (previa[i].destino === "horti" && previa[i].categoria === "Outros") previa[i].categoria = "Frutas e verduras";
        desenhaPrevia();
        break;
      case "importar-add":
        adicionarVarios(previa, false).then(function () { fecharModal(); });
        break;
      case "importar-sub":
        if (confirm("Isso apaga a lista atual e põe estes " + previa.length + " itens no lugar. Continuar?")) {
          adicionarVarios(previa, true).then(function () { fecharModal(); });
        }
        break;
      case "destino":
        document.querySelectorAll("#f-destino .pilula").forEach(function (p) {
          p.setAttribute("aria-pressed", p === a.el ? "true" : "false");
        });
        break;
      case "salvar-item":
        var nome = document.getElementById("f-nome").value.trim();
        if (!nome) { document.getElementById("f-nome").focus(); return; }
        var escolhido = document.querySelector('#f-destino .pilula[aria-pressed="true"]');
        var dest = escolhido ? escolhido.getAttribute("data-valor") : "mercado";
        var cat = document.getElementById("f-cat").value.trim() || adivinhar(nome, null).categoria;
        var dados = {
          nome: nome, categoria: cat, destino: dest,
          obs: document.getElementById("f-obs").value.trim()
        };
        if (!a.id) {
          var maior = 0;
          itensArray().forEach(function (x) { maior = Math.max(maior, x.ordem || 0); });
          dados.ordem = maior + 1;
        }
        gravarItem(a.id || novoId(), dados);
        fecharModal();
        break;
      case "excluir-item":
        if (confirm("Tirar este item da lista mestra?")) { excluirItem(a.id); fecharModal(); }
        break;
    }
  });

  /* ---------------- partida ---------------- */

  async function digerir(senha) {
    var txt = "mercado:" + String(senha || "").trim().toLowerCase();
    if (window.crypto && crypto.subtle && crypto.subtle.digest) {
      var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(txt));
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ("0" + b.toString(16)).slice(-2);
      }).join("");
    }
    var h = 0;
    for (var i = 0; i < txt.length; i++) { h = (h * 31 + txt.charCodeAt(i)) >>> 0; }
    return "sc" + h.toString(16);
  }

  function senhaDoEndereco() {
    var bruto = (location.hash || "").replace(/^#/, "") + "&" + (location.search || "").replace(/^\?/, "");
    var achado = /(?:^|&)casa=([^&]+)/.exec(bruto);
    if (!achado) return "";
    try { return decodeURIComponent(achado[1]); } catch (e) { return achado[1]; }
  }

  function papelDoEndereco() {
    var bruto = (location.hash || "").replace(/^#/, "") + "&" + (location.search || "").replace(/^\?/, "");
    var achado = /(?:^|&)papel=(vini|esposa|casa)(?:&|$)/.exec(bruto);
    return achado ? achado[1] : "";
  }

  function limparEndereco() {
    if (window.history && history.replaceState) {
      try { history.replaceState(null, "", location.pathname); } catch (e) {}
    }
  }

  function mostrarPortao(cfg, senhaInicial, papelInicial) {
    var portao = document.getElementById("portao");
    var corpoApp = document.querySelector("main");
    var topo = document.querySelector(".top");
    portao.hidden = false;
    corpoApp.hidden = true;
    topo.hidden = true;
    document.querySelector(".abas").hidden = true;

    var campo = document.getElementById("senha");
    var botao = document.getElementById("btn-entrar");
    var aviso = document.getElementById("portao-aviso");
    var chavePendente = null;

    function dizer(html) { aviso.innerHTML = html; }

    async function tentar() {
      var senha = campo.value.trim();
      if (senha.length < 4) { dizer('<div class="nota" style="margin-top:12px">A senha precisa de pelo menos 4 letras.</div>'); return; }
      botao.disabled = true;
      dizer('<p class="sub" style="margin-top:12px">Conferindo…</p>');
      var chave = await digerir(senha);
      var existe = await Store.existeNoFirebase(cfg, chave);
      botao.disabled = false;
      if (existe === null) {
        dizer('<div class="nota" style="margin-top:12px">Não consegui falar com o banco de dados. Veja a conexão e tente de novo.</div>');
        return;
      }
      if (existe) { entrar(cfg, chave, false, senha, papelInicial); return; }
      chavePendente = chave;
      dizer('<p class="sub" style="margin-top:12px">Ninguém entrou com essa senha ainda. Se é a primeira vez da casa, ' +
        'crie a lista agora — esta senha passa a ser a de todo mundo. Se já existe lista, confira se digitou certo.</p>' +
        '<div class="linha-btns">' +
        '<button class="btn principal larga" type="button" id="btn-criar">Criar a lista com esta senha</button></div>');
      document.getElementById("btn-criar").addEventListener("click", function () {
        entrar(cfg, chavePendente, true, senha, papelInicial);
      });
    }

    botao.addEventListener("click", tentar);
    campo.addEventListener("keydown", function (ev) { if (ev.key === "Enter") tentar(); });

    // Link de convite: a senha vem no endereço, ninguém digita nada. Sai da
    // barra assim que é lida, para não ficar em foto de tela nem no histórico.
    if (senhaInicial) {
      campo.value = senhaInicial;
      limparEndereco();
      document.getElementById("portao-texto").textContent = "Entrando com a senha do link…";
      tentar();
      return;
    }
    setTimeout(function () { campo.focus(); }, 60);
  }

  async function entrar(cfg, chave, criar, senha, papel) {
    if (!Store.abrirFirebase(cfg, chave)) {
      document.getElementById("portao-aviso").innerHTML =
        '<div class="nota" style="margin-top:12px">Não consegui abrir o banco de dados.</div>';
      return;
    }
    try {
      localStorage.setItem("mercado:chave", chave);
      if (senha) localStorage.setItem("mercado:senha", senha);
      if (papel) {
        localStorage.setItem("mercado:quem", papel);
        // Aparelho convidado não guarda a senha em claro: de lá não saem
        // convites novos. O do dono guarda, porque é dele que eles saem.
        if (papel !== "vini") localStorage.removeItem("mercado:senha");
        S.quem = papel;
      }
    } catch (e) {}
    if (criar) await Store.marcarCasa();
    document.getElementById("portao").hidden = true;
    document.querySelector("main").hidden = false;
    document.querySelector(".top").hidden = false;
    await comecar();
  }

  (async function iniciar() {
    var cfg = window.MERCADO_FIREBASE || null;
    var temClaude = await Store.abrir();
    if (!temClaude && cfg && cfg.databaseURL) {
      var doLink = senhaDoEndereco();
      if (doLink) { mostrarPortao(cfg, doLink, papelDoEndereco()); return; }
      var guardada = null;
      try { guardada = localStorage.getItem("mercado:chave"); } catch (e) {}
      if (guardada && Store.abrirFirebase(cfg, guardada)) { await comecar(); return; }
      mostrarPortao(cfg);
      return;
    }
    await comecar();
  })();

  async function comecar() {
    await Store.garantir(CAMINHOS.itens, { itens: {} });
    await Store.garantir(CAMINHOS.historico, { rodadas: {} });
    await Store.garantir(CAMINHOS.rodada, { data: hoje(), marcados: {}, feitos: {}, fechada: false });

    Store.escutar(CAMINHOS.itens, function (doc) {
      S.itens = (doc && doc.itens) ? doc.itens : {};
      if (S.pronto) desenhar();
    });
    Store.escutar(CAMINHOS.rodada, function (doc) {
      S.rodada = doc || { data: hoje(), marcados: {}, feitos: {}, fechada: false };
      if (S.pronto) desenhar();
    });
    Store.escutar(CAMINHOS.historico, function (doc) {
      S.historico = doc || { rodadas: {} };
      if (S.pronto) desenhar();
    });

    S.pronto = true;
    // Lista sem data mostraria sempre a de hoje e pareceria mudar de nome
    // todo dia. Grava a data uma vez, e daí em diante o nome é fixo.
    if (S.rodada && !S.rodada.data) {
      S.rodada.data = hoje();
      Store.mesclarDoc(CAMINHOS.rodada, { data: S.rodada.data });
    }
    desenhar();
  }
})();

})();
