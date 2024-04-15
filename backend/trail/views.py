from rest_framework import generics, status
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer
from core.utils import send_email_to_employee
from django.contrib.auth.hashers import make_password
from django.shortcuts import get_object_or_404
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class SendEmployeeEmailAPIView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def perform_create(self, serializer):
        # Generate a random password limited to 10 characters
        password = make_password(None)[:10]  # Generate random password and limit to 10 characters
        instance = serializer.save(password=password)

        # Read the text template file
        template_path = os.path.join(BASE_DIR, 'core', 'templates', 'emails', 'welcome_email.txt')
        with open(template_path, 'r') as file:
            email_template = file.read()

        # Prepare email message with template variables
        email_message = email_template.format(employee_name=instance.name, employee_email=instance.email, employee_password=password)

        # Send email to the new employee's email address
        send_email_to_employee(instance.email, 'HRMS TEST MAIL', email_message)


from rest_framework import generics, status
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer
from core.utils import *

class AddEmployeeAPIView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

    def perform_create(self, serializer):
        # Generate a random password limited to 10 characters
        password = make_password(None)[:10]  # Generate random password and limit to 10 characters
        instance = serializer.save(password=password)

        # Prepare email message
        subject = 'AVGI HRMS (Test Mail)'
        html_message = render_to_string('emails/greetings_email.html', {'employee': instance})

        # Send email to the new employee's email address
        recipient_list = [instance.email]
        if send_html_email(subject, html_message, recipient_list):
            return Response({'message': 'Email sent successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'message': 'Failed to send email'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)