from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import *


User._meta.get_field('email')._unique = True


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


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
        fields = ('pk','nome', 'passos', 'duracao', 'intensidade', 'dataRealizada', 'paciente')

        
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






