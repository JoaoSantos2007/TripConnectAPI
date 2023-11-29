# TripConnectAPI - Documentação do Projeto

Bem-vindo à documentação da API de viagens TripConnectAPI, desenvolvida como parte do 7º Challenge de Back-End da Alura. Esta API foi criada para fornecer informações sobre destinos de viagem e depoimentos de viajantes.

## Introdução

A TripConnectAPI é uma plataforma que permite aos usuários acessar informações sobre diferentes destinos de viagem e ler depoimentos autênticos de outros viajantes.

## Tecnologias Utilizadas

- Linguagem de Programação: NodeJS
- Framework: Express e Sequelize
- Banco de Dados: MySQL
- API Externa: OpenAI API

---

## Configurações do Arquivo .env

O arquivo `.env` é utilizado para armazenar variáveis de ambiente sensíveis ou específicas do ambiente de execução do projeto. Essas variáveis normalmente incluem chaves de API, senhas, tokens de acesso e outras informações confidenciais.

### Passos para Configuração

1. **Criação do arquivo `.env`:** Se o arquivo `.env` ainda não existe, crie um novo arquivo na raiz do projeto e nomeie-o como `.env`.

2. **Estrutura do Arquivo `.env`:** O arquivo `.env` deve seguir a estrutura chave=valor, onde cada linha representa uma variável de ambiente. Por exemplo:
    ```plaintext
    PORT=porta_da_aplicação
    MYSQL_DATABASE=nome_do_banco_de_dados
    MYSQL_USERNAME=usuario_do_banco_de_dados
    MYSQL_PASSWORD=senha_do_banco_de_dados
    MYSQL_HOST=host_do_banco_de_dados
    OPENAI_API_KEY=chave_da_API
    ```

3. **Variáveis Existentes:**

    - `PORT`: Substitua isso pela porta desejada.
    - `MYSQL_DATABASE`: Substitua isso pela nome do seu banco de dados.
    - `MYSQL_USERNAME`: Substitua isso pela usuario do seu banco de dados.
    - `MYSQL_PASSWORD`: Substitua isso pela senha do seu banco de dados.
    - `MYSQL_HOST`: Substitua isso pelo host do seu banco de dados.
    - `OPENAI_API_KEY`: Substitua isso pela chave secreta da api do chatgpt.

4. **Ignorar o Arquivo `.env` no Versionamento:** Certifique-se de adicionar o arquivo `.env` ao seu arquivo `.gitignore` para evitar o versionamento e compartilhamento acidental de informações sensíveis.
    ```plaintext
    # Arquivo .env
    .env
    ```

### Nota de Segurança

Nunca compartilhe seu arquivo `.env` publicamente ou inclua-o em seu repositório Git. Mantenha-o sempre seguro e protegido para evitar exposição de informações sensíveis.

---

## Considerações Finais

A TripConnectAPI é uma ferramenta poderosa para quem busca informações detalhadas sobre destinos de viagem e deseja ler depoimentos autênticos antes de planejar sua próxima aventura. A Integração com o a API do ChatGPT foi feita para fornecer uma descrição mais detalhada e poderosa sobre o destino escolhido
