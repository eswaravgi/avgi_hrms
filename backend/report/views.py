from rest_framework import generics
from .models import PolicyFile
from .serializers import PolicyFileSerializer

class PolicyFileView(generics.ListCreateAPIView):
    queryset = PolicyFile.objects.all()
    serializer_class = PolicyFileSerializer

    def perform_create(self, serializer):
    
        serializer.save()

class PolicyFileOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = PolicyFile.objects.all()
    serializer_class = PolicyFileSerializer
