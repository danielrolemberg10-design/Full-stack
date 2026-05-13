# ==================================
# FEItv
# ==================================

usuario_logado = None

# =========================
# CADASTRAR USUÁRIO
# =========================

def cadastrar_usuario():

    print()
    print("CADASTRO")
    nome = input("Nome: ")
    senha = input("Senha: ")
    arquivo = open("usuarios.txt", "a")
    arquivo.write(f"{nome} {senha}")
    arquivo.write(chr(10))
    arquivo.close()

    print("Usuário cadastrado!")


# =========================
# LOGIN
# =========================

def login():

    print()
    print("LOGIN")

    nome = input("Usuário: ")
    senha = input("Senha: ")
    arquivo = open("usuarios.txt", "r")
    linhas = arquivo.readlines()
    arquivo.close()

    for linha in linhas:
        dados = linha.split()
        usuario_arquivo = dados[0]
        senha_arquivo = dados[1]
        if nome == usuario_arquivo and senha == senha_arquivo:

            print("Login realizado!")

            return nome

    print("Usuário ou senha incorretos!")

    return None


# =========================
# LISTAR VÍDEOS
# =========================

def listar_videos():
    print()
    print("LISTA DE VÍDEOS")
    arquivo = open("videos.txt", "r")
    linhas = arquivo.readlines()
    arquivo.close()
    for linha in linhas:
        dados = linha.split()
        print("ID:", dados[0])
        print("Nome:", dados[1])
        print("Tipo:", dados[2])
        print("Curtidas:", dados[3])
        print("----------------")


# =========================
# BUSCAR VÍDEO
# =========================

def buscar_video():
    print()
    print("BUSCAR VÍDEO")

    busca = input("Digite o nome: ")
    arquivo = open("videos.txt", "r")
    linhas = arquivo.readlines()
    arquivo.close()

    encontrou = False

    for linha in linhas:

        dados = linha.split()

        nome_video = dados[1]

        if busca.lower() in nome_video.lower():

            print()
            print("Vídeo encontrado!")
            print("Nome:", dados[1])
            print("Tipo:", dados[2])
            print("Curtidas:", dados[3])
            encontrou = True
    if encontrou == False:
        print("Vídeo não encontrado!")


# =========================
# CURTIR VÍDEO
# =========================

def curtir_video():

    print()
    print("CURTIR VÍDEO")
    id_video = input("Digite o ID: ")
    arquivo = open("videos.txt", "r")
    linhas = arquivo.readlines()
    arquivo.close()
    novo_arquivo = open("videos.txt", "w")
    for linha in linhas:

        dados = linha.split()

        if dados[0] == id_video:

            curtidas = int(dados[3])

            curtidas = curtidas + 1

            nova_linha = f"{dados[0]} {dados[1]} {dados[2]} {curtidas}"

            novo_arquivo.write(nova_linha)
            novo_arquivo.write(chr(10))

        else:

            novo_arquivo.write(linha)

    novo_arquivo.close()

    print("Vídeo curtido!")


# =========================
# FAVORITOS
# =========================

def adicionar_favorito(usuario):

    print()
    print("ADICIONAR FAVORITO")

    id_video = input("Digite o ID do vídeo: ")

    arquivo = open("favoritos.txt", "a")

    arquivo.write(f"{usuario} {id_video}")
    arquivo.write(chr(10))

    arquivo.close()

    print("Favorito adicionado!")


# =========================
# VER FAVORITOS
# =========================

def ver_favoritos(usuario):

    print()
    print("SEUS FAVORITOS")

    arquivo_favoritos = open("favoritos.txt", "r")
    favoritos = arquivo_favoritos.readlines()
    arquivo_favoritos.close()
    arquivo_videos = open("videos.txt", "r")
    videos = arquivo_videos.readlines()
    arquivo_videos.close()
    for favorito in favoritos:

        dados_favorito = favorito.split()

        usuario_favorito = dados_favorito[0]
        id_video = dados_favorito[1]

        if usuario == usuario_favorito:

            for video in videos:

                dados_video = video.split()

                if dados_video[0] == id_video:

                    print(dados_video[1])


# =========================
# MENU
# =========================

while True:

    print()
    print("======= FEItv =======")
    print("1 - Cadastrar usuário")
    print("2 - Fazer login")
    print("3 - Listar vídeos")
    print("4 - Buscar vídeo")
    print("5 - Curtir vídeo")
    print("6 - Adicionar favorito")
    print("7 - Ver favoritos")
    print("0 - Sair")

    opcao = input("Escolha: ")

    if opcao == "1":

        cadastrar_usuario()

    elif opcao == "2":

        usuario_logado = login()

    elif opcao == "3":

        listar_videos()

    elif opcao == "4":

        buscar_video()

    elif opcao == "5":

        curtir_video()

    elif opcao == "6":

        if usuario_logado != None:

            adicionar_favorito(usuario_logado)

        else:

            print("Faça login primeiro!")

    elif opcao == "7":

        if usuario_logado != None:

            ver_favoritos(usuario_logado)

        else:

            print("Faça login primeiro!")

    elif opcao == "0":

        print("Sistema encerrado!")

        break

    else:

        print("Opção inválida!")