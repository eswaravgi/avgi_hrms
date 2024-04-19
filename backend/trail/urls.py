from django.urls import path
from .views import AddEmployeeAPIView

urlpatterns = [
    path('send/', AddEmployeeAPIView.as_view(), name='send_mail'),
]
