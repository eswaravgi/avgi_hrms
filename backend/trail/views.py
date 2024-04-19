from rest_framework import generics, status
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer
from core.utils import *
from django.contrib.auth.hashers import make_password

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