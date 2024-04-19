from rest_framework import serializers
from .models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'name', 'email']  # Exclude password by default

    def to_representation(self, instance):
        """
        Serialize the password field conditionally based on the request method.
        """
        data = super().to_representation(instance)
        request = self.context.get('request')
        if request and request.method == 'GET':
            data['password'] = instance.password
        return data