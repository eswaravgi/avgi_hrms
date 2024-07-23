from rest_framework import serializers
from .models import *
from employee.models import Employee
from employee.serializers import EmployeeSerializer


class TicketSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    employee_id = serializers.SlugRelatedField(queryset=Employee.objects.all(), slug_field='employee_id', source='employee_db_id')
    employee_db_id = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Ticket
        fields = ['id', 'employee_id', 'employee_db_id', 'ticket_details', 'status', 'priority', 'created_at', 'modified_at']
