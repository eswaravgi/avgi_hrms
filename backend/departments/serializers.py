from rest_framework import serializers
from .models import *

class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        # fields = '__all__'
        fields = ['department']

class DesignationsSerializer(serializers.ModelSerializer):
    # department = serializers.SlugRelatedField(many=True,read_only=True, slug_field='Department')
    department = DepartmentsSerializer
    # department = serializers.CharField(default=DepartmentsSerializer)
    class Meta:
        model = Designation
        # fields = '__all__'
        # exclude = ['department']
        fields = ['id', 'department', 'designation']
