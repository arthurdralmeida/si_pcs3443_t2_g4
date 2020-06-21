from django.conf.urls import include, url
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
#router.register('notes', NoteViewSet)

urlpatterns = [
    url("^", include(router.urls)),
    #urls de login
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^getPacienteLoged/$", getPacienteLoged.as_view()),
    url("^getAgenteDeSaudeLoged/$", getAgenteDeSaudeLoged.as_view()),

    #url de Paciente
    url("^getPaciente/$", getPaciente.as_view()),
    url("^getPacienteList/$", getPacienteList.as_view()),
    url("^createPaciente/$", createPaciente.as_view()),
    url("^editPaciente/$", editPaciente.as_view()),

    #url de Agente de Saude
    url("^getListAgenteDeSaude/$", getListAgenteDeSaude.as_view()),
    url("^createAgenteDeSaude/$", createAgenteDeSaude.as_view()),
    url("^editAgenteDeSaude/$", editAgenteDeSaude.as_view()),

    #url de Diario de Sintomas
    url("^getListDiarioDeSintomasLogged/$", getListDiarioDeSintomasLogged.as_view()),
    url("^getListDiarioDeSintomasOfPaciente/$", getListDiarioDeSintomasOfPaciente.as_view()),
    url("^getDiarioDeSintomas/$", getDiarioDeSintomas.as_view()),
    url("^createDiarioDeSintomas/$", createDiarioDeSintomas.as_view()),
    url("^editDiarioDeSintomas/$", editDiarioDeSintomas.as_view()),

    #url de Atividade
    url("^getAtividade/$", getAtividade.as_view()),
]