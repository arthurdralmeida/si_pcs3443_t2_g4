from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import *
from .serializers import *
'''
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
'''


# API para o diario de sintomas
@api_view(['GET', 'POST'])
def cadastrarSintomas(request):
    if request.method == 'GET':
        data=DiarioDeSintomas.objects.all()
        serializer = DiarioDeSintomasSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = DiarioDeSintomasSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)


#API para atualizar informacoes do paciente
@api_view(['GET', 'POST'])
def updatePaciente(request):
    if request.method == 'GET':
        pass
    elif request.method == 'POST':
        pass


#API para cadastrar um paciente
@api_view(['GET', 'POST'])
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
