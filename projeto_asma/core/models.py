import datetime
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
    nome = models.CharField(max_lenght=200, default=None)
    idade = models.IntegerField(default=None)
    peso = models.FloatField(default=None)
    grauAsma = models.IntegerChoices(x=[0,1,2,3,4,5],default=None)
    cpf=models.CharField(max_length=11,default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    senha = models.CharField(max_lenght=15, default=None)
    emEsperaDeMedico = models.BooleanField(default=False)
    cadastro=models.BooleanField(default=False)
    def __str__(self):
        return self
class Sintoma(models.Model):
    descricao = models.CharField(max_length=10000,default=None)
    gravidade = models.IntegerChoices(x=[0,1,2,3,4,5],default=None)
    def __str__(self):
        return self

class AgenteDeSaude(models.Model):
    nome = models.CharField(max_lenght=200, default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    senha = models.CharField(max_lenght=15, default=None)
    def __str__(self):
        return self

class OrientacoesMedicas(models.Model):
    mensagem=models.CharField(max_lenght=10000)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.mensagem


class DiarioDeSintomas(models.Model):
    sintomas= models.ForeignKey(Sintoma, on_delete=None, null=True)
    data=models.DateField()
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.sintomas

class NotificacaoDeAtividade(models.Model):
    mensagem=models.CharField(max_lenght=1000)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    data=models.DateField()
    def __str__(self):
        return self.mensagem

class Atividade(models.Model):
    nome = models.CharField(max_lenght=200, default=None)
    metaMensal = models.FloatField(default=None) #Em km
    duracao = models.FloatField(default=None) #Em Minutos 
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self.nome

class DadosFitBit(models.Model):
    batimento = models.IntegerField(max_length=3,default=None)
    passos = models.IntegerField(max_length=8,default=None)
    atividade = models.ForeignKey(Atividade, on_delete=models.CASCADE, null=True)
    def __str__(self):
        return self

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


