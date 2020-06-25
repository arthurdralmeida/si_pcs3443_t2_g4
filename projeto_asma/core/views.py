from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets, permissions, generics
from knox.models import AuthToken
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from datetime import date

from .models import *
from .serializers import *
from .models import *



# ----------------
# API DE LOGIN
# ----------------
class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user


class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })

class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class getAdminLogged(APIView):
    serializer_class = AdminSistemaSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=AdminSistema.objects.get(login=user)
        serializer = AdminSistemaSerializer(data, context={'request': request})
        return Response(serializer.data)

class getPacienteLogged(APIView):
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        print(request)
        user = User.objects.get(username=request.user)
        print(request)
        data=Paciente.objects.get(login=user)
        serializer = PacienteSerializer(data, context={'request': request})
        return Response(serializer.data)

class getAgenteDeSaudeLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=AgenteDeSaude.objects.get(login=user)
        serializer = AgenteDeSaudeSerializer(data, context={'request': request})
        return Response(serializer.data)


# ----------------
# API DE PACIENTE
# ----------------
class getPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=Paciente.objects.get(pk = request.data['paciente_pk'])
        serializer = PacienteSerializer(data, context={'request': request})
        return Response(serializer.data)

class getPacienteList(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        data=Paciente.objects.all()
        serializer = PacienteSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListPacienteEmEsperaDeMedico(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        data=Paciente.objects.filter(emEsperaDeMedico=True)
        serializer = PacienteSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListPacienteComMedico(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        data=Paciente.objects.filter(emEsperaDeMedico=False)
        serializer = PacienteSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)


class createPaciente(APIView):
    serializer_class = PacienteSerializer
    def post(self, request, *args, **kwargs):
        print(request.data)
        user = User.objects.create(
            username = request.data['email'],
            password = request.data.login['password'],
        )
        user.save()
        paciente = Paciente.objects.create(
            nome = request.data['nome'],
            dataNascimento = request.data['dataNacimento'],
            peso = request.data['peso'],
            grauAsma = request.data['grauAsma'],
            altura = request.data['altura'],
            cpf = request.data['cpf'],
            login = user,
            emEsperaDeMedico = request.data['emEsperaDeMedico'],
            cadastro = request.data['cadastro'],
        )
        paciente.save()
        serializer = PacienteSerializer(data=paciente)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editPacienteLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        paciente.nome = request.data['nome']
        paciente.dataNascimento = request.data['dataNascimento']
        paciente.peso = request.data['peso']
        paciente.grauAsma = request.data['grauAsma']
        paciente.altura = request.data['altura']
        paciente.cpf = request.data['cpf']
        paciente.emEsperaDeMedico = request.data.emEsperaDeMedico
        paciente.save()
        serializer = PacienteSerializer(data=paciente)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def post(self, request, *args, **kwargs):
        paciente = Paciente.objects.get(pk=request.data.paciente_pk)
        paciente.nome = request.data['nome']
        paciente.dataNascimento = request.data['dataNascimento']
        paciente.peso = request.data['peso']
        paciente.grauAsma = request.data['grauAsma']
        paciente.altura = request.data['altura']
        paciente.cpf = request.data['cpf']
        paciente.emEsperaDeMedico = request.data['emEsperaDeMedico']
        paciente.save()
        serializer = PacienteSerializer(data=paciente)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ----------------------
# API DO AGENTE DE SAUDE
# -----------------------
class getListAgenteDeSaude(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def get(self, request, *args, **kwargs):
        data=AgenteDeSaude.objects.all()
        serializer = AgenteDeSaudeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class createAgenteDeSaude(APIView):
    serializer_class = AgenteDeSaudeSerializer
    def post(self, request, *args, **kwargs):
        request.data
        user = User.objects.create(
            username = request.data['email'],
            password = request.data['senha']
        )
        user.save()
        agenteDeSaude = AgenteDeSaude.objects.create(
            nome = request.data['nome'],
            login = user,
            cpf = request.data['cpf'],
            crm = request.data['crm']
        )
        agenteDeSaude.save()
        serializer = AgenteDeSaudeSerializer(data=agenteDeSaude)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editAgenteDeSaudeLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        agenteDeSaude = AgenteDeSaude.objects.get(login=user)
        agenteDeSaude.nome = request.data['nome']
        agenteDeSaude.cpf = request.data['cpf']
        agenteDeSaude.crm = request.data['crm']
        paciente.save()
        serializer = AgenteDeSaudeSerializer(data=agenteDeSaude)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editAgenteDeSaude(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def post(self, request, *args, **kwargs):
        agenteDeSaude = AgenteDeSaude.objects.get(pk=request.data['medico_pk'])
        agenteDeSaude.nome = request.data['nome']
        agenteDeSaude.cpf = request.data['cpf']
        agenteDeSaude.crm = request.data['crm']
        paciente.save()
        serializer = AgenteDeSaudeSerializer(data=agenteDeSaude)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------------------------
# API DO DIARIO DE SINTOMAS
# -------------------------
class getListDiarioDeSintomasLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = DiarioDeSintomas.objects.filter(paciente=paciente)
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListDiarioDeSintomasOfPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def get(self, request, *args, **kwargs):
        paciente=Paciente.objects.get(pk=request.data['paciente_pk'])
        data = DiarioDeSintomas.objects.filter(paciente=paciente)
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getDiarioDeSintomas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def get(self, request, *args, **kwargs):
        sintoma = DiarioDeSintomas.objects.get(pk = request.data['sintoma_pk'])
        serializer = DiarioDeSintomasSerializer(data, context={'request': request})
        return Response(serializer.data)

class createDiarioDeSintomas(APIView):
    serializer_class = DiarioDeSintomasSerializer
    def post(self, request, *args, **kwargs):
        print(request.data)
        paciente = Paciente.objects.get(pk=request.data['paciente_pk']['pk'])
        sintoma = DiarioDeSintomas.objects.create(
            tosse = request.data['tosse'],
            chiado = request.data['chiado'],
            dormir = request.data['dormir'],
            faltaDeAr = request.data['faltaDeAr'],
            observacao = request.data['observacao'],
            bombinha = request.data['bombinha'],
            data = str(date.today()),
            paciente = paciente,
        )
        sintoma.save()
        serializer = DiarioDeSintomasSerializer(sintoma, context={'request': request})
        print(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class editDiarioDeSintomas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def post(self, request, *args, **kwargs):
        sintoma = DiarioDeSintomas.objects.get(pk=request.data.sintoma_pk)
        sintoma.tosse = request.data['tosse']
        sintoma.chiado = request.data['chiado']
        sintoma.dormir = request.data['dormir']
        sintoma.faltaDeAr = request.data['faltaDeAr']
        sintoma.obeservacao = request.data['obeservacao']
        sintoma.data = request.data['data']
        sintoma.save()
        serializer = DiarioDeSintomasSerializer(data=sintoma)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------------------
# API DA ATIVIDADE
# -------------------
class getListAtividadeLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = Atividade.objects.filter(paciente=paciente)
        serializer = AtividadeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListAtividadeOfPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def get(self, request, *args, **kwargs):
        paciente=Paciente.objects.get(pk=request.data['paciente_pk'])
        data = Atividade.objects.filter(paciente=paciente)
        serializer = AtividadeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getAtividade(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def get(self, request, *args, **kwargs):
        data = Atividade.objects.filter(pk=request.data['atividade_pk'])
        serializer = AtividadeSerializer(data, context={'request': request})
        return Response(serializer.data)

class createAtividadeLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        atividade = Atividade.objects.create(
            nome = request.data['nome'],
            passos = request.data['passos'],
            duracao = request.data['duracao'],
            intensidade = request.data['intensidade'],
            dataRealizada = request.data['dataRealizada'],
            paciente = paciente,
        )
        atividade.save()
        serializer = AtividadeSerializer(data=atividade)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class createAtividadeOfPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def post(self, request, *args, **kwargs):
        paciente=Paciente.objects.get(pk=request.data['paciente_pk'])
        atividade = Atividade.objects.create(
            nome = request.data['nome'],
            passos = request.data['passos'],
            duracao = request.data['duracao'],
            intensidade = request.data['intensidade'],
            dataRealizada = request.data['dataRealizada'],
            paciente = paciente,
        )
        atividade.save()
        serializer = AtividadeSerializer(data=atividade)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editAtividade(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer
    def post(self, request, *args, **kwargs):
        atividade = Atividade.objects.get(pk=request.data.atividade_pk)
        atividade.nome = request.data['nome']
        atividade.passos = request.data['passos']
        atividade.duracao = request.data['duracao']
        atividade.intensidade = request.data['intensidade']
        atividade.dataRealizada = request.data['dataRealizada']
        atividade.save()
        serializer = DiarioDeSintomasSerializer(data=atividade)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ------------------------
# API DA ALOCACAO MEDICA 
# -----------------------
class getListAlocacaoMedica(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AlocacaoMedicaSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        agenteDeSaude=AgenteDeSaude.objects.get(login=user)
        data = AlocacaoMedica.objects.filter(medico=agenteDeSaude)
        serializer = AlocacaoMedicaSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getAlocacaoMedica(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AlocacaoMedicaSerializer
    def get(self, request, *args, **kwargs):
        data = AlocacaoMedica.objects.get(pk=request.data['alocacao_pk'])
        serializer = AlocacaoMedicaSerializer(data, context={'request': request})
        return Response(serializer.data)

class createAlocacaoMedicaLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AlocacaoMedicaSerializer
    def post(self, request, *args, **kwargs):
        paciente = AlocacaoMedica.objects.get(pk=request.data['paciente_pk'])
        paciente.emEsperaDeMedico = False
        user = User.objects.get(username=request.user)
        medico = AgenteDeSaude.objects.get(login=user)
        alocacao = AlocacaoMedica.objects.create(
            paciente = paciente,
            medico = medico,
            ativo = True,
        )
        alocacao.save()
        serializer = AlocacaoMedicaSerializer(data=alocacao)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

class createAlocacaoMedicaOfMedico(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AlocacaoMedicaSerializer
    def post(self, request, *args, **kwargs):
        paciente = AlocacaoMedica.objects.get(pk=request.data['paciente_pk'])
        medico = AgenteDeSaude.objects.get(pk=request.data.medico_pk)
        alocacao = AlocacaoMedica.objects.create(
            paciente = paciente,
            medico = medico,
            ativo = True,
        )
        alocacao.save()
        serializer = AlocacaoMedicaSerializer(data=alocacao)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editAlocacaoMedicaLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AlocacaoMedicaSerializer
    def post(self, request, *args, **kwargs):
        paciente = AlocacaoMedica.objects.get(pk=request.data['paciente_pk'])
        user = User.objects.get(username=request.user)
        medico = AgenteDeSaude.objects.get(login=user)
        alocacao = AlocacaoMedica.objects.get(pk=request.data['alocacao_pk'])
        alocacao.paciente = paciente
        alocacao.medico = request.data['medico']
        alocacao.ativo = request.data['ativo']
        alocacao.save()
        serializer = AlocacaoMedicaSerializer(data=alocacao)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# ---------------------------
# API DE ORIENTACOES MEDICAS 
# ---------------------------
class getListOrientacoesMedicasLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrientacoesMedicasSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = OrientacoesMedicas.objects.filter(paciente=paciente)
        serializer = OrientacoesMedicasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListOrientacoesMedicasOfPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrientacoesMedicasSerializer
    def get(self, request, *args, **kwargs):
        paciente=Paciente.objects.get(pk=request.data['orientacoes_pk'])
        data = OrientacoesMedicas.objects.filter(paciente=paciente)
        serializer = OrientacoesMedicasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getOrientacoesMedicas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrientacoesMedicasSerializer
    def get(self, request, *args, **kwargs):
        data = OrientacoesMedicas.objects.get(pk=request.data['orientacoes_pk'])
        serializer = OrientacoesMedicasSerializer(data, context={'request': request})
        return Response(serializer.data)

class createOrientacoesMedicas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrientacoesMedicasSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        medico = AgenteDeSaude.objects.get(login=user)
        paciente = Paciente.objects.get(pk=request.data['paciente_pk'])
        orientacoes = OrientacoesMedicas.objects.create(
            mensagem = request.data['mensagem'],
            paciente = paciente,
            medico = medico,
            data = request.data['data'],
        )
        orientacoes.save()
        serializer = OrientacoesMedicasSerializer(data=orientacoes)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editOrientacoesMedicas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = OrientacoesMedicasSerializer
    def get(self, request, *args, **kwargs):
        orientacoes = OrientacoesMedicas.objects.get(pk=request.data['orientacoes_pk'])
        orientacoes.mensagem = request.data['mensagem']
        orientacoes.data = request.data['data']
        orientacoes.save()
        serializer = OrientacoesMedicasSerializer(data=orientacoes)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# --------------------------------
# API DE NOTIFICACAO DE ATIVIDADE
# --------------------------------
class getListNotificacaoDeAtividadeLogged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = NotificacaoDeAtividadeSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        data = NotificacaoDeAtividade.objects.filter(paciente=paciente, ativo=True)
        serializer = NotificacaoDeAtividadeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
        

class createNotificacaoDeAtividade(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = NotificacaoDeAtividadeSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        atividade = Atividade.objects.get(pk=reques.data['atividade_pk'])
        notificacao = NotificacaoDeAtividade.objects.create(
            mensagem = request.data['mensagem'],
            paciente = paciente,
            atividade = atividade,
            data = request.data['data'],
            ativo = request.data['ativo'],
        )
        notificacao.save()
        serializer = NotificacaoDeAtividadeSerializer(data=notificacao)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class disableNotificacaoDeAtividade(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = NotificacaoDeAtividadeSerializer
    def post(self, request, *args, **kwargs):
        notificacao = NotificacaoDeAtividade.objects.get(pk=request.data['notificacao_pk'])
        notificacao.ativo = False
        notificacao.save()
        serializer = NotificacaoDeAtividadeSerializer(data=notificacao)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# -------------
# API DE CHAT
# -------------

class getListofMessages(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ChatSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        data = Chat.objects.filter(paciente=paciente, ativo=True)
        serializer = ChatSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getListofMessagesReceived(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ChatSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        agentedesaude = AgenteDeSaude.objects.get(login=user)
        data = Chat.objects.filter(paciente=paciente, ativo=True)
        serializer = ChatSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getAllMessagesFromAlocacao(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ChatSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        data = Chat.objects.filter(paciente=paciente, ativo=True)
        serializer = ChatSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class createMessage(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = ChatSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        autor = Paciente.objects.get(login=user)
        chat = Chat.objects.create(
            mensagem = request.data['mensagem'],
            autor = autor,
            alocacao = request.data['alocacao'],
            data = request.data['data'],
            ativo = request.data['ativo'],
        )
        chat.save()
        serializer = ChatSerializer(data=chat)
        if serializer.is_valid():
          return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ---------------------
# API DE DADOS FITBIT
# --------------------
class createMetaMensal(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = MetaMensalSerializer
    def post(self, request, *args, **kwargs):
        paciente = Paciente.objects.get(pk=request.data['paciente']['pk'])
        meta = MetaMensal.objects.create(
            paciente = paciente,
            passos = request.data['passos'],
            horas = request.data['horas'],
        )
        meta.save()
        serializer = MetaMensalSerializer(data=meta)
        if serializer.is_valid():
          return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class getMetaMensal(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = MetaMensalSerializer
    def get(self, request, *args, **kwargs):
        paciente = Paciente.objects.get(pk=request.data['paciente']['pk'])
        data = MetaMensal.objects.get(paciente=paciente)
        serializer = MetaMensalSerializer(data, context={'request': request})
        return Response(serializer.data)


class getDadosFitBit(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DadosFitBitSerializer
    def get(self, request, *args, **kwargs):
        paciente = Paciente.objects.get(pk=request.data['paciente']['pk'])
        data = DadosFitBit.objects.get(paciente=paciente)
        serializer = DadosFitBitSerializer(data, context={'request': request})
        return Response(serializer.data)


class createDadosFitBit(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DadosFitBitSerializer
    def post(self, request, *args, **kwargs):
        paciente = Paciente.objects.get(pk=request.data['paciente']['pk'])
        dados = DadosFitBit.objects.create(
            paciente = paciente,
            passos = request.data['passos'],
            data = request.data['data'],
        )
        dados.save()
        serializer = DadosFitBitSerializer(data=dados)
        if serializer.is_valid():
          return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




# ---------------------
# API DE ESTATISTICAS
# --------------------
