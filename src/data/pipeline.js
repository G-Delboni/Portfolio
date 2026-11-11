// O caminho de uma mensagem, como descrito no README do agente-whatsapp-ia.
export const pipeline = [
  {
    name: { pt: 'Webhook', en: 'Webhook' },
    note: {
      pt: 'confere a assinatura e descarta eventos repetidos',
      en: 'checks the signature and drops repeated events',
    },
  },
  {
    name: { pt: 'Guardas', en: 'Guards' },
    note: {
      pt: 'volume por número, tamanho da entrada, teto de gasto diário',
      en: 'volume per number, input size, daily spending cap',
    },
  },
  {
    name: { pt: 'Agente', en: 'Agent' },
    note: {
      pt: 'regras e base de conhecimento em cache, mais o histórico',
      en: 'cached rules and knowledge base, plus the history',
    },
  },
  {
    name: { pt: 'Ferramentas estritas', en: 'Strict tools' },
    note: {
      pt: 'o modelo pede, o código executa',
      en: 'the model asks, the code executes',
    },
  },
  {
    name: { pt: 'Resposta', en: 'Reply' },
    note: {
      pt: 'uma mensagem, com tokens e custo registrados',
      en: 'one message, with tokens and cost recorded',
    },
  },
]
