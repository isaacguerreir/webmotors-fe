# Front-end WebMotors

Esse é o teste da WebMotors para exemplificar qual é a minha experiência com front-end stack. O projeto é bem interessante e minha tentativa foi de tentar recriar o mais próximo possível da tela original seguindo as regras pré-estabelicidas pelo documento compartilhado e não utilizar nenhuma biblioteca de componentes preexistentes. O resultado final é esse.

## Como instalar

Para instalar basta rodar o comando:

```
npm install
```

## Como rodar o projeto

Para visualizar o projeto localmente basta rodar o comando:

```
npm start
```

O projeto vai ficar disponível em `localhost:3000`. Caso ela esteja ocupada aconselho observar qual outra porta o Webpack Server irá utilizar e indicar após rodar o comando acima.

## Observações

Como eu disse o teste foi ótimo. Apesar disso, devido ao tempo limitado e fatores externos ficaram faltando alguns pontos cruciais. Vou listar de um por um por ordem de importância para indicar quais melhorias eu faria particularmente se tivesse mais tempo:

- Fazer consumo da API para preenchimento
- Testes unitários
- Testes de integração
- Snapshots para observar mudanças de renderização da página commitados
- Criar abstrações de componentes que pudessem abarcar melhor pequenas mudanças (Selects é um caso bem específico que pode melhorar bastante)