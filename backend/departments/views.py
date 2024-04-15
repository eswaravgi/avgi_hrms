from django.shortcuts import render
from rest_framework import generics, response
from . models import *
from . serializers import *

class view(generics.GenericAPIView):
    def get(self, request):
        return response.Response({'status': 200, 'message': 'Succes, This app is connected to the project.'})
    
class dept(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentsSerializer

class view_me(generics.ListCreateAPIView):
    queryset = Designation.objects.all()
    serializer_class = DesignationsSerializer

class delview_me(generics.RetrieveUpdateDestroyAPIView):
    queryset = Designation.objects.all()
    serializer_class = DesignationsSerializer
