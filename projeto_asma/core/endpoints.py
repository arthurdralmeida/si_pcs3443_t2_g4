from django.conf.urls import include, url
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
#router.register('notes', NoteViewSet)

urlpatterns = [
    url("^", include(router.urls)),

    # urls de login
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^getAdminLogged/$", getAdminLogged.as_view()),
    url("^getPacienteLogged/$", getPacienteLogged.as_view()),
    url("^getAgenteDeSaudeLoged/$", getAgenteDeSaudeLogged.as_view()),

    # urls de Paciente
    url("^getPaciente/$", getPaciente.as_view()),
    url("^getPacienteList/$", getPacienteList.as_view()),
    url("^createPaciente/$", createPaciente.as_view()),
    url("^editPaciente/$", editPaciente.as_view()),
    url("^editPacienteLogged/$", editPacienteLogged.as_view()),

    # urls de Agente de Saude
    url("^getListAgenteDeSaude/$", getListAgenteDeSaude.as_view()),
    url("^createAgenteDeSaude/$", createAgenteDeSaude.as_view()),
    url("^editAgenteDeSaude/$", editAgenteDeSaude.as_view()),
    url("^editAgenteDeSaudeLogged/$", editAgenteDeSaudeLogged.as_view()),

    # urls de Diario de Sintomas
    url("^getListDiarioDeSintomasLogged/$", getListDiarioDeSintomasLogged.as_view()),
    url("^getListDiarioDeSintomasOfPaciente/$", getListDiarioDeSintomasOfPaciente.as_view()),
    url("^getDiarioDeSintomas/$", getDiarioDeSintomas.as_view()),
    url("^createDiarioDeSintomas/$", createDiarioDeSintomas.as_view()),
    url("^editDiarioDeSintomas/$", editDiarioDeSintomas.as_view()),

    # urls de Atividade
    url("^getListAtividadeLogged/$", getListAtividadeLogged.as_view()),
    url("^getListAtividadeOfPaciente/$", getListAtividadeOfPaciente.as_view()),
    url("^getAtividade/$", getAtividade.as_view()),
    url("^createAtividadeLogged/$", createAtividadeLogged.as_view()),
    url("^createAtividadeOfPaciente/$", createAtividadeOfPaciente.as_view()),
    url("^editAtividade/$", editAtividade.as_view()),

    # urls de Alocacao Medica
    url("^getListAlocacaoMedica/$", getListAlocacaoMedica.as_view()),
    url("^getAlocacaoMedica/$", getAlocacaoMedica.as_view()),
    url("^createAlocacaoMedicaLogged/$", createAlocacaoMedicaLogged.as_view()),
    url("^createAlocacaoMedicaOfMedico/$", createAlocacaoMedicaOfMedico.as_view()),
    url("^editAlocacaoMedicaLogged/$", editAlocacaoMedicaLogged.as_view()),
    
    # urls de Orientacoes medicas
    url("^getListOrientacoesMedicasLogged/$", getListOrientacoesMedicasLogged.as_view()),
    url("^getListOrientacoesMedicasOfPaciente/$", getListOrientacoesMedicasOfPaciente.as_view()),
    url("^getOrientacoesMedicas/$", getOrientacoesMedicas.as_view()),
    url("^createOrientacoesMedicas/$", createOrientacoesMedicas.as_view()),
    url("^editOrientacoesMedicas/$", editOrientacoesMedicas.as_view()),

    # urls de Notificacao de atividade
    url("^getListNotificacaoDeAtividadeLogged/$", getListNotificacaoDeAtividadeLogged.as_view()),
    url("^createNotificacaoDeAtividade/$", createNotificacaoDeAtividade.as_view()),
    url("^disableNotificacaoDeAtividade/$", disableNotificacaoDeAtividade.as_view()),


    # urls de Chat
    #url("^getAllMessagesFromAlocacao/$", getAllMessagesFromAlocacao.as_view()),
    #url("^createMessage/$", createMessage.as_view()),

    # urls de Dados do FitBit

    # urls de Estatisticas

]