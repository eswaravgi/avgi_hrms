from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        email = data.get("email", "")
        password = data.get("password", "")

        if email and password:
            user = authenticate(email=email, password=password)
            if user:
                data["user"] = user
                data["authenticated"] = 1
            else:
                raise serializers.ValidationError("Incorrect email or password")
        else:
            raise serializers.ValidationError("Must provide both email and password")

        return data

class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        email = value
        if email:
            user = CustomUser.objects.filter(email=email).first()
            if user:
                return value
            else:
                raise serializers.ValidationError("User with this email does not exist")
        else:
            raise serializers.ValidationError("Must provide an email address")

class UserLogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

class PasswordResetSerializer(serializers.Serializer):
    new_password = serializers.CharField(max_length=128)

    def validate(self, data):
        # Perform any custom validation here if needed
        return data
    
class AccessTokenSerializer(serializers.Serializer):
    refresh_token = serializers.CharField(max_length=500)