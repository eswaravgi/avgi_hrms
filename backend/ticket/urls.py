from django.urls import path
from . views import *

urlpatterns = [
    path('ticket/view', TicketView.as_view(), name='data_view'),
    path('ticket/del/<int:pk>/', TicketOperation.as_view(), name='view'),
] 