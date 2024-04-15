from django.shortcuts import render
from rest_framework import generics, response, status
from . models import *
from . serializers import *
from django.contrib.auth.hashers import make_password
from core.utils import send_email_to_employee
import os

class EmployeeView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid(raise_exception=False):
            return response.Response({'Message':"Sorry, can't create user with these details, user already exists.", 'status_code': status.HTTP_406_NOT_ACCEPTABLE, 'Errors': serializer.errors})
        
    def perform_create(self, serializer):
        # Generate a random password limited to 10 characters
        password = make_password()[:10]  # Generate random password and limit to 10 characters
        instance = serializer.save(password=password)

        # Read the text template file
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        template_path = os.path.join(BASE_DIR, 'core', 'templates', 'emails', 'welcome_email.txt')
        with open(template_path, 'r') as file:
            email_template = file.read()

        # Prepare email message with template variables
        email_message = email_template.format(employee_name=instance.name, employee_email=instance.email, employee_password=password)

        # Send email to the new employee's email address
        send_email_to_employee(instance.email, 'HRMS TEST MAIL', email_message)

class DepartmentView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


class EmployeeOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class DepartmentOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer