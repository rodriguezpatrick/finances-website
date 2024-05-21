Objetivo do Projeto
O objetivo deste projeto é integrar dados em tempo real fornecidos pelo servidor do Yahoo Finance, permitindo que os usuários recebam atualizações instantâneas sobre os preços das ações. Além disso, o projeto visa construir uma interface interativa onde os usuários possam selecionar ações de interesse e organizar uma carteira de investimentos personalizada.

Introdução Comercial
A área financeira pode ser desafiadora para iniciantes devido à vasta quantidade de informações disponíveis na internet. Muitas vezes, essas informações são desorganizadas e não direcionadas às necessidades específicas dos usuários, resultando em uma experiência confusa e ineficaz. Além disso, os serviços que oferecem informações organizadas e úteis frequentemente cobram preços elevados, fornecendo apenas o básico em termos de funcionalidade.

Nosso projeto visa preencher essa lacuna, oferecendo uma plataforma organizada e acessível que auxilia os usuários a gerenciar sua vida financeira e a obter renda por meio da compra e venda de ações. A plataforma é projetada para ser intuitiva e eficiente, permitindo que os usuários acompanhem as flutuações do mercado em tempo real e tomem decisões informadas sobre seus investimentos.

Introdução Acadêmica
Quando se trata de buscar dados de fontes externas, o Python é frequentemente a primeira escolha devido à sua facilidade de uso e adequação para tais tarefas. No entanto, este projeto demonstra como podemos utilizar a API oficial do Yahoo Finance com uma abordagem que combina JavaScript, HTML e CSS, proporcionando uma experiência interativa e responsiva aos usuários.

Ao nos comunicarmos com o servidor do Yahoo Finance através de uma API, normalmente utilizamos solicitações HTTP (GET, POST, etc.), que retornam dados estruturados em formatos como JSON ou XML. Essas APIs, no entanto, têm limites de taxa de solicitação, restringindo a quantidade de dados que podemos solicitar em um determinado período.

Em contrapartida, ao utilizar uma conexão WebSocket diretamente com o servidor, permitimos uma comunicação bidirecional contínua entre o cliente (nosso aplicativo) e o servidor. Isso significa que, uma vez estabelecida a conexão WebSocket, ela permanece aberta, permitindo o envio e recebimento de dados de forma contínua, sem as restrições de taxa das APIs HTTP tradicionais. Dessa forma, a temporalidade dos dados é mais próxima do tempo real absoluto, pois as atualizações são recebidas assim que ocorrem, sem atrasos significativos.
