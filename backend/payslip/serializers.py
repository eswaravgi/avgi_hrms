from rest_framework import serializers
from . models import PayslipFile
from employee.models import Employee
from employee.serializers import EmployeeSerializer

class PayslipSerializer(serializers.ModelSerializer):
    uploaded_on = serializers.DateTimeField(read_only=True)
    employee_id = serializers.SlugRelatedField(queryset=Employee.objects.all(), slug_field='employee_id', source='employee_db_id')
    employee_db_id = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = PayslipFile
        fields = ['id', 'employee_id', 'employee_db_id', 'uploaded_month', 'uploaded_year', 'file', 'uploaded_on']
