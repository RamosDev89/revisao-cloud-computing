import type { Topic } from '../types/quiz';

export type BlockType = 'paragraph' | 'list' | 'table' | 'callout' | 'subtitle';

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface SubtitleBlock {
  type: 'subtitle';
  text: string;
}

export interface ListBlock {
  type: 'list';
  items: string[];
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'note' | 'mnemonic' | 'trap';
  text: string;
}

export type Block = ParagraphBlock | SubtitleBlock | ListBlock | TableBlock | CalloutBlock;

export interface RevisionTopic {
  id: number;
  topic: Topic;
  anchor: string;
  blocks: Block[];
}

export interface ExtraSection {
  id: string;
  title: string;
  anchor: string;
  blocks: Block[];
}

export const REVISION_TOPICS: RevisionTopic[] = [
  {
    id: 1,
    topic: 'Tipos de serviço',
    anchor: 'tipos-de-servico',
    blocks: [
      {
        type: 'paragraph',
        text: 'A pergunta que resolve quase toda questão: até onde vai a responsabilidade do provedor e onde começa a do cliente.',
      },
      {
        type: 'table',
        headers: ['', 'SaaS', 'PaaS', 'IaaS'],
        rows: [
          ['Verbo', 'Consumir', 'Construir', 'Migrar'],
          [
            'O que entrega',
            'Aplicativo pronto para uso',
            'Ambiente completo de desenvolvimento e deploy',
            'Recursos fundamentais: servidores, storage, rede, firewall',
          ],
          [
            'Cliente gerencia',
            'Apenas dados e usuários',
            'Seu código e seus dados',
            'SO, middleware, runtime, aplicação e dados',
          ],
          [
            'Vantagens citadas em aula',
            'Pague pelo que usar, acesso de qualquer lugar, integração, apps sofisticados',
            'Reduz tempo de programação, workflow, ferramentas sofisticadas acessíveis',
            'Controle total da infraestrutura',
          ],
          [
            'Exemplos',
            'Office 365, Google Workspace',
            'Azure App Service, Google App Engine',
            'Máquinas virtuais, redes virtuais',
          ],
        ],
      },
      {
        type: 'callout',
        variant: 'mnemonic',
        text: 'Controle cresce de SaaS → PaaS → IaaS; conveniência cresce no sentido oposto.',
      },
      {
        type: 'subtitle',
        text: 'Classificação de serviços Azure vistos em aula',
      },
      {
        type: 'list',
        items: [
          'Computação: Máquinas Virtuais (IaaS), Azure Functions (execução sem servidor orientada a eventos), Kubernetes (orquestração de containers)',
          'Rede e dados: Virtual Network, Load Balancer, Synapse Analytics, HDInsight (big data sobre Apache Hadoop)',
          'Desenvolvimento: Azure DevOps (do planejamento ao deploy contínuo), App Service (hospeda apps web e APIs)',
          'Segurança e identidade: Active Directory, Key Vault, Security Center',
        ],
      },
    ],
  },
  {
    id: 2,
    topic: 'Tipos de nuvem',
    anchor: 'tipos-de-nuvem',
    blocks: [
      {
        type: 'paragraph',
        text: 'Os tipos de serviço dizem o que é entregue; os tipos de nuvem dizem para quem a infraestrutura existe.',
      },
      {
        type: 'table',
        headers: ['Modelo', 'Quem usa a infraestrutura', 'Marca registrada'],
        rows: [
          [
            'Pública',
            'Vários clientes no mesmo pool (multitenancy)',
            'Máxima economia de escala; AWS, Azure, GCP',
          ],
          [
            'Privada',
            'Uma única organização, própria ou hospedada',
            'Controle e conformidade; perde economia de escala',
          ],
          [
            'Híbrida',
            'Privada + pública, com portabilidade entre elas',
            'Dados sensíveis dentro, picos de carga fora',
          ],
          [
            'Comunitária',
            'Grupo de organizações com requisitos comuns',
            'Consórcios de governo, saúde, pesquisa',
          ],
          [
            'Multicloud',
            'Vários provedores públicos ao mesmo tempo',
            'Evita dependência de fornecedor',
          ],
        ],
      },
      {
        type: 'callout',
        variant: 'trap',
        text: 'Não confunda: híbrida combina modelos diferentes; multicloud usa vários provedores do mesmo modelo público.',
      },
    ],
  },
  {
    id: 3,
    topic: 'Elasticidade',
    anchor: 'elasticidade',
    blocks: [
      {
        type: 'subtitle',
        text: 'Definição NIST (SP 800-145) — exatamente cinco características essenciais',
      },
      {
        type: 'list',
        items: [
          'Autoatendimento sob demanda — provisionamento automático, sem intervenção humana',
          'Amplo acesso à rede — disponível por mecanismos padrão da web',
          'Pool de recursos — multitenancy compartilhando processamento e armazenamento',
          'Elasticidade rápida — escalabilidade linear, uso sob demanda, pagamento por unidade consumida',
          'Serviços mensuráveis — controle, otimização e tarifação transparente',
        ],
      },
      {
        type: 'table',
        headers: ['', 'Elasticidade', 'Escalabilidade'],
        rows: [
          [
            'Movimento',
            'Automático e nos dois sentidos: expande e também recolhe',
            'Capacidade de crescer para atender à demanda',
          ],
          [
            'Horizonte',
            'Curto prazo, variação e sazonalidade',
            'Longo prazo, planejamento de capacidade',
          ],
          [
            'Efeito direto',
            'Custo, pelo pagamento por uso',
            'Arquitetura do sistema',
          ],
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        text: 'A viabilidade financeira vem da troca de CapEx (investimento inicial em datacenter) por OpEx (despesa operacional conforme o consumo).',
      },
    ],
  },
  {
    id: 4,
    topic: 'Horizontal × vertical',
    anchor: 'horizontal-vertical',
    blocks: [
      {
        type: 'table',
        headers: ['', 'Vertical (scale up / down)', 'Horizontal (scale out / in)'],
        rows: [
          [
            'O que muda',
            'A mesma máquina ganha mais CPU, RAM e disco',
            'Entram mais máquinas ou nós no conjunto',
          ],
          ['Teto', 'Limite físico do hardware', 'Praticamente ilimitado'],
          [
            'Indisponibilidade',
            'Em geral exige reiniciar a instância',
            'Nenhuma: o nó novo entra no pool',
          ],
          [
            'Tolerância a falhas',
            'Baixa, ponto único de falha',
            'Alta, redundância natural',
          ],
          [
            'Precisa de',
            'Nada além do hardware maior',
            'Balanceador de carga e aplicação sem estado',
          ],
          [
            'Exemplo',
            'Trocar uma VM B2s por uma B4ms',
            'Subir de 3 para 10 VMs atrás do Load Balancer',
          ],
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        text: 'A nuvem foi construída sobre o modelo horizontal: é ele que sustenta clusters, MapReduce, Hadoop e a própria elasticidade.',
      },
    ],
  },
  {
    id: 5,
    topic: 'MapReduce',
    anchor: 'mapreduce',
    blocks: [
      {
        type: 'paragraph',
        text: 'Por que existe: a capacidade dos discos explodiu, mas a velocidade de leitura não acompanhou. Em 1990 um disco de 1370 MB era lido a 4,4 MB/s, cerca de 5 minutos para varrer o disco inteiro. Hoje os discos chegam a terabytes e petabytes com taxas na casa das centenas de MB/s, e varrer tudo passou a levar horas ou dias. A saída foi ler e processar em paralelo, em várias máquinas.',
      },
      {
        type: 'paragraph',
        text: 'Origem: criado no Google e publicado em 2004 por Jeffrey Dean e Sanjay Ghemawat, inspirado nas operações map e reduce da programação funcional. Usado para indexação da web, cálculo do PageRank e análise de logs de servidores.',
      },
      {
        type: 'callout',
        variant: 'trap',
        text: 'Pegadinha número um: MapReduce é estratégia de processamento distribuído, não de armazenamento. Quem armazena é o HDFS.',
      },
      {
        type: 'subtitle',
        text: 'As duas fases',
      },
      {
        type: 'list',
        items: [
          'Map — os dados são divididos em fragmentos menores e processados em paralelo em nós diferentes do cluster, gerando pares chave-valor intermediários.',
          'Reduce — os resultados intermediários são agrupados e combinados para produzir o resultado final.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Exemplo clássico, contar quantas vezes cada produto foi vendido: o map lê cada linha da venda e emite (produto, 1); o agrupamento junta as ocorrências da mesma chave; o reduce soma os valores e devolve (produto, total).',
      },
      {
        type: 'subtitle',
        text: 'Onde roda',
      },
      {
        type: 'list',
        items: [
          'Serviços gerenciados: Amazon EMR, Google Cloud Dataproc, Azure HDInsight',
          'Linguagens: Java, Python, JavaScript/Node.js, C++, Scala, R',
          'Apache Spark: criado para superar as limitações do MapReduce — processa em memória, chega a ser 100× mais rápido em algumas operações, trata dados em tempo real e oferece API unificada',
        ],
      },
    ],
  },
  {
    id: 6,
    topic: 'Hadoop',
    anchor: 'hadoop',
    blocks: [
      {
        type: 'paragraph',
        text: 'Plataforma de código aberto escrita em Java para computação distribuída sobre grandes volumes de dados. Três componentes formam o núcleo.',
      },
      {
        type: 'table',
        headers: ['Componente', 'Papel', 'Peças internas'],
        rows: [
          [
            'HDFS',
            'Armazenamento distribuído em blocos replicados',
            'NameNode guarda os metadados, ou seja, onde cada bloco está; DataNodes guardam os blocos',
          ],
          ['MapReduce', 'Processamento dos dados', 'Fases de map e reduce'],
          [
            'YARN',
            'Gerência de recursos do cluster',
            'ResourceManager aloca recursos globalmente; NodeManager cuida dos containers de cada nó',
          ],
        ],
      },
      {
        type: 'callout',
        variant: 'mnemonic',
        text: 'HDFS guarda, MapReduce processa, YARN distribui os recursos — e aceita também Spark, Flink e Tez, não só MapReduce.',
      },
    ],
  },
  {
    id: 7,
    topic: 'API e web services',
    anchor: 'api-web-services',
    blocks: [
      {
        type: 'paragraph',
        text: 'Web services são o conjunto de tecnologias e padrões que permitem a comunicação e a interoperabilidade entre sistemas diferentes pela internet, independentemente da plataforma ou da linguagem em que foram escritos.',
      },
      {
        type: 'table',
        headers: ['', 'SOAP', 'REST'],
        rows: [
          ['Natureza', 'Protocolo baseado em XML', 'Estilo arquitetural'],
          ['Formato', 'XML em envelope, regras rígidas', 'Normalmente JSON'],
          ['Transporte', 'HTTP, SMTP e outros', 'HTTP, com GET, POST, PUT e DELETE'],
          ['Endereçamento', 'Operações', 'Recursos representados por URLs'],
        ],
      },
      {
        type: 'table',
        headers: ['', 'Web services', 'Cloud computing'],
        rows: [
          [
            'Natureza',
            'Tecnologia de comunicação e integração entre aplicações',
            'Infraestrutura e entrega de recursos computacionais',
          ],
          [
            'Foco',
            'Fazer sistemas conversarem, como estoque com pagamentos',
            'Hospedar aplicativos, dados e poder de processamento',
          ],
          [
            'Ambiente',
            'Pode rodar localmente (on-premise) ou na nuvem',
            'Estritamente via internet',
          ],
          ['Exemplo', 'APIs abertas REST e SOAP', 'AWS, Google Cloud, Azure'],
        ],
      },
      {
        type: 'callout',
        variant: 'note',
        text: 'Frase-resumo: web services integram os sistemas; a nuvem hospeda a infraestrutura.',
      },
    ],
  },
];

export const EXTRA_SECTION: ExtraSection = {
  id: 'extra',
  title: 'O que costuma vir junto',
  anchor: 'extra',
  blocks: [
    {
      type: 'subtitle',
      text: 'Controle de concorrência',
    },
    {
      type: 'list',
      items: [
        'Bloqueio (locks): só uma transação acessa o recurso por vez; protege por força bruta e gera filas',
        'Timestamp ordering: cada transação recebe um carimbo de data e hora; as mais antigas têm prioridade e a mais recente em conflito é interrompida',
        'MVCC: mantém várias versões do mesmo dado, garantindo consistência sem travar a leitura',
      ],
    },
    {
      type: 'paragraph',
      text: 'Níveis de isolamento, do menor ao maior: Read Uncommitted → Read Committed → Repeatable Read → Serializable.',
    },
    {
      type: 'paragraph',
      text: 'Falhas típicas: deadlock (duas transações esperam uma pela outra indefinidamente), corrupção, inconsistência e atualizações perdidas.',
    },
    {
      type: 'subtitle',
      text: 'Persistência',
    },
    {
      type: 'paragraph',
      text: 'Garante durabilidade, disponibilidade e consistência. A replicação síncrona replica antes de confirmar a gravação; a assíncrona confirma mais rápido e replica em segundo plano. Integridade é checada por CRC e MD5, com redundância de hardware e políticas de retenção e versionamento.',
    },
    {
      type: 'subtitle',
      text: 'Sistemas distribuídos e P2P',
    },
    {
      type: 'list',
      items: [
        'Gossip: propagação descentralizada de estado entre nós, garantindo consistência eventual; usado em Cassandra, Bitcoin e Riak',
        'Membership: serviço de entrada e saída de nós do cenário, usado junto com balanceamento e replicação',
        'P2P estruturada: algoritmos e trackers mapeiam os nós, com tabelas hash distribuídas (DHT); exemplo Kademlia',
        'P2P não estruturada: conexões aleatórias, sem estrutura definida, com rastreio e segurança mais frágeis; exemplo Gnutella',
      ],
    },
    {
      type: 'subtitle',
      text: 'Riscos e auditoria',
    },
    {
      type: 'paragraph',
      text: 'Na visão Gartner, o cuidado está em saber como é feito o acesso dos usuários, onde os dados ficam, como são segregados entre clientes, como são recuperados e qual a viabilidade do provedor a longo prazo.',
    },
  ],
};
