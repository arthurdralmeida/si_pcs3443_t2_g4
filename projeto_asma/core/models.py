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