from rest_framework import serializers
from .models import *
from employee.serializers import EmployeeSerializer

class TicketSerializer(serializers.ModelSerializer):
    emp_id = EmployeeSerializer().fields
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Ticket
        fields = ['id', 'emp_id', 'ticket_details', 'status', 'priority', 'created_at', 'modified_at']
