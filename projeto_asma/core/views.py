from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status, viewsets, permissions, generics
from knox.models import AuthToken
from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import *
from .serializers import *
from .models import *



# ----------------
# API DE LOGIN
# ----------------
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        print(user)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user

class getPacienteLoged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=Paciente.objects.get(login=user)
        serializer = PacienteSerializer(data, context={'request': request})
        return Response(serializer.data)

class getAgenteDeSaudeLoged(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=Paciente.objects.get(login=user)
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
        data=Paciente.objects.get(pk = request.data.paciente_pk)
        serializer = PacienteSerializer(data, context={'request': request})
        return Response(serializer.data)

class getPacienteList(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def get(self, request, *args, **kwargs):
        data=Paciente.objects.all()
        serializer = PacienteSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class createPaciente(APIView):
    serializer_class = PacienteSerializer
    def post(self, request, *args, **kwargs):
        request.data
        user = User.objects.create(
            username = request.data.email,
            password = request.data.senha
        )
        user.save()
        paciente = Paciente.objects.create(
            nome = request.data.nome,
            dataNascimento = request.data.dataNacimento,
            peso = request.data.peso,
            grauAsma = request.data.grauAsma,
            altura = request.data.altura,
            cpf = request.data.cpf,
            login = user,
            emEsperaDeMedico = request.data.emEsperaDeMedico,
            cadastro = request.data.cadastro,
        )
        paciente.save()
        serializer = PacienteSerializer(data=paciente)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class editPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)
        paciente.nome = request.data.nome
        paciente.dataNascimento = request.data.dataNascimento
        paciente.peso = request.data.peso
        paciente.grauAsma = request.data.grauAsma
        paciente.altura = request.data.altura
        paciente.cpf = request.data.cpf
        paciente.emEsperaDeMedico = request.data.emEsperaDeMedico
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
            username = request.data.email,
            password = request.data.senha
        )
        user.save()
        agenteDeSaude = AgenteDeSaude.objects.create(
            nome = request.data.nome,
            login = user,
            cpf = request.data.cpf,
            crm = request.data.crm
        )
        agenteDeSaude.save()
        serializer = AgenteDeSaudeSerializer(data=agenteDeSaude)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class editAgenteDeSaude(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        agenteDeSaude = AgenteDeSaude.objects.get(login=user)
        agenteDeSaude.nome = request.data.nome
        agenteDeSaude.cpf = request.data.cpf
        agenteDeSaude.crm = request.data.crm
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
        paciente=Paciente.objects.get(pk=paciente_pk)
        data = DiarioDeSintomas.objects.filter(paciente=paciente)
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getDiarioDeSintomas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def get(self, request, *args, **kwargs):
        sintoma = DiarioDeSintomas.objects.get(pk = request.data.sintoma_pk)
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class createDiarioDeSintomas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer
    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        sintoma.objects.create(
            tosse = request.data.tosse,
            chiado = request.data.chiado,
            dormir = request.data.dormir,
            faltaDeAr = request.data.faltaDeAr,
            obeservacao = request.data.obeservacao,
            data = request.data.data,
            paciente = paciente,
        )
        sintoma.save()
        serializer = DiarioDeSintomasSerializer(data=sintoma)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class editDiarioDeSintomas(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer

    def post(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente = Paciente.objects.get(login=user)

        tosse = request.data.tosse,
        chiado = request.data.chiado,
        dormir = request.data.dormir,
        faltaDeAr = request.data.faltaDeAr,
        obeservacao = request.data.obeservacao,
        data = request.data.data,
        sintoma.save()
        serializer = DiarioDeSintomasSerializer(data=sintoma)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# -------------------------
# API DA ATIVIDADE
# -------------------------
class getAtividade(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = Atividade.objects.filter(paciente=paciente)
        serializer = AtividadeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
