from django.shortcuts import render
from rest_framework import generics, response
from . models import *
from . serializers import *
from rest_framework import status

class TicketView(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer

class TicketOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer