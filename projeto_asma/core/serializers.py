from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import *


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], None, validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Não foi possível logar com essas credenciais")


class AdminSistemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminSistema
        fields = ('pk', 'nome', 'login')


class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente 
        fields = ('pk', 'nome', 'login', 'peso', 'grauAsma', 'cpf', 'dataNascimento', 'emEsperaDeMedico', 'altura')


class AgenteDeSaudeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgenteDeSaude
        fields = ('pk', 'nome', 'login')


class AlocacaoMedicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlocacaoMedica
        fields = ('pk', 'paciente', 'medico', 'ativo')


class OrientacoesMedicasSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrientacoesMedicas
        fields = ('pk', 'mensagem', 'paciente', 'medico')


class DiarioDeSintomasSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiarioDeSintomas
        fields = ('pk','tosse', 'chiado', 'dormir', 'faltaDeAr','bombinha','observacao','data','paciente')


class AtividadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Atividade
        fields = ('pk','nome', 'metaMensal', 'duracao', 'paciente')

        
class NotificacaoDeAtividadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificacaoDeAtividade
        fields = ('pk', 'mensagem', 'paciente', 'atividade', 'data')


class DadosFitBitSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosFitBit
        fields = ('pk','batimento', 'gravidade', 'data', 'atividade')


class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ('pk', 'mensagem', 'autor', 'alocacao', 'data', 'ativo')






