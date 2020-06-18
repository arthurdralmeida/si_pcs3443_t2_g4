from django.conf.urls import include, url
from rest_framework import routers

from .views import *

router = routers.DefaultRouter()
#router.register('notes', NoteViewSet)

urlpatterns = [
    url("^", include(router.urls)),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^getPaciente/$", getPaciente.as_view()),
    url("^getAgenteDeSaude/$", getAgenteDeSaude.as_view()),
    url("^getDiarioDeSintomasSerializer/$", getDiarioDeSintomasSerializer.as_view()),
    url("^getAtividadeSerializer/$", getAtividadeSerializer.as_view()),
]