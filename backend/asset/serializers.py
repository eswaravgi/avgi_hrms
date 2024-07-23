from rest_framework import serializers
from .models import *
from employee.models import Employee
from employee.serializers import EmployeeSerializer


class AssetInfoSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)

    class Meta:
        model = AssetInfo
        fields = ['id', 'asset_name', 'asset_model', 'asset_purchase_date', 'asset_purchase_price', 'notes','created_at', 'modified_at']

class AssetSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True)
    modified_at = serializers.DateTimeField(read_only=True)
    employee_id = serializers.SlugRelatedField(queryset=Employee.objects.all(), slug_field='employee_id', source='employee_db_id')
    asset_id = AssetInfoSerializer().fields
    employee_db_id = serializers.PrimaryKeyRelatedField(read_only=True)
    
    class Meta:
        model = Asset
        fields = ['id','asset_id', 'employee_id', 'employee_db_id','provided_date', 'returned_date','status', 'created_at', 'modified_at']
