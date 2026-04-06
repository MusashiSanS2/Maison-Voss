export interface Product {
  id: string
  name: string
  price: string
  category: 'ternos' | 'camisas' | 'acessorios'
  image: string
  images?: string[]
  description: string
  materials?: string
  origin?: string
}

export const products: Product[] = [
  {
    id: 'terno-classico-preto',
    name: 'Terno Clássico Preto',
    price: 'R$ 12.800',
    category: 'ternos',
    image: '/images/terno-classico-preto.jpg',
    images: [
      '/images/terno-classico-preto.jpg',
    ],
    description: 'Um terno que transcende as décadas. Corte italiano com ombros naturais, lapela em ponta de lança e forro em seda pura. Cada peça é cortada à mão por nossos mestres alfaiates, respeitando a anatomia única de cada cliente.',
    materials: 'Lã Super 150s, forro em seda Jacquard, botões em chifre natural',
    origin: 'Tecido Vitale Barberis Canonico, Biella, Itália',
  },
  {
    id: 'terno-risca-de-giz',
    name: 'Terno Risca de Giz',
    price: 'R$ 14.200',
    category: 'ternos',
    image: '/images/terno-risca-de-giz.jpg',
    images: [
      '/images/terno-risca-de-giz.jpg',
    ],
    description: 'A risca de giz ressurge com elegância atemporal. Um padrão sutil que alonga a silhueta e confere presença em qualquer ambiente. Confeccionado com a precisão que apenas décadas de tradição podem oferecer.',
    materials: 'Lã penteada Super 130s, entretela em crina de cavalo, fechos YKK premium',
    origin: 'Lanificio Ermenegildo Zegna, Trivero, Itália',
  },
  {
    id: 'terno-azul-marinho',
    name: 'Terno Azul Marinho',
    price: 'R$ 13.500',
    category: 'ternos',
    image: '/images/terno-azul-marinho.jpg',
    images: [
      '/images/terno-azul-marinho.jpg',
    ],
    description: 'O azul marinho que definiu gerações de homens de poder. Profundo, versátil, impecável. Do escritório ao jantar de gala, esta peça comunica autoridade silenciosa e gosto refinado.',
    materials: 'Lã fria tropical, forro Bemberg, botões em corozo',
    origin: 'Holland & Sherry, Londres, Inglaterra',
  },
  {
    id: 'camisa-branca-ceremony',
    name: 'Camisa Branca Ceremony',
    price: 'R$ 2.400',
    category: 'camisas',
    image: '/images/camisa-branca.jpg',
    images: [
      '/images/camisa-branca.jpg',
    ],
    description: 'Branca como deve ser: luminosa, imaculada, perfeita. Colarinho italiano com altura calculada para o nó de gravata ideal. Punhos duplos preparados para abotoaduras de herança.',
    materials: 'Algodão egípcio 200 fios, madrepérola natural australiana',
    origin: 'Thomas Mason, Lancashire, Inglaterra',
  },
  {
    id: 'camisa-azul-oxford',
    name: 'Camisa Azul Oxford',
    price: 'R$ 1.900',
    category: 'camisas',
    image: '/images/camisa-azul-oxford.jpg',
    images: [
      '/images/camisa-azul-oxford.jpg',
    ],
    description: 'O oxford que ganhou o mundo. Textura presente mas refinada, cor que envelhece com dignidade. Perfeita sob o blazer ou em mangas arregaçadas no fim do dia.',
    materials: 'Algodão oxford premium, botões em madrepérola',
    origin: 'Albini, Bergamo, Itália',
  },
  {
    id: 'camisa-listrada-bengal',
    name: 'Camisa Listrada Bengal',
    price: 'R$ 2.100',
    category: 'camisas',
    image: '/images/camisa-listrada.jpg',
    images: [
      '/images/camisa-listrada.jpg',
    ],
    description: 'Listras bengal em azul e branco — o padrão que definiu o estilo corporativo nas capitais financeiras do mundo. Presença sem ostentação, elegância sem esforço.',
    materials: 'Popeline de algodão Sea Island, botões em madrepérola do Pacífico',
    origin: 'David & John Anderson, Glasgow, Escócia',
  },
  {
    id: 'gravata-seda-borgonha',
    name: 'Gravata Seda Borgonha',
    price: 'R$ 890',
    category: 'acessorios',
    image: '/images/gravata-borgonha.jpg',
    images: [
      '/images/gravata-borgonha.jpg',
    ],
    description: 'Borgonha profundo que transita entre o formal e o contemporâneo. Largura clássica de 8cm, construção seven-fold que dispensa entretela — a gravata que se molda ao seu nó.',
    materials: 'Seda twill 100%, costura manual invisível',
    origin: 'Seterie Argenti, Como, Itália',
  },
  {
    id: 'lenco-bolso-paisley',
    name: 'Lenço de Bolso Paisley',
    price: 'R$ 420',
    category: 'acessorios',
    image: '/images/lenco-paisley.jpg',
    images: [
      '/images/lenco-paisley.jpg',
    ],
    description: 'Paisley em tons de azul e cobre sobre fundo marfim. Cada lenço é estampado à mão seguindo técnicas centenárias. O detalhe que distingue quem entende de quem apenas veste.',
    materials: 'Seda habotai, bainha rolotê à mão',
    origin: 'Drakes London, Inglaterra',
  },
  {
    id: 'abotoaduras-onyx',
    name: 'Abotoaduras Ônix',
    price: 'R$ 1.650',
    category: 'acessorios',
    image: '/images/abotoaduras-onix.jpg',
    images: [
      '/images/abotoaduras-onix.jpg',
    ],
    description: 'Ônix negro lapidado à mão, engastado em prata de lei. O peso justo, o fechamento preciso, o brilho contido. Para os punhos duplos de quem valoriza os detalhes que poucos veem.',
    materials: 'Prata 925, ônix natural brasileiro, acabamento polido à mão',
    origin: 'Ateliê próprio, São Paulo, Brasil',
  },
]

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((p) => p.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getFeaturedProducts(): Product[] {
  return [
    products[0], // Terno Clássico Preto
    products[3], // Camisa Branca Ceremony
    products[6], // Gravata Seda Borgonha
  ]
}
