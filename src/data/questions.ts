import type { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  {
    id: 1,
    topic: 'Tipos de serviço',
    statement:
      'Em qual modelo de serviço o cliente ainda é responsável por instalar e atualizar o sistema operacional e o middleware?',
    options: ['SaaS', 'PaaS', 'IaaS', 'Nenhum: isso é sempre do provedor'],
    correctIndex: 2,
    explanation:
      'No IaaS o provedor entrega os recursos fundamentais (servidor, storage, rede) e o cliente cuida de SO, middleware, runtime, aplicação e dados.',
  },
  {
    id: 2,
    topic: 'Tipos de serviço',
    statement: 'Azure App Service e Google App Engine são exemplos de:',
    options: ['SaaS', 'PaaS', 'IaaS', 'Web service'],
    correctIndex: 1,
    explanation:
      'São ambientes completos de desenvolvimento e implantação: o cliente entrega o código e o provedor cuida do resto. Isso é PaaS.',
  },
  {
    id: 3,
    topic: 'Tipos de serviço',
    statement:
      'Uma empresa adota o Office 365 para toda a equipe. Que modelo ela está consumindo, e qual a vantagem principal citada em aula?',
    options: [
      'IaaS, pelo controle total da infraestrutura',
      'PaaS, por reduzir o tempo de programação',
      'SaaS, por pagar apenas pelo que usar e acessar de qualquer lugar',
      'SaaS, por permitir configurar o firewall do servidor',
    ],
    correctIndex: 2,
    explanation:
      'Office 365 é aplicativo pronto na nuvem, ou seja, SaaS. As vantagens listadas nos slides são acesso a aplicativos sofisticados, pagamento pelo uso, integração e acesso de qualquer lugar.',
  },
  {
    id: 4,
    topic: 'Tipos de nuvem',
    statement:
      'Uma seguradora mantém os dados de apólices em infraestrutura própria e usa a nuvem pública apenas nos picos de fim de ano. Que modelo é esse?',
    options: [
      'Nuvem comunitária',
      'Nuvem híbrida',
      'Multicloud',
      'Nuvem pública com multitenancy',
    ],
    correctIndex: 1,
    explanation:
      'Nuvem híbrida combina privada e pública com portabilidade entre elas, permitindo manter dados sensíveis dentro e absorver picos fora.',
  },
  {
    id: 5,
    topic: 'Tipos de nuvem',
    statement: 'Qual afirmação sobre multicloud está correta?',
    options: [
      'É o mesmo que nuvem híbrida',
      'Significa usar vários provedores públicos ao mesmo tempo',
      'Exige obrigatoriamente um datacenter privado',
      'É a nuvem compartilhada por órgãos de governo',
    ],
    correctIndex: 1,
    explanation:
      'Multicloud é o uso simultâneo de mais de um provedor público, geralmente para evitar dependência de fornecedor. Híbrida mistura modelos diferentes; a compartilhada por órgãos com requisitos comuns é a comunitária.',
  },
  {
    id: 6,
    topic: 'Elasticidade',
    statement:
      'Quantas são as características essenciais da computação em nuvem segundo a definição do NIST?',
    options: ['Três', 'Quatro', 'Cinco', 'Sete'],
    correctIndex: 2,
    explanation:
      'São cinco: autoatendimento sob demanda, amplo acesso à rede, pool de recursos, elasticidade rápida e serviços mensuráveis.',
  },
  {
    id: 7,
    topic: 'Elasticidade',
    statement:
      'Qual das alternativas NÃO faz parte das características essenciais do NIST?',
    options: [
      'Pool de recursos',
      'Serviços mensuráveis',
      'Código-fonte aberto do provedor',
      'Autoatendimento sob demanda',
    ],
    correctIndex: 2,
    explanation:
      'Código aberto não é característica da nuvem. O quinto pilar que falta na lista é a elasticidade rápida.',
  },
  {
    id: 8,
    topic: 'Elasticidade',
    statement:
      'A diferença central entre elasticidade e escalabilidade é que a elasticidade:',
    options: [
      'Só se aplica a bancos de dados',
      'Ajusta recursos automaticamente para cima e para baixo conforme a demanda',
      'Significa apenas a capacidade de crescer no longo prazo',
      'Depende de aumentar a CPU da mesma máquina',
    ],
    correctIndex: 1,
    explanation:
      'Escalabilidade é a capacidade de crescer; elasticidade é o ajuste automático nos dois sentidos, no curto prazo, com impacto direto no custo pelo pagamento por uso.',
  },
  {
    id: 9,
    topic: 'Elasticidade',
    statement: 'A troca de CapEx por OpEx na adoção de nuvem significa:',
    options: [
      'Substituir despesa operacional por investimento em datacenter próprio',
      'Substituir o investimento inicial de capital por despesa conforme o consumo',
      'Eliminar completamente os custos de TI',
      'Contratar apenas serviços SaaS',
    ],
    correctIndex: 1,
    explanation:
      'Em vez de comprar servidores antecipadamente (CapEx), a empresa paga pelo que consome como despesa operacional (OpEx).',
  },
  {
    id: 10,
    topic: 'Horizontal × vertical',
    statement:
      'Subir de 3 para 10 máquinas virtuais atrás de um balanceador de carga é um exemplo de:',
    options: [
      'Escalabilidade vertical',
      'Escalabilidade horizontal',
      'Replicação síncrona',
      'Particionamento de chave-valor',
    ],
    correctIndex: 1,
    explanation:
      'Adicionar nós ao conjunto é escalar horizontalmente (scale out). Aumentar CPU e RAM da mesma máquina seria vertical.',
  },
  {
    id: 11,
    topic: 'Horizontal × vertical',
    statement: 'Qual é a principal limitação da escalabilidade vertical?',
    options: [
      'Precisa de balanceador de carga',
      'Exige aplicação sem estado',
      'Esbarra no limite físico do hardware e mantém ponto único de falha',
      'Não permite pagamento por uso',
    ],
    correctIndex: 2,
    explanation:
      'Há um teto de hardware por máquina, o crescimento normalmente exige reiniciar a instância e a máquina continua sendo ponto único de falha.',
  },
  {
    id: 12,
    topic: 'Horizontal × vertical',
    statement:
      'Para escalar horizontalmente com eficiência, a aplicação idealmente deve ser:',
    options: [
      'Sem estado (stateless), com balanceador distribuindo as requisições',
      'Monolítica e com sessão gravada na memória do servidor',
      'Instalada em um único servidor de grande porte',
      'Baseada exclusivamente em SOAP',
    ],
    correctIndex: 0,
    explanation:
      'Se a sessão fica presa à memória de um nó, qualquer nó novo quebra a experiência. Estado externo mais balanceador é o que permite crescer somando máquinas.',
  },
  {
    id: 13,
    topic: 'MapReduce',
    statement: 'O MapReduce é corretamente descrito como uma estratégia de:',
    options: [
      'Armazenamento distribuído de arquivos',
      'Processamento distribuído de dados',
      'Balanceamento de carga de rede',
      'Virtualização de servidores',
    ],
    correctIndex: 1,
    explanation:
      'É processamento, não armazenamento. Quem armazena no ecossistema Hadoop é o HDFS.',
  },
  {
    id: 14,
    topic: 'MapReduce',
    statement: 'Onde e quando surgiu o MapReduce?',
    options: [
      'Na Amazon, em 2009, com o serviço EMR',
      'No Google, em 2004, no artigo de Jeffrey Dean e Sanjay Ghemawat',
      'Na Apache Foundation, em 2010, junto com o Spark',
      'Na Microsoft, em 2012, com o HDInsight',
    ],
    correctIndex: 1,
    explanation:
      'Nasceu da necessidade do Google de indexar a web, e foi inspirado nas operações map e reduce da programação funcional.',
  },
  {
    id: 15,
    topic: 'MapReduce',
    statement: 'Que problema histórico motivou o surgimento do MapReduce?',
    options: [
      'A capacidade dos discos cresceu muito mais do que a velocidade de leitura',
      'Os processadores pararam de evoluir',
      'A internet ficou mais lenta nos anos 2000',
      'Os bancos relacionais deixaram de existir',
    ],
    correctIndex: 0,
    explanation:
      'Em 1990 varrer um disco de 1370 MB a 4,4 MB/s levava cerca de 5 minutos. Com discos de terabytes e taxas que não acompanharam, a varredura passou a levar horas, o que exigiu leitura paralela.',
  },
  {
    id: 16,
    topic: 'MapReduce',
    statement: 'Na fase de Map, o que acontece?',
    options: [
      'Os resultados intermediários são agrupados e combinados no resultado final',
      'Os dados são divididos em fragmentos processados em paralelo em nós diferentes',
      'Os blocos são replicados entre datacenters',
      'Os recursos do cluster são alocados aos containers',
    ],
    correctIndex: 1,
    explanation:
      'O Map fragmenta e processa em paralelo gerando pares chave-valor intermediários. Agrupar e combinar é papel do Reduce.',
  },
  {
    id: 17,
    topic: 'MapReduce',
    statement:
      'Para contar quantas vezes cada produto foi vendido, a função reduce deve:',
    options: [
      'Emitir o par (produto, 1) para cada linha de venda',
      'Somar os valores recebidos para cada chave de produto',
      'Ordenar as vendas por data',
      'Dividir o arquivo de vendas entre os nós',
    ],
    correctIndex: 1,
    explanation:
      'O map emite (produto, 1); o reduce recebe todos os valores da mesma chave e soma, devolvendo (produto, total).',
  },
  {
    id: 18,
    topic: 'MapReduce',
    statement: 'Qual serviço gerenciado corresponde a cada provedor?',
    options: [
      'AWS: Dataproc · Google: EMR · Azure: Synapse',
      'AWS: EMR · Google: Dataproc · Azure: HDInsight',
      'AWS: HDInsight · Google: EMR · Azure: Dataproc',
      'AWS: EMR · Google: HDInsight · Azure: Dataproc',
    ],
    correctIndex: 1,
    explanation:
      'Amazon EMR (Elastic MapReduce), Google Cloud Dataproc e Azure HDInsight, este último baseado em Apache Hadoop.',
  },
  {
    id: 19,
    topic: 'MapReduce',
    statement: 'O Apache Spark se diferencia do MapReduce principalmente por:',
    options: [
      'Substituir o HDFS por um novo sistema de arquivos',
      'Processar dados em memória, chegando a ser até 100 vezes mais rápido',
      'Ser escrito em Python em vez de Java',
      'Eliminar a necessidade de cluster',
    ],
    correctIndex: 1,
    explanation:
      'O Spark surgiu para superar as limitações do MapReduce: processamento em memória, dados em tempo real e API unificada. Ele continua rodando sobre cluster, normalmente com YARN e HDFS.',
  },
  {
    id: 20,
    topic: 'Hadoop',
    statement:
      'Qual componente do Hadoop é responsável por gerenciar os recursos do cluster?',
    options: ['HDFS', 'YARN', 'MapReduce', 'NameNode'],
    correctIndex: 1,
    explanation:
      'YARN significa Yet Another Resource Negotiator e gerencia os recursos, atendendo também Spark, Flink e Tez.',
  },
  {
    id: 21,
    topic: 'Hadoop',
    statement: 'Qual é o papel do NameNode no HDFS?',
    options: [
      'Armazenar fisicamente os blocos de dados',
      'Guardar os metadados, isto é, onde cada bloco está',
      'Executar as funções de map e reduce',
      'Alocar containers em cada nó',
    ],
    correctIndex: 1,
    explanation:
      'O NameNode é o nó mestre de metadados. Quem guarda os blocos de fato são os DataNodes.',
  },
  {
    id: 22,
    topic: 'Hadoop',
    statement:
      'No YARN, a diferença entre ResourceManager e NodeManager é que:',
    options: [
      'O ResourceManager aloca recursos globalmente e o NodeManager gerencia os recursos de cada nó',
      'O ResourceManager grava os blocos e o NodeManager os lê',
      'Ambos fazem a mesma coisa em datacenters diferentes',
      'O NodeManager substitui o NameNode quando ele falha',
    ],
    correctIndex: 0,
    explanation:
      'ResourceManager tem visão global do cluster; NodeManager cuida dos containers e recursos locais de um nó.',
  },
  {
    id: 23,
    topic: 'API e web services',
    statement: 'Sobre REST, é correto afirmar que:',
    options: [
      'É um protocolo baseado em XML com envelope obrigatório',
      'É um estilo arquitetural que usa os métodos HTTP e costuma trafegar JSON',
      'Só funciona em nuvem pública',
      'Substituiu o HTTP como protocolo de transporte',
    ],
    correctIndex: 1,
    explanation:
      'REST é estilo arquitetural, acessa recursos identificados por URLs com GET, POST, PUT e DELETE e costuma usar JSON. O protocolo baseado em XML é o SOAP.',
  },
  {
    id: 24,
    topic: 'API e web services',
    statement:
      'Qual afirmação distingue corretamente web services de cloud computing?',
    options: [
      'Web services só existem dentro da nuvem',
      'Web services entregam capacidade de processamento; a nuvem apenas integra sistemas',
      'Web services podem rodar localmente ou na nuvem; os serviços de nuvem são entregues estritamente via internet',
      'Ambos são sinônimos na prática',
    ],
    correctIndex: 2,
    explanation:
      'Web services são tecnologia de comunicação e integração e podem ser on-premise. Cloud computing é a entrega de recursos computacionais pela internet.',
  },
];
