from django.shortcuts import render
from rest_framework import generics
from . models import *
from . serializers import *

class login_CreateView(generics.ListCreateAPIView):
    queryset = login_info.objects.all()
    serializer_class = login_info_serializer

class login_detailsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = login_info.objects.all()
    serializer_class = login_info_serializer