from django.urls import path
from .views import SendEmployeeEmailAPIView, AddEmployeeAPIView

urlpatterns = [
    path('send-email/', SendEmployeeEmailAPIView.as_view(), name='send_employee_email'),
    path('send/', AddEmployeeAPIView.as_view(), name='send_mail'),
]
