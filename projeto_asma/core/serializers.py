from rest_framework import serializers
from .models import *

class AtendenteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Atendente 
        fields = ('pk', 'nome', 'email')