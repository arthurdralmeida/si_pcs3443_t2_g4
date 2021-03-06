from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class AdminSistema(models.Model):
    nome = models.CharField(max_length=200, default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)


class Paciente(models.Model):
    nome = models.CharField(max_length=200, default=None)
    dataNascimento = models.DateField(default=datetime.now)
    peso = models.FloatField(default=None)
    grauAsma = models.IntegerField(default=0)
    altura = models.FloatField(default=None)
    cpf = models.CharField(max_length=14,default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    emEsperaDeMedico = models.BooleanField(default=True)
    cadastro = models.BooleanField(default=False)


class AgenteDeSaude(models.Model):
    nome = models.CharField(max_length=200, default=None)
    login = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    cpf = models.CharField(max_length=14,default=None)
    crm = models.CharField(max_length=20,default=None)


class AlocacaoMedica(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    medico = models.ForeignKey(AgenteDeSaude, on_delete=models.CASCADE, null=True)
    ativo = models.BooleanField(default=False)


class OrientacoesMedicas(models.Model):
    mensagem = models.CharField(max_length=10000)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    medico = models.ForeignKey(AgenteDeSaude, on_delete=models.CASCADE, null=True)
    data = models.DateField(default=datetime.now)


class DiarioDeSintomas(models.Model):
    tosse=models.IntegerField(default=1)
    chiado=models.IntegerField(default=1)
    dormir=models.IntegerField(default=1)
    faltaDeAr=models.IntegerField(default=1)
    bombinha=models.IntegerField(default=1)
    observacao=models.CharField(max_length=10000)
    data= models.DateField(default=datetime.now)
    paciente= models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)



class Atividade(models.Model):
    nome = models.CharField(max_length=200, default=None)
    passos = models.IntegerField(default=None) #Em km
    intensidade = models.IntegerField(default=1)
    duracao = models.FloatField(default=None) #Em Minutos 
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    dataRealizada = models.DateField(default=datetime.now)


class NotificacaoDeAtividade(models.Model):
    mensagem = models.CharField(max_length=1000)
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    atividade = models.ForeignKey(Atividade, on_delete=models.CASCADE, null=True)
    data = models.DateField(default=datetime.now)
    ativo = models.BooleanField(default=False)


class DadosFitBit(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    passos = models.IntegerField(default=None)
    data = models.DateField(default=datetime.now)
    


class Chat(models.Model):
    mensagem = models.CharField(max_length=1000)
    autor = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    alocacao = models.ForeignKey(AlocacaoMedica, on_delete=models.CASCADE, null=True)
    data = models.DateField(default=datetime.now)
    ativo = models.BooleanField(default=False)

class MetaMensal(models.Model):
    paciente = models.ForeignKey(Paciente, on_delete=models.CASCADE, null=True)
    passos =models.IntegerField(default=None)
    horas = models.FloatField(default=None)