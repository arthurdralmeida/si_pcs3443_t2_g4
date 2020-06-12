from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

#  Exemplo de uma classe com atributos
# class Atendente(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
#     nome = models.CharField(max_length=200, default=None)
#     email = models.EmailField(max_length=70, default=None)
#     def __str__(self):
#         return self.nome
# 
#     class Meta:
#         verbose_name_plural = 'Atendentes'
# 
#     def class_name(self):
#         return 'Atendente'

class Paciente(models.Model):
    nome = models.CharField(max_length=200, default=None)
    dataNascimento = models.DateField(default=datetime.now)
    peso = models.FloatField(default=None)
    grauAsma = models.IntegerField(default=0)
    altura = models.FloatField(default=None)
    cpf=models.CharField(max_length=11,default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    senha = models.CharField(max_length=15, default=None)
    emEsperaDeMedico = models.BooleanField(default=False)
    cadastro=models.BooleanField(default=False)
    def __str__(self):
        return self.nome


class AgenteDeSaude(models.Model):
    nome = models.CharField(max_length=200, default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    senha = models.CharField(max_length=15, default=None)
    def __str__(self):
        return self.nome

class OrientacoesMedicas(models.Model):
    mensagem=models.CharField(max_length=10000)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.mensagem


class DiarioDeSintomas(models.Model):
    tosse=models.BooleanField(default=False)
    chiado=models.BooleanField(default=False)
    dormir=models.BooleanField(default=False)
    faltaDeAr=models.BooleanField(default=False)
    observacao=models.CharField(max_length=10000)
    data= models.DateField(default=datetime.now)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.observacao

class NotificacaoDeAtividade(models.Model):
    mensagem=models.CharField(max_length=1000)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    data=models.DateField(default=datetime.now)
    def __str__(self):
        return self.mensagem

class Atividade(models.Model):
    nome = models.CharField(max_length=200, default=None)
    metaMensal = models.FloatField(default=None) #Em km
    duracao = models.FloatField(default=None) #Em Minutos 
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.nome

class DadosFitBit(models.Model):
    batimento = models.IntegerField(default=None)
    passos = models.IntegerField(default=None)
    data = models.DateField(default=datetime.now)
    atividade = models.ForeignKey(Atividade, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.atividade

class Atendente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    nome = models.CharField(max_length=200, default=None)
    email = models.EmailField(max_length=70, default=None)
    def __str__(self):
        return self.nome
 
    class Meta:
        verbose_name_plural = 'Atendentes'
 
    def class_name(self):
        return 'Atendente'


