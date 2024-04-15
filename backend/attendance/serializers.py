from rest_framework import serializers
from .models import *
from employee.serializers import EmployeeSerializer

class AttendanceSerializer(serializers.ModelSerializer):
    emp_id = EmployeeSerializer().fields
    created_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Attendance
        fields = ['id', 'emp_id', 'attendance_date', 'clock_in_time', 'clock_out_time', 'created_at']

class LeavetypeSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = LeaveType
        fields = ['id', 'leave_type', 'created_at']

class LeaveRequestSerializer(serializers.ModelSerializer):
    emp_id = EmployeeSerializer().fields
    leave_type = LeavetypeSerializer().fields
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = LeaveRequest
        fields = ['id','emp_id', 'leave_type', 'start_date', 'end_date', 'status', 'created_at', 'modified_at']

class HolidaySerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    class Meta:
        model = Holiday
        fields = ['id', 'holiday_date', 'holiday', 'created_at']