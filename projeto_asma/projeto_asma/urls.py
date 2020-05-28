from django.contrib import admin
from django.urls import path, re_path
from core import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/atendentes/$', views.atendentes_list),
    re_path(r'^api/cadastro/$', views.cadastro),
]
