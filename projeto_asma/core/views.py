from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.shortcuts import render

from .models import *
from .serializers import *

@api_view(['GET', 'POST'])
def atendentes_list(request):
    if request.method == 'GET':
        data = Atendente.objects.all()

        serializer = AtendenteSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = AtendenteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# API para o login
@api_view(['GET', 'POST'])
def login(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


# API para o diario de sintomas
@api_view(['GET', 'POST'])
def diarioDeSintomas(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


#API para atualizar informacoes do paciente
@api_view(['GET', 'POST'])
def updatePaciente(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


#API para cadastrar um paciente
@api_view(['GET', 'POST'])
def createPaciente(request):
    if request.method == 'GET':
        data = Paciente.objects.all()

        serializer = PacienteSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PacienteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#API para viuzalizar a lista de atividades
@api_view(['GET', 'POST'])
def listaDeAtividades(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


#API da implementacao do fitbit
@api_view(['GET', 'POST'])
def infoFitBit(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass