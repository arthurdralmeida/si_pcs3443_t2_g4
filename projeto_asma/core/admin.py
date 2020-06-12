from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Atendente)
admin.site.register(Paciente)
admin.site.register(AgenteDeSaude)
admin.site.register(OrientacoesMedicas)
admin.site.register(DiarioDeSintomas)
admin.site.register(NotificacaoDeAtividade)
admin.site.register(Atividade)
admin.site.register(DadosFitBit)