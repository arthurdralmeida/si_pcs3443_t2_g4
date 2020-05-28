from rest_framework import serializers
from .models import *

class AtendenteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Atendente 
        fields = ('pk', 'nome', 'email')

<<<<<<< Updated upstream
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('pk', 'username', 'password')

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente 
        fields = ('pk', 'nome', 'user', 'peso', 'grauAsma', 'cpf', 'dataNascimento', 'emEsperaDeMedico')

class SintomaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sintoma
        fields = ('pk','descricao', 'gravidade', 'data', 'paciente')


class AtividadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atividade
        fields = ('pk','nome', 'metaMensal', 'duracao', 'paciente')

class DadosFitBitSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosFitBit
        fields = ('pk','batimento', 'gravidade', 'data', 'atividade')
=======
class CadastroDados(serializers.ModelSerializer):
    model = Paciente
    fields = ('login', 
            'senha', 
            'senha2', 
            'dataNascimento', 
            'peso', 
            'cpf', 
            'nome', 
            'grauAsma', 
            'altura')
>>>>>>> Stashed changes
