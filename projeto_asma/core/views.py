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

class getPaciente(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = PacienteSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=Paciente.objects.get(login=user)
        serializer = PacienteSerializer(data, context={'request': request})
        return Response(serializer.data)

class getAgenteDeSaude(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AgenteDeSaudeSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        data=Paciente.objects.get(login=user)
        serializer = AgenteDeSaudeSerializer(data, context={'request': request})
        return Response(serializer.data)

class getDiarioDeSintomasSerializer(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = DiarioDeSintomasSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = DiarioDeSintomas.objects.filter(paciente=paciente)
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)

class getAtividadeSerializer(APIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AtividadeSerializer

    def get(self, request, *args, **kwargs):
        user = User.objects.get(username=request.user)
        paciente=Paciente.objects.get(login=user)
        data = Atividade.objects.filter(paciente=paciente)
        serializer = AtividadeSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
