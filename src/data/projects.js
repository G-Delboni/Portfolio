// type: 'agent' | 'app' | 'study' | 'ml'
// featured: false tira o item da lista do site sem apagar os dados.
// Novos itens (implementações de ML, modelos, notebooks) entram aqui com type: 'ml'.
export const projects = [
  {
    name: 'agente-whatsapp-ia',
    type: 'agent',
    url: 'https://github.com/G-Delboni/agente-whatsapp-ia',
    kind: {
      pt: 'Atendente de WhatsApp com Claude, em Python e FastAPI',
      en: 'WhatsApp assistant with Claude, in Python and FastAPI',
    },
    state: { pt: 'Protótipo', en: 'Prototype' },
    description: {
      pt: 'Laço de agente escrito à mão, ferramentas estritas, guardas de custo e de dados pessoais, evals e extração de documentos. Os evals rodam offline, com cliente simulado.',
      en: 'Hand-written agent loop, strict tools, cost and personal-data guards, evals and document extraction. The evals run offline, with a simulated client.',
    },
    stack: ['Python', 'FastAPI', 'Anthropic API', 'SQLite'],
  },
  {
    name: 'Lume',
    type: 'agent',
    url: 'https://github.com/G-Delboni/AITaskAssistant',
    kind: {
      pt: 'Assistente de produtividade com Spring AI e Gemini',
      en: 'Productivity assistant with Spring AI and Gemini',
    },
    state: { pt: 'Funcional', en: 'Working' },
    description: {
      pt: 'Linguagem natural vira comando estruturado, e o Java aplica as regras.',
      en: 'Natural language becomes a structured command, and the Java code applies the rules.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring AI', 'PostgreSQL'],
  },
  {
    name: 'Nyx',
    type: 'agent',
    url: 'https://github.com/G-Delboni/nyx',
    kind: {
      pt: 'Supervisor de agentes de código para Windows',
      en: 'Supervisor for coding agents on Windows',
    },
    state: { pt: 'MVP em desenvolvimento', en: 'MVP in development' },
    description: {
      pt: 'Acompanha sessões por hooks, delega em etapas com aprovação humana e fala os avisos.',
      en: 'Follows sessions through hooks, delegates in steps with human approval and speaks its alerts.',
    },
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript'],
  },
  {
    name: 'FinancialAI',
    type: 'agent',
    url: 'https://github.com/G-Delboni/SpringAiFinancial',
    kind: {
      pt: 'Assistente financeiro por texto e áudio',
      en: 'Finance assistant by text and audio',
    },
    state: { pt: 'Funcional', en: 'Working' },
    description: {
      pt: 'Tool calling com Spring AI e transcrição de áudio com Whisper.',
      en: 'Tool calling with Spring AI and speech-to-text with Whisper.',
    },
    stack: ['Java 21', 'Spring Boot', 'Spring AI', 'Whisper'],
  },
  {
    name: 'Yoru',
    featured: false,
    type: 'app',
    url: 'https://github.com/G-Delboni/yoru',
    kind: {
      pt: 'Organizador pessoal, FastAPI e app Android em Kotlin',
      en: 'Personal organizer, FastAPI and an Android app in Kotlin',
    },
    state: { pt: 'Em uso pessoal', en: 'In personal use' },
    description: {
      pt: 'Servidor FastAPI e app Android com sincronia offline-first.',
      en: 'FastAPI server and an Android app with offline-first sync.',
    },
    stack: ['Python', 'FastAPI', 'Kotlin', 'SQLite'],
  },
  {
    name: 'Spring Order Project',
    featured: false,
    type: 'study',
    url: 'https://github.com/G-Delboni/SpringOrderProject',
    kind: {
      pt: 'API REST de clientes, produtos e pedidos',
      en: 'REST API for clients, products and orders',
    },
    state: { pt: 'Projeto de estudo', en: 'Study project' },
    description: {
      pt: 'API em camadas com Spring Data JPA.',
      en: 'Layered API with Spring Data JPA.',
    },
    stack: ['Java', 'Spring Boot'],
  },
]
