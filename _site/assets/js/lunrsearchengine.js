
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Eita. . . Não achei. . . Dá uma olhadinha na nossa página inicial ou usa a janela de busca! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/sobre-mim/",
    "title": "page.title.about",
    "body": "Testando This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/categorias/",
    "title": "pages.categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "",
    "body": "      Posts:                                                                                                     [Tutorial] Configurando uma máquina virtual e Instalando Windows 10 na VMBox              :       Com a VMBox instalada, vamos configurar uma máquina virtual do Windows 10 para fazer tudo o que a gente tiver precisando nesse sistema operacional não muito amado por pessoas desenvolvedoras. . . . :                                       Ana Cecília Vieira                28 Oct 2020                                                                                                                                     [Tutorial] Instalando a Oracle Virtual Box no Ubuntu 20. 04              :       Precisei testar umas coisas no Windows e uso Linux há um bom tempo, então o jeito mais recomendado de fazer isso é subir uma máquina virtual com Windows no meu. . . :                                       Ana Cecília Vieira                28 Oct 2020                                                                                                                                     Como dados abertos contribui para o desenvolvimento de cidades inteligentes              :       Uma sociedade participativa é o principal pilar para o desenvolvimento de cidades mais inteligentes. A ideia desse paradigma, que ainda está em evolução, é que o investimento estratégico em desenvolvimento. . . :                                       Ana Cecília Vieira                20 Oct 2020                                                                                                                                     Como não prender o terminal (shell)              :        Alguns comandos para Controle de Tarefas no Linux. :                                       Ana Cecília Vieira                11 Jul 2020                                                                                                                                     Saindo da zona de conforto?              :        Voltei a ser bibliotecária, membra ativa do PyLadies Recife e WiDS Recife. Daqui começam os registros do que vou aprendendo enquanto tento sair da zona de conforto. :                                       Ana Cecília Vieira                19 Apr 2020                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/atividades/",
    "title": "Tags",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/temas/",
    "title": "Temas",
    "body": ""
    }, {
    "id": 6,
    "url": "http://localhost:4000/categoria/carreira/",
    "title": "carreira",
    "body": ""
    }, {
    "id": 7,
    "url": "http://localhost:4000/categoria/bash/",
    "title": "bash",
    "body": ""
    }, {
    "id": 8,
    "url": "http://localhost:4000/categoria/controle-de-tarefas/",
    "title": "controle de tarefas",
    "body": ""
    }, {
    "id": 9,
    "url": "http://localhost:4000/categoria/linux/",
    "title": "linux",
    "body": ""
    }, {
    "id": 10,
    "url": "http://localhost:4000/categoria/terminal-commands/",
    "title": "terminal commands",
    "body": ""
    }, {
    "id": 11,
    "url": "http://localhost:4000/categoria/terminal/",
    "title": "terminal",
    "body": ""
    }, {
    "id": 12,
    "url": "http://localhost:4000/categoria/cidades-inteligentes/",
    "title": "cidades inteligentes",
    "body": ""
    }, {
    "id": 13,
    "url": "http://localhost:4000/categoria/dados-abertos/",
    "title": "dados abertos",
    "body": ""
    }, {
    "id": 14,
    "url": "http://localhost:4000/categoria/governo-aberto/",
    "title": "governo aberto",
    "body": ""
    }, {
    "id": 15,
    "url": "http://localhost:4000/categoria/opengovernment-partnership/",
    "title": "opengovernment partnership",
    "body": ""
    }, {
    "id": 16,
    "url": "http://localhost:4000/categoria/parceria-para-governo-aberto/",
    "title": "parceria para governo aberto",
    "body": ""
    }, {
    "id": 17,
    "url": "http://localhost:4000/categoria/oracle-virtual-box/",
    "title": "oracle virtual box",
    "body": ""
    }, {
    "id": 18,
    "url": "http://localhost:4000/categoria/vmbox/",
    "title": "vmbox",
    "body": ""
    }, {
    "id": 19,
    "url": "http://localhost:4000/categoria/ubuntu-20-04/",
    "title": "ubuntu 20.04",
    "body": ""
    }, {
    "id": 20,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 21,
    "url": "http://localhost:4000/configurando-uma-maquina-virtual-e-instalando-windows-10-na-vmbox/",
    "title": "[Tutorial] Configurando uma máquina virtual e Instalando Windows 10 na VMBox",
    "body": "2020/10/28 - Com a VMBox instalada, vamos configurar uma máquina virtual do Windows 10 para fazer tudo o que a gente tiver precisando nesse sistema operacional não muito amado por pessoas desenvolvedoras.  Se você ainda não sabe como instalar a Virtual Box da Oracle no Ubuntu 20, vai nesse post que expliquei tudo bem direitinho. A VMBox permite que você configure o computador exatamente como desejar (memória RAM, HD, etc) e isso é muito útil quando temos a imagem ISO de um sistema operacional que não precisa de licença — o que não é o caso do Windows. Então, vou mostrar dois caminhos para configurar uma máquina virtual e instalar o Windows 10:  Usando uma imagem com licença de para teste; Usando uma ISO considerando que você tem a chave para autenticação do Windows. Passo a passo — Usando a imagem Windows para teste:  Baixe a ISO do Windows 10; Descompacte o arquivo;   Clique duas vezes no executável . ova, verifique se o campo “Machine Base Folder” aponta para a pasta onde a VMBox armazena as máquinas virtuais;     Tá feito!   Para iniciar a máquina, abra a VMBox e faça duplo clique em cima da máquina MSEdge — Windows 10     A senha para login está na página que você fez o download da imagem. Passo a passo — Usando uma ISO considerando que você tem a chave para autenticação do Windows:  Baixe a ISO do Windows 10; Execute a VirtualBox;   Clique no botão “New”;       Digite um nome para sua máquina virtual e selecione a versão do Windows;       Selecione a memória (RAM) desejada e clique no botão “Next”. Nesse caso configurei 4Gb pois é o necessário para o que eu quero fazer;       Deixe selecionada a opção “Create a virtual hard disk nowa” e clique no botão “Create”;       Selecione o tipo de disco rígido desejado e clique em “Next”. Sugiro usar o padrão da VMBox, “VDI (VirtualBox Disck Image)”;       Escolha como será o armazenamento em disco e clique em “Next”. A opção “Dynamically allocated” utilizará o espaço em seu disco rígido a medida que for sendo utilizado;       Finalmente, verifique o tamanho do HD da máquina virtual e clique em “Create”       Agora vamos instalar o Windows 10 na máquina virtual que acabamos de criar. Dê duplo clique no título da máquina virtual;       Na primeira execução, será necessário localizar o arquivo ISO do Windows. Clique no ícone amarelo da tela;       Clique em “+ Add” e localize a imagem no seu computador. Após isso, selecione a imagem e clique em “Choose”;       Tá feito!     Para iniciar a máquina, abra a VMBox e faça duplo clique em cima da máquina que você acabou de criar. Te lembra que na primeira inicialização o Windows vai configurar todinho e te pedir a chave de autenticação, sem ela não é possível instalar esse sistema operacional.     Por aqui tudo funcionou sem problema, espero que tu também tenha conseguido. "
    }, {
    "id": 22,
    "url": "http://localhost:4000/instalando-a-oracle-virtual-box-no-ubuntu-20-04/",
    "title": "[Tutorial] Instalando a Oracle Virtual Box no Ubuntu 20.04",
    "body": "2020/10/28 - Precisei testar umas coisas no Windows e uso Linux há um bom tempo, então o jeito mais recomendado de fazer isso é subir uma máquina virtual com Windows no meu Ubuntu, mas eu nunca tinha feito isso antes. Conversando com agumas amigas, cheguei na Virtual Box desenvolvida pela Oracle, VMBox para as intimas. A VMBox é um software de virtualização para computadores com arquiteturas x86/amd64 e suporta os principais sistemas operacionais. Além disso, é um Open Source com licença GPL. Passo a passo da instalação:    Caso você tenha versões anteriores da VMBox instalada no computador , recomendo que a desisntale para que não tenha perigo conflito:   1 sudo apt-get remove virtualbox      Antes de tudo precisamos descobrir o codenome da versão do Ubuntu que estamos usando(eu também não fazia ideia de que isso existia). Abre teu terminal e digita:   1 lsb_release -a      Agora, é necessário escrever a linha ‘deb [arch=amd64] https://download. virtualbox. org/virtualbox/debian contrib’ dentro do arquivo /etc/apt/sources. list. Faremos isso executando o seguinte comando:   1 sudo sh -c 'echo  deb [arch=amd64] https://download. virtualbox. org/virtualbox/debian focal contrib  &gt;&gt; /etc/apt/sources. list'      Faça download e registre a chave pública do repositório:   12 wget -q https://www. virtualbox. org/download/oracle_vbox_2016. asc -O- | sudo apt-key add - wget -q https://www. virtualbox. org/download/oracle_vbox. asc -O- | sudo apt-key add -      Atualize o apt-get:   1 sudo apt-get update      Instale a última versão da VMBox:   1 sudo apt-get install virtualbox      Verifique que tá tudo lindo checando a versão que foi instalada:   1 vboxmanage --version   Se a saída foi algo do tipo “6. 1. 10_Ubuntur138449”, você arrasou na instalação!!! Agora bora aprender a instalar o Windows 10 nessa VM Box, vai nesse post aqui que expliquei o passo a passo. Se a saída foi diferente da versão instalada, dá uma olhadinha de novo no passo a passo ou nas orientações da própia página da Virtual Box, pode ser que tenha havido alguma modificação. "
    }, {
    "id": 23,
    "url": "http://localhost:4000/como-dados-abertos-contribui-para-o-desenvolvimento-de-cidades-inteligentes/",
    "title": "Como dados abertos contribui para o desenvolvimento de cidades inteligentes",
    "body": "2020/10/20 - Uma sociedade participativa é o principal pilar para o desenvolvimento de cidades mais inteligentes. A ideia desse paradigma, que ainda está em evolução, é que o investimento estratégico em desenvolvimento social e infraestrutura de TICs possa fomentar o desenvolvimento econômico sustentável e melhoria na qualidade de vida dos habitantes locais. Segundo algumas autoras, isso nos leva a uma mudança estrutural muito importante, passamos de um modelo de pensamento competitivo para colaborativo, global para local e tomada de decisão por poucos para uma que envolva todas as partes interessadas (Herrschel, 2013, Saint, 2014, van der Graaf and Veeckman, 2014 apud Öberg, 2017). Sem uma sociedade participativa, qualquer estratégia, por mais inteligente que seja, está fadada ao fracasso. Entende-se que as cidades são singulares, com seus próprios desafios, contextos, virtudes e pontos de melhoria, sendo assim, não existe fórmula única para desenvolver sua “inteligência”. Empresas, sociedade civil organizada, governo, universidades, entidades sem fins lucrativos e demais entes sociais devem envolver-se em projetos estratégicos que possam responder às necessidades sociais e econômicas do local, estabelecendo prioridades e sendo flexíveis para adaptar-se às mudanças que possam aparecer. Esse envolvimento de diversos entes sociais na busca por soluções permite ter uma visão holística sobre as demandas a serem tratadas e, espera-se com isso, soluções mais inclusivas. Para que essa participação de todos possa acontecer precisamos de transparência nos dados e informações, além de um governo aberto. Pensando nisso, a iniciativa internacional Parceria para Governo Aberto (Open Governement Partnership) pretende “difundir e incentivar práticas governamentais relacionadas à transparência dos governos, ao acesso à informação pública e à participação social. ” (Brasil, 2014). O Brasil foi um dos oito primeiros signatários dessa parceria que ao longo dos anos tem avançado para o “fortalecimento das democracias e no fomento à inovações e tecnologias para transformar a governança do século XXI”(Brasil, 2014) Como parte do acordo, bianualmente os governos apresentam planos de ações elaborados juntos com a sociedade civil, no qual estabelecem compromissos concretos seguindo os princípios de transparência, participação cidadã, prestação de contas e tecnologia e inovação. Além disso, anualmente deve ser publicado um relatório apresentando a evolução da execução dos compromissos assumidos. Até hoje o Brasil já apresentou quatro planos de ações. Ressalto alguns resultados alcançados em relação a transparência de informações e abertura de dados públicos advindos desses planos: 1º Plano de Ação Brasileiro para Governo Aberto(2011–2013):  Criação do Portal Brasileiro de Dados Abertos para reunir todos os conjuntos de dados dos órgãos do poder executivo federal; Publicação os salários de servidores públicos do poder executivo federal; Desenvolvimento do portal e-SIC (Sistema eletrônico de informação ao cidadão). 2º Plano de Ação Brasileiro para Governo Aberto (2013–2016):  Prestação de Contas Online de Recursos para Educação no Âmbito do Fundo Nacional de Desenvolvimento da Educação; Construção de painel público unificado de informações sobre os dados de execução do Programa Água para Todos; Desenvolvimento de Ferramentas para transparência e melhoria da Governança Fundiária; Criação do Banco de Preço da Administração Pública Federal; Abertura dos dados da execução do orçamento da União e das compras governamentais; Dados educacionais abertos; Dados abertos no âmbito do Ministério da Justiça e cidadania; Sistema de informações sobre a Lei Maria da Penha. 3º Plano de Ação Brasileiro para Governo Aberto (2016–2018):  Criação de espaço de diálogo entre governo e sociedade para a geração e implementação de ações voltadas a transparência em meio ambiente. Atualmente estamos em fase de execução do 4º Plano de Ação Brasileiro para Governo Aberto (2018–2021), o qual firma os seguintes compromissos no eixo de transparência de dados e informação:  Transparência e controle no processo de reparação de Mariana e região; Transparência do processo legislativo; Transparência fundiária; Lei de Acesso a Informação em Estados e Municípos; Ecosistema de dados. O compromisso relacionado ao ecossistema de dados tem como objetivo “estabelecer, de forma colaborativa, um modelo de referência de política de dados abertos que promova integração, capacitação e sensibilização entre sociedade e as três esferas de governo, a partir do mapeamento das demandas sociais. ”(Brasil, 2018). Como produto, foi lançado em maio/ 2020 o “Modelo de referência de abertura de dados” para orientar “gestores, agentes públicos [de todas as esferas de poder e entes federativos] e sociedade quanto à importância do uso, publicação, sustentação e monitoramento dos dados abertos” (Brasil, 2020). Já no âmbito legislativo tivemos a aprovação da Lei de Acesso à Informação em 2011 (Lei 12. 527/2011), o Decreto 8. 777/2016 que instituiu a Política de Dados Abertos do Poder Executivo Federal e este ano foi aprovado o Decreto 10. 332/2020 que atualiza a Estratégia de Governo Digital para o período 2020–2022, trazendo em seu bojo o Plano de Transformação Digital, Plano Diretor de Tecnologia da Informação e Comunicação e o Plano de Dados aberto conforme decreto mencionado. Mas não adianta muito todo esse esforço para mudar a cultura governamental e abrir os dados se eles não forem reutilizados. O que agrega valor aos dados publicados pelos órgãos públicos é seu reuso por parte do próprio governo e da sociedade. No começo do texto falei que uma das mudanças de paradigmas que trás o conceito de cidades inteligentes é sair de um modelo global para focar na criação de soluções locais, pensando as cidades como entes singulares com suas próprias complexidades e contextos. O que possibilita essa análise única das cidades é a quantidade de dados que produzimos o tempo inteiro, tanto com os sensores espalhados pela cidade (exemplo: de trânsito, de clima e câmeras de segurança) , quanto através dos nossos dispositivos pessoais.  Quando se tem suficiente dados e metadados de algo, conseguimos entender seu comportamento, suas debilidades e pontos fortes. Ou seja, dados são o insumo para que os diversos entes sociais possam desenvolver projetos estratégicos para o avanço tecnológico, econômico e social. A coleta, análise e reuso desses dados é o que possibilita o aumento da inteligência de uma cidade. Vale ressaltar que me refiro a dados abertos, aqueles que não sofrem nenhum tipo de embargo legislativo; a dados de domínio público, ou seja, aqueles que qualquer pessoa pode livremente usá-los, reutilizá-los e redistribuí-los, sendo exigido, no máximo, a creditação da autoria e compartilhamento usando a mesma licença (Open Knowledge Foundation, [201-?]). Sejam eles dados abertos governamentais ou de empresas — grandes empresas também estão em um movimento para abrir os seus dados como forma de demonstrar seu comprometimento com a transparência e sustentabilidade dos seus negócios, por exemplo a Nike, Nubank, Uber e Enel já publicaram alguns conjuntos de dados em formato aberto. Não estou falando sobre dados pessoais, esse tipo de dado a Lei Geral de Proteção de Dados Pessoais (Lei 13. 709/2018) reconhece que cada pessoa é dona dos seus próprios dados e pode administrá-los. Tá, mas como sei se um dado é aberto?: Existem 3 leis pensadas para Dados Governamentais Abertos e que podem ser aplicadas de forma ampla. São elas:    Se não pode ser pesquisável ou indexado na web, não existe;  Se não estiver em formato aberto e legível por máquina, não pode ser reutilizado;  Se sofrer algum tipo de embargo para reutilização, não é útil.   (EAVES. CA, 2009) O Decreto 8. 777/2016 define dado aberto como “dados acessíveis ao público, representados em meio digital, estruturados em formato aberto, processáveis por máquina, referenciados na internet e disponibilizados sob licença aberta que permita sua livre utilização, consumo ou cruzamento, limitando-se a creditar a autoria ou a fonte;” Formato aberto quer dizer um formato de arquivo que suas especificações estejam documentadas publicamente e de livre acesso, isso quer dizer que aquele arquivo . xls do Excel não é formato aberto, ele é de propriedade da Microsoft. O tipo de arquivo que costumamos usar para representar planilha é o . csv. Dois dos principais objetivos para abertura de dados são: fomentar o controle social para uma gestão pública participativa e democrática e promover o desenvolvimento tecnológico e a inovação. Já conseguimos encontrar alguns aplicativos e serviços que seus desenvolvimentos só foram possíveis a partir de abertura de dados, por exemplo:  Cittamobi: usa dados abertos sobre o trânsito atrelado a dados das companhias de transporte público para fornecer o serviço de previsão de horário do transporte público, melhor rota usando esses mesmo tipo de transporte etc.  Grafeno6: fornece para prefeituras uma análise detalhada sobre a educação dos municípios. Outro produto é na área de licitação, fornecendo análises sobre as licitações que a empresa participa/participou e permitir que ela acompanhe como está sua concorrência.  Os vários painéis da COVID-19 no país. Destaco o do Brasil. IO que reúne dados de todos os municípios brasileiros em um painel bem completo.  Serenata de amor: avalia as Cota para Exercício da Atividade Parlamentar (CEAP) de deputados federais e senadores e quando encontra algum gasto suspeito publica um tweet com o nome do parlamentar e o link para a nota fiscal e dados da empresa que a emitiu. Mas, nem tudo são flores. Como ouvimos falar no começo desse ano, a Uber começou a emitir alertas de segurança para motoristas e até impedir o pedido de corridas oriundas de áreas classificadas como de risco. Essa classificação é feita após análise de machine learning usando dados de corridas realizadas pela própria empresa. A 99 também faz o mesmo tipo de classificação desde 2017, mesclando dados de suas corridas com os dados abertos de segurança pública (El país, 2020). Esse tipo de “solução” tem um impacto social negativo enorme, piora o estigma que a população daquela área sofre e aprofunda a exclusão do seu acesso a serviços. Além de abrir os dados é preciso estimular o ecossistema de dados envolvendo todos os entes sociais para que o uso desses dados e o desenvolvimento de tecnologias seja pensando na melhoria da qualidade de vida de todos. Transparência nas informações, abertura de dados e a participação de diversos entes sociais no desenvolvimento de soluções para a cidade é essencial para que caminhemos na direção de cidades inteligentes e não para uma cidade meramente tecnológica que aprofunde cada vez mais seus problemas sociais. Esse texto foi composto por anotações da palestra “Dados abertos e Cidades inteligentes” que apresentei para o grupo de pesquisa em Cidades Inteligentes da Liga Pernambucana de Direito Digital da Universidade de Pernambuco em 19 de outubro de 2020. Continue estudando::  A (more?) intelligent city Index Cities in Motion Ciudades inteligentes: el poder de nuestros datos Ciudades inteligentes: el dilema entre la privacidad de datos y bien común Datos abiertos y ciudades inteligentes en América Latina: Estudio de casos Deloitte. Open data: Driving growth, ingenuity and innovation"
    }, {
    "id": 24,
    "url": "http://localhost:4000/como-nao-prender-o-terminal-bash/",
    "title": "Como não prender o terminal (shell)",
    "body": "2020/07/11 -  Alguns comandos para Controle de Tarefas no Linux. Solução rápida: 123#Adicione &amp; no final da linha do scriptbundle exec jekyll serve &amp;É bem comum eu ter uma dúvida besta, procurar rapidinho a solução no Google, achar, aplicar e não guardar o comando porque “vai ser fácil achar de novo”. O tempo passa e a mesma dúvida volta, sendo que dessa vez passo meia hora buscando aquele específico link maravilhoso que me ajudou outrora. Saber como continuar usando o terminal ainda que esteja rodando uma aplicação bloqueante é uma dessas coisas que me leva minutos de vida regoogleando por uma solução. Aplicações bloqueantes são aquelas que prendem o terminal mostrando os logs com o que tá acontecendo enquanto você faz alterações e testes, por exemplo o Pelican e o Bundle. Quando isso acontece, as vezes, abro um novo terminal, maaaasssss é possível continuar vendo os logs e seguir o usando o mesmo shell. Meu fluxo, geralmente, é assim:    Adicionar &amp; no final do script pra não prender o terminal;   1 bundle exec jekyll serve &amp;      Pressionar Enter para reaparecer o cursor;     Fazer todas as modificações necessárias e quando quiser fechar a aplicação;     Verificar as tarefas (job) que tão rodando no fundo (background);   1 jobs      Selecionar a tarefa (job) que desejo trazer para primeiro plano;   1 fg [n. tarefa]      Encerrar a tarefa (job).  A linguagem Bash é massa, então existem mais uns comandos para Controle de Tarefas. Dá uma olhadinha nesse capítulo 15 do Advanced Bash-Scripting Guide ou nesse post sobre Controle de Tarefas no Shell do Linux. "
    }, {
    "id": 25,
    "url": "http://localhost:4000/saindo-da-zona-de-conforto/",
    "title": "Saindo da zona de conforto?",
    "body": "2020/04/19 -  Voltei a ser bibliotecária, membra ativa do PyLadies Recife e WiDS Recife. Daqui começam os registros do que vou aprendendo enquanto tento sair da zona de conforto. Há 10 anos me formei em Biblioteconomia pela UFPE. Antes de colar grau já tinha passado na seleção de uma grande empresa e assim começou minha carrera como bibliotecária, no SENAI Pernambuco. Depois de 5 anos, trabalhar com informação apenas no âmbito de uma biblioteca tradicional já não me satisfazia, foi aí que conheci a comunidade PyLadies Recife durante o primeiro evento, em 6 set. 2014, “um encontro para nunca mais esquecer”. Foi muito massa e inspirador ver tantas mulheres de áreas de conhecimento diferentes desejando o mesmo que eu, sair da sua zona de conforto. Foram várias tentativas de estudar lógica de programação usando Python como ferramenta. Acho que fui uma das poucas a passar 4 anos para concluir o curso “Python para zumbis” do professor Fernando Masanori.  Em 2017 conheci o Women in Data Science Recife (WiDS Recife) e o maravilhoso mundo multidisciplinar da Ciência de Dados. No ano seguinte tive o privilégio de parar de trabalhar e me dedicar apenas a estudar o que eu queria: tecnologia da informação, dados, gestão da informação. Fui parar em Valência - ES, no Máster Oficial Universitario en Gestión de la Información da Escola Tècnica Superior d’Enginyeria Informàtica (UPV). Organizei o primeiro Women in Data Science Valencia. Fui acolhida pela comunidade de aprendizagem autogestinada DevScola e aí conheci Ruby. Não terminei o mestrado, voltei para Recife para tomar posse de um cargo público na UFPE. Voltei a ser bibliotecária, a ser membra ativa do PyLadies Recife e WiDS Recife. Daqui começam os registros do que vou aprendendo enquanto tento não voltar para a zona de conforto. Pode ser que apareçam umas receitas de comida entre uma técnica e uma ferramenta. Pode ser que tenham umas coisas em espanhol… inglês… ou outro idioma que essa quarentena da Covid-19 (Sars-CoV-2) possa me proporcionar tempo para aprender. Quem sabe? "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});