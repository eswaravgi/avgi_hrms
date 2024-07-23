from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from .models import PayslipFile
from .serializers import PayslipSerializer
from core.utils import send_html_email
from employee.models import Employee

class PayslipView(generics.ListCreateAPIView):
    queryset = PayslipFile.objects.all()
    serializer_class = PayslipSerializer

    def post(self, request, *args, **kwargs):
        # print("POST request received")
        serializer = self.serializer_class(data=request.data)
        employee_id = request.data.get('employee_id')
        employee = Employee.objects.filter(employee_id=employee_id).first()

        if serializer.is_valid():
            # print("Serializer is valid")
            payslip = serializer.save()
            # print("Payslip saved")
            # Assuming the file field in PayslipFile is called 'file'
            file_attachment = request.FILES.get('file')
            subject = "Your Payslip"
            plain_message = "Please find attached your payslip for the month."
            template_name = 'emails/payslip_email.html'
            context = {'employee': employee}
            recipient_list = [employee.company_mail]  # Test recipient email

            if file_attachment:
                # print(f"File attachment found: {file_attachment.name}")
                if send_html_email(subject, plain_message, template_name, context, recipient_list, attachments=[file_attachment]):
                    # print("Email sent successfully")
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                else:
                    # print("Failed to send email")
                    return Response({"error": "Failed to send email"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
                # print("File attachment is missing")
                return Response({"error": "File attachment is missing"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            # print("Serializer is invalid")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
