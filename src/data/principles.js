export const principles = [
  {
    title: {
      pt: 'O modelo nunca escreve no banco.',
      en: 'The model never writes to the database.',
    },
    note: {
      pt: 'Ele propõe uma ação, e o código valida e executa.',
      en: 'It proposes an action, and the code validates and executes it.',
    },
  },
  {
    title: { pt: 'Ferramentas em modo estrito.', en: 'Tools in strict mode.' },
    note: { pt: 'O modelo não pode inventar campos.', en: 'The model cannot invent fields.' },
  },
  {
    title: { pt: 'Uma pessoa sempre pode assumir.', en: 'A person can always take over.' },
    note: {
      pt: 'Transferência para humano e pausa do bot.',
      en: 'Handoff to a human and a pause for the bot.',
    },
  },
  {
    title: { pt: 'Cada chamada tem o custo registrado.', en: 'Every call has its cost recorded.' },
    note: {
      pt: 'Tokens de entrada, de cache e de saída.',
      en: 'Input, cache and output tokens.',
    },
  },
]
