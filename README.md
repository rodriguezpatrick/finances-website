# Projeto Yahoo Finance (Javascript, HTML e CSS)

## Objetivo do Projeto

O objetivo deste projeto é integrar dados em tempo real fornecidos pelo servidor do Yahoo Finance, permitindo que os usuários recebam atualizações instantâneas sobre os preços das ações. Além disso, o projeto visa construir uma interface interativa onde os usuários possam selecionar ações de interesse e organizar uma carteira de investimentos personalizada.

## Introdução Comercial

A área financeira pode ser desafiadora para iniciantes devido à vasta quantidade de informações disponíveis na internet. Muitas vezes, essas informações são desorganizadas e não direcionadas às necessidades específicas dos usuários, resultando em uma experiência confusa e ineficaz. Além disso, os serviços que oferecem informações organizadas e úteis frequentemente cobram preços elevados, fornecendo apenas o básico em termos de funcionalidade.

Nosso projeto visa preencher essa lacuna, oferecendo uma plataforma organizada e acessível que auxilia os usuários a gerenciar sua vida financeira e a obter renda por meio da compra e venda de ações. A plataforma é projetada para ser intuitiva e eficiente, permitindo que os usuários acompanhem as flutuações do mercado em tempo real e tomem decisões informadas sobre seus investimentos.

## Introdução Acadêmica

Quando se trata de buscar dados de fontes externas, o Python é frequentemente a primeira escolha devido à sua facilidade de uso e adequação para tais tarefas. No entanto, este projeto demonstra como podemos utilizar a API oficial do Yahoo Finance com uma abordagem que combina JavaScript, HTML e CSS, proporcionando uma experiência interativa e responsiva aos usuários.

Ao nos comunicarmos com o servidor do Yahoo Finance através de uma API, normalmente utilizamos solicitações HTTP (GET, POST, etc.), que retornam dados estruturados em formatos como JSON ou XML. Essas APIs, no entanto, têm limites de taxa de solicitação, restringindo a quantidade de dados que podemos solicitar em um determinado período.

Em contrapartida, ao utilizar uma conexão WebSocket diretamente com o servidor, permitimos uma comunicação bidirecional contínua entre o cliente (nosso aplicativo) e o servidor. Isso significa que, uma vez estabelecida a conexão WebSocket, ela permanece aberta, permitindo o envio e recebimento de dados de forma contínua, sem as restrições de taxa das APIs HTTP tradicionais. Dessa forma, a temporalidade dos dados é mais próxima do tempo real absoluto, pois as atualizações são recebidas assim que ocorrem, sem atrasos significativos.

## Metodologia

Explique como o projeto será desenvolvido, quais tecnologias serão utilizadas e por que foram escolhidas. Detalhe as etapas do desenvolvimento, desde a configuração inicial até a implementação das funcionalidades principais.

### Exemplo:
Tecnologias Utilizadas: Descreva as tecnologias escolhidas, como React para a interface de usuário, Node.js para o servidor, e WebSocket para a comunicação em tempo real.

Estrutura do Projeto: Explique a arquitetura do projeto, como o frontend e backend se comunicam, e a estrutura dos componentes principais.

Etapas do Desenvolvimento: Liste as fases do desenvolvimento, como planejamento, desenvolvimento, testes e implementação.

## Implementação Técnica

Descreva os detalhes técnicos do projeto. Isso inclui a configuração das conexões WebSocket, integração com a API do Yahoo Finance, e a construção da interface de usuário.

### Exemplo:

Configuração do WebSocket: Mostre como configurar e manter uma conexão WebSocket para receber dados em tempo real.

Integração com a API do Yahoo Finance: Explique como fazer chamadas para a API, incluindo autenticação, endpoints utilizados e tratamento de respostas.

Interface de Usuário: Detalhe como a interface foi projetada e construída, incluindo a seleção de ações e a organização da carteira.

## Testes e Validação

Descreva como o projeto será testado para garantir que funcione corretamente e atenda às necessidades dos usuários. Isso inclui testes de funcionalidade, desempenho e usabilidade.

### Exemplo:

Testes de Funcionalidade: Explique como você verificará se todas as funcionalidades do projeto estão operando conforme o esperado.

Testes de Desempenho: Descreva como você avaliará a performance do aplicativo, especialmente em termos de tempo de resposta e manejo de grandes volumes de dados.

Testes de Usabilidade: Discuta como você planeja testar a interface com usuários reais para garantir que seja intuitiva e fácil de usar.

## Resultados Esperados

Explique quais são os resultados esperados do projeto, tanto do ponto de vista técnico quanto do ponto de vista do usuário.

### Exemplo:

Do Ponto de Vista Técnico: Espera-se que o sistema seja capaz de manter uma conexão estável com o servidor do Yahoo Finance e processar dados em tempo real sem interrupções.

Do Ponto de Vista do Usuário: Os usuários devem ser capazes de selecionar e monitorar ações facilmente, organizar suas carteiras e tomar decisões informadas com base em dados precisos e atualizados.

## Conclusão

Resuma o que foi discutido no projeto e reitere a importância e os benefícios da aplicação desenvolvida.

### Exemplo:

Sumário do Projeto: Recapitule os objetivos, metodologias e principais funcionalidades do projeto.

Impacto Esperado: Discuta o impacto que a aplicação terá para os usuários e o mercado financeiro em geral.

## Referências

Inclua todas as fontes e referências utilizadas no desenvolvimento do projeto, como documentação de APIs, tutoriais, artigos acadêmicos, etc.

## Anexos (se necessário)

Adicione quaisquer documentos adicionais que possam ser úteis, como diagramas de arquitetura, capturas de tela da interface, ou trechos de código.
