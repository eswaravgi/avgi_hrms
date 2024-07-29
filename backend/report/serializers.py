from rest_framework import serializers
from .models import PolicyFile

class PolicyFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = PolicyFile
        fields = ['id', 'policy_name', 'file', 'uploaded_on']
