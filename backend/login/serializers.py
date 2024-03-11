from rest_framework import serializers
from .models import *

class login_info_serializer(serializers.ModelSerializer):
    class Meta:
        model = login_info
        fields = '__all__'
        # fields = ['username','password']