# API Escola


Este é um projeto de uma API desenvolvida em NodeJS e SQL que permite a criação e gerenciamento de turmas, alunos, professores e disciplinas.


## Funcionalidades

* Cadastrar turmas, alunos e disciplinas de cada turma
* Cadastrar um professor e as disciplinas que ele leciona
* Buscar os dados de um professor com suas disciplinas
* Buscar um aluno com a sua turma, as disciplinas de sua turma e os professores de cada disciplina
* Remover um aluno e/ou professor
* Notificar os alunos quando uma nova disciplina for adicionada em sua turma (simulado através de um log ou serviço de filas)

## Organização do projeto

```lua

api/
├── migrations/
│   ├── 20210316160000-create-professors-table.js
│   ├── 20210316170000-create-disciplines-table.js
│   ├── 20210316180000-create-students-table.js
│   ├── 20210317120000-create-classes-table.js
│   ├── 20210318140000-add-disciplines-to-classes-table.js
│   ├── 20210319120000-add-students-to-classes-table.js
│   └── 20210320100000-add-professors-to-disciplines-table.js
├── src/
│   ├── controllers/
│   │   ├── classesController.js
│   │   ├── disciplinesController.js
│   │   ├── professorsController.js
│   │   └── studentsController.js
│   ├── models/
│   │   ├── Class.js
│   │   ├── Discipline.js
│   │   ├── Professor.js
│   │   └── Student.js
│   ├── routes/
│   │   ├── classes.js
│   │   ├── disciplines.js
│   │   ├── index.js
│   │   ├── professors.js
│   │   └── students.js
│   ├── services/
│   │   ├── emailService.js
│   │   └── notificationService.js
│   ├── utils/
│   │   └── logger.js
│   ├── app.js
│   └── index.js
├── tests/
│   ├── controllers/
│   │   ├── classesController.test.js
│   │   ├── disciplinesController.test.js
│   │   ├── professorsController.test.js
│   │   └── studentsController.test.js
│   ├── models/
│   │   ├── Class.test.js
│   │   ├── Discipline.test.js
│   │   ├── Professor.test.js
│   │   └── Student.test.js
│   ├── services/
│   │   ├── emailService.test.js
│   │   └── notificationService.test.js
│   └── utils/
│       └── logger.test.js
├── config/
│   ├── config.js
│   ├── database.js
│   └── logger.js
├── .env.example
├── package.json
└── README.md


```

A pasta migrations contém os arquivos de migração para criação das tabelas do banco de dados.

A pasta src contém os arquivos com as rotas, modelos, controladores e serviços da API.

A pasta tests contém os arquivos de testes para garantir o funcionamento correto da API.

A pasta config contém os arquivos de configuração da API, como




## Usage

```terminal

cd api 

npm init 

npm install
```



## License

[MIT](https://choosealicense.com/licenses/mit/)