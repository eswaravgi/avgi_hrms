from django.shortcuts import render
from rest_framework import generics, response
from . models import *
from . serializers import *
from rest_framework import status

class AssetInfoView(generics.ListCreateAPIView):
    queryset = AssetInfo.objects.all()
    serializer_class = AssetInfoSerializer

class AssetInfoOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = AssetInfo.objects.all()
    serializer_class = AssetInfoSerializer

class AssetView(generics.ListCreateAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer

class AssetOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Asset.objects.all()
    serializer_class = AssetSerializer