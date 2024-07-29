from django.urls import path
from .views import PolicyFileView, PolicyFileOperation

urlpatterns = [
    path('policy-report/view', PolicyFileView.as_view(), name='policy-file-list'),
    path('policy-report/del/<int:pk>/', PolicyFileOperation.as_view(), name='policy-file-detail'),
]
