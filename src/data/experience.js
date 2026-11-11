// Os produtos da empresa não são citados pelo nome nem pelo setor.
export const experience = [
  {
    company: 'aFill',
    role: {
      pt: 'Desenvolvedor de Software com foco em IA',
      en: 'Software Developer focused on AI',
    },
    period: {
      pt: 'novembro de 2026 até hoje',
      en: 'November 2026 to present',
    },
    paragraphs: [
      {
        pt: 'Sou o principal desenvolvedor de um sistema multi-tenant com agente de IA no WhatsApp, ainda em desenvolvimento. Implementei o agente com Claude: laço de tool calling com 7 ferramentas, saída estruturada e prompt caching.',
        en: 'I am the main developer of a multi-tenant system with an AI agent on WhatsApp, still in development. I implemented the agent with Claude: a tool-calling loop with 7 tools, structured output and prompt caching.',
      },
      {
        pt: 'Também fiz os guardrails (escopo fechado, testes com entradas adversariais, transferência para humano e kill switch) e cerca de 460 testes.',
        en: 'I also built the guardrails (closed scope, tests with adversarial inputs, handoff to a human and a kill switch) and about 460 tests.',
      },
      {
        pt: 'Em outra plataforma da empresa, já em produção com clientes reais, entreguei a área de treinamento: 15 cursos em vídeo gravados de forma automatizada com Playwright, prova com correção no servidor e 18 tópicos de ajuda.',
        en: 'On another company platform, already in production with real customers, I delivered the training area: 15 video courses recorded automatically with Playwright, an exam graded on the server and 18 help topics.',
      },
    ],
  },
]
