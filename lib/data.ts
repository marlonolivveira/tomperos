/* Conteúdo da landing page — edite livremente por aqui. */

export type Categoria = {
  nome: string;
  cor: string; // cor da própria especiaria (brilho no hover do card)
  imagem: string;
  descricao: string;
  exemplos: string[];
};

export const categorias: Categoria[] = [
  {
    nome: "Pimentas & Picantes",
    cor: "#c1440e",
    imagem: "/images/temperos/pimentas.jpg",
    descricao: "Calor na medida certa, do morno ao picante marcante.",
    exemplos: ["Páprica picante", "Calabresa moída", "Chili em flocos"],
  },
  {
    nome: "Amarelos & Dourados",
    cor: "#e0a526",
    imagem: "/images/temperos/amarelos.jpg",
    descricao: "Cor de sol e sabor terroso que tinge o prato.",
    exemplos: ["Cúrcuma", "Mostarda em pó", "Gengibre"],
  },
  {
    nome: "Ervas Frescas",
    cor: "#5f6b43",
    imagem: "/images/temperos/ervas.jpg",
    descricao: "Secas com cuidado para guardar o verde e o perfume.",
    exemplos: ["Orégano", "Alecrim", "Manjericão"],
  },
  {
    nome: "Doces & Aromáticos",
    cor: "#7b3f00",
    imagem: "/images/temperos/doces.jpg",
    descricao: "Aquele cheirinho de tacho quente e afeto.",
    exemplos: ["Canela em pó", "Cravo", "Noz-moscada"],
  },
  {
    nome: "Terrosos & Quentes",
    cor: "#a9713a",
    imagem: "/images/temperos/terrosos.jpg",
    descricao: "A base fundo de panela de toda boa comida.",
    exemplos: ["Cominho", "Coentro em pó", "Curry da casa"],
  },
  {
    nome: "Blends da Casa",
    cor: "#a8551f",
    imagem: "/images/temperos/blends.jpg",
    descricao: "Receitas nossas, moídas e medidas à mão.",
    exemplos: ["Tempero baiano", "Chimichurri", "Garam masala"],
  },
];

export type Diferencial = {
  icon: "mortar" | "leaf" | "route" | "seal";
  titulo: string;
  texto: string;
};

export const diferenciais: Diferencial[] = [
  {
    icon: "mortar",
    titulo: "Moído na hora",
    texto:
      "Nada de estoque parado. Moemos em pequenos lotes para o aroma chegar vivo na sua cozinha.",
  },
  {
    icon: "leaf",
    titulo: "Só o tempero",
    texto: "Sem conservantes, sem corantes, sem sal escondido. O rótulo diz exatamente o que tem.",
  },
  {
    icon: "route",
    titulo: "Origem que dá pra contar",
    texto:
      "Compramos direto de pequenos produtores. A gente sabe o nome de quem plantou.",
  },
  {
    icon: "seal",
    titulo: "Embalagem que segura o cheiro",
    texto: "Potes com vedação que protegem da luz e da umidade, do envase até a última pitada.",
  },
];

export type Passo = {
  numero: string;
  titulo: string;
  texto: string;
};

export const processo: Passo[] = [
  {
    numero: "01",
    titulo: "Colheita",
    texto: "Parceria com pequenos produtores que colhem no ponto certo, sem pressa.",
  },
  {
    numero: "02",
    titulo: "Seleção",
    texto: "Separação criteriosa, grão a grão, folha a folha. O que não passa, não entra.",
  },
  {
    numero: "03",
    titulo: "Torra & moagem",
    texto: "Torra leve para acordar os óleos essenciais e moagem em pequenos lotes.",
  },
  {
    numero: "04",
    titulo: "Envase",
    texto: "Fechamos na hora, em potes que preservam o aroma até a sua panela.",
  },
];

export type Depoimento = {
  nome: string;
  papel: string;
  avatar: string;
  texto: string;
};

export const depoimentos: Depoimento[] = [
  {
    nome: "Ana Beatriz Menezes",
    papel: "Chef, Casa Menezes",
    avatar: "/images/avatars/av1.jpg",
    texto:
      "Abri o pote de cúrcuma e a cozinha inteira mudou de cheiro. Aroma de tempero fresco não se disfarça.",
  },
  {
    nome: "Rodrigo Tavares",
    papel: "Cliente desde 2022",
    avatar: "/images/avatars/av2.jpg",
    texto:
      "Voltei a sentir gosto no arroz de todo dia. Parece exagero, mas foi só trocar a páprica pela daqui.",
  },
  {
    nome: "Juliana Prado",
    papel: "Confeiteira, Doce Prado",
    avatar: "/images/avatars/av3.jpg",
    texto:
      "A canela é outro nível. Uso metade do que usava antes e o bolo sai com o dobro de perfume.",
  },
];

export type Stat = { valor: number; sufixo?: string; rotulo: string };

export const stats: Stat[] = [
  { valor: 42, rotulo: "blends autorais" },
  { valor: 9, rotulo: "anos moendo tempero" },
  { valor: 5400, sufixo: "+", rotulo: "cozinhas temperadas" },
];

/** Slogan oficial da marca. */
export const slogan = "Temperando bons momentos.";

export type Valor = { nome: string; texto: string };

export const valores: Valor[] = [
  {
    nome: "Fé",
    texto:
      "Conduzimos nosso trabalho com gratidão a Deus e buscamos honrá-Lo em tudo o que fazemos.",
  },
  { nome: "Honestidade", texto: "Agimos com transparência e respeito em cada relação." },
  {
    nome: "Qualidade",
    texto: "Bons produtos fazem diferença na experiência de quem cozinha.",
  },
  { nome: "Cuidado", texto: "Cada detalhe importa, da embalagem ao atendimento." },
  {
    nome: "Confiança",
    texto: "Construímos relações duradouras cumprindo aquilo que prometemos.",
  },
  {
    nome: "Simplicidade",
    texto: "O essencial, quando bem feito, gera os melhores resultados.",
  },
  { nome: "Família", texto: "Valorizamos os momentos vividos ao redor da mesa." },
  { nome: "Excelência", texto: "Buscamos melhorar continuamente em tudo o que fazemos." },
];

/** Manifesto da marca (aparece na seção Manifesto). */
export const manifesto = {
  lead: "Acreditamos que cozinhar é mais do que preparar uma refeição.",
  linhas: [
    "É reunir pessoas.",
    "É celebrar conquistas.",
    "É criar memórias.",
    "É transformar ingredientes em momentos.",
  ],
  corpo:
    "Foi pensando nisso que nasceu a Tomperos. Queremos estar presentes nos almoços de domingo, nos churrascos entre amigos e nas receitas que a família repete de geração em geração.",
  fecho:
    "Porque um bom tempero realça o sabor da comida. E os bons momentos dão sabor à vida.",
};

/** Nomes que rolam no marquee. */
export const especiarias = [
  "Páprica",
  "Cúrcuma",
  "Cominho",
  "Orégano",
  "Pimenta-do-reino",
  "Canela",
  "Coentro",
  "Cravo",
  "Alecrim",
  "Noz-moscada",
  "Gengibre",
  "Louro",
  "Curry",
  "Manjericão",
];
