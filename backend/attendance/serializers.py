from rest_framework import serializers
from .models import *
from employee.serializers import EmployeeSerializer

class AttendanceSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    employee_id = serializers.SlugRelatedField(queryset=Employee.objects.all(), slug_field='employee_id', source='employee_db_id')
    employee_db_id = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Attendance
        fields = ['id', 'employee_id', 'employee_db_id', 'attendance_date', 'clock_in_time', 'clock_out_time', 'created_at']


# class LeavetypeSerializer(serializers.ModelSerializer):
#     created_at = serializers.DateTimeField(read_only=True)

#     class Meta:
#         model = LeaveType
#         fields = ['id', 'leave_type', 'created_at']


class LeaveRequestSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    employee_id = serializers.SlugRelatedField(queryset=Employee.objects.all(), slug_field='employee_id', source='employee_db_id')
    employee_db_id = serializers.PrimaryKeyRelatedField(read_only=True)
    # leave_type = LeavetypeSerializer().fields

    class Meta:
        model = LeaveRequest
        fields = ['id','employee_id', 'employee_db_id', 'leave_type', 'start_date', 'end_date', 'status', 'created_at', 'modified_at']


class HolidaySerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    
    class Meta:
        model = Holiday
        fields = ['id', 'holiday_date', 'holiday', 'created_at']