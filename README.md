# Projeto de avaliação da Disciplina - DevOps


## Componentes de avaliação 
1. Modelo de Workflow escolhido pelo grupo foi Git Feature Branch Workflow, justificativas da escolha:
  
**a. Vantagens?**
O Git Feature Branch Workflow, é uma fluxo simples e baseado em branchs de funcionalidades, partindo de branch principal(main), como fluxo de revisão de código. 
Permiti que tenhamos uma fluxo de integração de código continuo e 
de entregas continuas, sendo bem indicado para o nosso projeto, pois utilizamos as práticas DevOps. Defini uma fluxo de merge request, que além de validar o código que será integrado a branch principal,
dá conhecimento para os colegas do time do que foi feito e da forma que esta implementada, dividindo o conhecimento e a responsábilidade 
entre o time. Não exige uma carga cognitiva muito alto do time, para manter o fluxo de trabalho coeso e integrado. 
O Fluxo também pode ser usado como base, para customizações ou utilizações com outros Workflows. 


**b. Desvantagens?** 
  - O uso do rebase para atualização da branch feature pode ser complexo em terminadas situações. 
  - Caso o código tenha sido integrado com a branch principal antes da hora, pode ser necessário realizar reversão 
  de código.


**c. Quais os cenário o grupo entende que o pipeline será capaz de cobrir, aqui considere elementos como features releases, tags, visualização de histórico dos commits etc.**
Entendemos que o Git Feature Branch Workflow, cobre todo o pipeline definido para o projeto. Através do fluxo de trabalho escolhido, teremos branchs para cada funcionalidade,
que permiti paralelizar o desenvolvimento e integrar o código de forma continua, disparando o pipeline de construção e entrega do projeto. 
A cada nova versão será criada uma tag, para possíbilitar consultar o código de uma versão espeficica ou até mesmo voltar para uma versão a partir de uma tag. 


**d. Qual o modelo de integração que será utilizado com o pipeline (Delivery ou Deployment Contínuo) e quais as motivações para esta escolha;**
Optamos pelo pipeline de Deployment Contínuo(CI/CD), para gerar constantemente valor para o cliente, como disponibilização de novas funcionalidades
e correções de bugs. 
Através de entregas menores e continuas conseguimos diminuir a quantidade erros em produção e facilidade uma reversão de versão, caso a ultima alteração tenha causado um erro. 
Nas etapas do pipeline, existem verificações de qualidade do código e testes automatizados, para tentar garantir que as funcionalidade já existentes continuem funcionando e
que a nova tem testes suficientes para entrar em produção. 


analisar e reverter com facilidade qualquer alteração que possa gera erros na aplicação. 
A construção de um bom pipeline de build e deploy e essencial para mitigar problemas em produção. O pipeline terá 
Para mitigar problemas nas entregas continuas, o processo de revisão de código, e da execução de testes, analise estática de código(Sonar) durante o processo de CI, são
essências para o bom funcionamento do pipeline, como também um boa integração entre os time de operações e desenvolvimento, que construem 
e evoluem o pipeline em conjunto. 

