from rest_framework import serializers
from .models import *


class DepartmentSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Department
        fields = '__all__'


class EmployeeSerializer(serializers.ModelSerializer):
    department = DepartmentSerializer().fields
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    
    class Meta:
        model = Employee
        fields = ['id','first_name', 'last_name', 'date_of_birth', 'gender', 'contact_number', 'department', 'designation','reporting_to', 'personal_mail', 'company_mail','employee_id', 'address', 'created_at', 'modified_at']

    # def to_representation(self, instance):
    #     """
    #     Serialize the password field conditionally based on the request method.
    #     """
    #     data = super().to_representation(instance)
    #     request = self.context.get('request')
    #     if request and request.method == 'GET':
    #         data['password'] = instance.password
    #     return data