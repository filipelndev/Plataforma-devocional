
// Produtos de destaque
const destaques = [
    {
        nome: "Produto de exemplo",
        imagem: "assets/camisa.png",
        preco: "R$96,00",
        precoAntigo: "R$120,00",
        desconto: ""
    },
    {
        nome: "Produto de exemplo",
        imagem: "assets/oculos.png",
        preco: "R$122,00",
        precoAntigo: "",
        desconto: ""
    },
    {
        nome: "Produto de exemplo",
        imagem: "assets/tenis.png",
        preco: "R$320,00",
        precoAntigo: "",
        desconto: ""
    }
];

function renderDestaques() {
    const destaquesList = document.getElementById('destaques-list');
    if (!destaquesList) return;
    destaquesList.innerHTML = '';
    destaques.forEach((prod, idx) => {
        const card = document.createElement('div');
        card.className = 'destaque-card';
        if (prod.desconto) {
            const desconto = document.createElement('span');
            desconto.className = 'destaque-desconto';
            desconto.textContent = prod.desconto;
            card.appendChild(desconto);
        }
        const img = document.createElement('img');
        img.className = 'destaque-img';
        img.src = prod.imagem;
        img.alt = prod.nome;
        card.appendChild(img);
        const nome = document.createElement('div');
        nome.className = 'destaque-nome';
        nome.textContent = prod.nome;
        card.appendChild(nome);
        const precos = document.createElement('div');
        precos.className = 'destaque-precos';
        const preco = document.createElement('span');
        preco.className = 'destaque-preco';
        preco.textContent = prod.preco;
        precos.appendChild(preco);
        if (prod.precoAntigo) {
            const precoAntigo = document.createElement('span');
            precoAntigo.className = 'destaque-preco-antigo';
            precoAntigo.textContent = prod.precoAntigo;
            precos.appendChild(precoAntigo);
        }
        card.appendChild(precos);
        // Botão ver mais
        const verMaisBtn = document.createElement('button');
        verMaisBtn.className = 'ver-mais-btn';
        verMaisBtn.textContent = 'Ver mais';
        verMaisBtn.onclick = function() {
            abrirModalDestaque(idx);
        };
        card.appendChild(verMaisBtn);
        destaquesList.appendChild(card);
    });
}

// Categorias
const categorias = [
    { nome: "Devocional", icone: "assets/camisa.png" },
];

function renderCategorias() {
    const catList = document.getElementById('categorias-list');
    if (!catList) return;
    catList.innerHTML = '';
    categorias.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'categoria-card';
        const img = document.createElement('img');
        img.src = cat.icone;
        img.alt = cat.nome;
        card.appendChild(img);
        const nome = document.createElement('div');
        nome.textContent = cat.nome;
        card.appendChild(nome);
        catList.appendChild(card);
    });
}

// Chamar ao carregar
window.addEventListener('DOMContentLoaded', () => {
    renderDestaques();
    renderCategorias();
});

// Modal de destaque
function criarModalDestaque(prod) {
    const modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';
    const modal = document.createElement('div');
    modal.className = 'modal-destaque';
    // Conteúdo
    modal.innerHTML = `
        <img src="${prod.imagem}" alt="${prod.nome}" class="modal-img">
        <div class="modal-info">
            <h4>${prod.nome}</h4>
            <div class="modal-precos">
                <span class="modal-preco">${prod.preco}</span>
                ${prod.precoAntigo ? `<span class="modal-preco-antigo">${prod.precoAntigo}</span>` : ''}
            </div>
            <p>${prod.descricao}</p>
            <button class="modal-carrinho-btn">Adicionar ao carrinho</button>
        </div>
        <button class="modal-fechar">&times;</button>
    `;
    // Fechar
    modal.querySelector('.modal-fechar').onclick = () => {
        document.body.removeChild(modalBg);
    };
    // Adicionar ao carrinho (exemplo)
    modal.querySelector('.modal-carrinho-btn').onclick = () => {
        alert('Produto adicionado ao carrinho!');
        document.body.removeChild(modalBg);
    };
    modalBg.appendChild(modal);
    return modalBg;
}

function abrirModalDestaque(idx) {
    const prod = destaques[idx];
    const modal = criarModalDestaque(prod);
    document.body.appendChild(modal);
}

// Estilos do modal (inserir no CSS):
// .modal-bg { position: fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center; z-index:9999; }
// .modal-destaque { background:#fff; border-radius:12px; box-shadow:0 4px 24px rgba(44,62,80,0.18); padding:32px 24px; display:flex; gap:32px; align-items:center; position:relative; min-width:340px; }
// .modal-img { width:120px; height:120px; object-fit:contain; border-radius:8px; }
// .modal-info { flex:1; }
// .modal-info h4 { font-size:1.2rem; margin-bottom:8px; }
// .modal-precos { display:flex; gap:10px; align-items:center; margin-bottom:8px; }
// .modal-preco { font-size:1.1rem; color:var(--primary); font-weight:700; }
// .modal-preco-antigo { font-size:1rem; color:#aaa; text-decoration:line-through; }
// .modal-carrinho-btn { background:var(--primary); color:#fff; border:none; border-radius:6px; padding:10px 24px; font-size:1rem; font-weight:600; cursor:pointer; margin-top:12px; }
// .modal-fechar { position:absolute; top:12px; right:12px; background:none; border:none; font-size:2rem; color:#888; cursor:pointer; }
