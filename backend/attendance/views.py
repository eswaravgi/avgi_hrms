from django.shortcuts import render
from rest_framework import generics, response
from . models import *
from . serializers import *
from rest_framework import status

class AttendanceView(generics.ListCreateAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

# class LeaveTypeView(generics.ListCreateAPIView):
#     queryset = LeaveType.objects.all()
#     serializer_class = LeavetypeSerializer

#     def post(self, request):
#         serializer = self.get_serializer(data=request.data)
#         if not serializer.is_valid(raise_exception=False):
#             return response.Response({'Message':"This leave type already exists.", 'status_code': status.HTTP_406_NOT_ACCEPTABLE, 'Errors': serializer.errors})
    
class LeaveRequestView(generics.ListCreateAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer

class HolidayView(generics.ListCreateAPIView):
    queryset = Holiday.objects.all()
    serializer_class = HolidaySerializer

class AttendanceOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer


# class LeavetypeOperation(generics.RetrieveUpdateDestroyAPIView):
#     queryset = LeaveType.objects.all()
#     serializer_class = LeavetypeSerializer

class LeaveRequestOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer

class HolidayOperation(generics.RetrieveUpdateDestroyAPIView):
    queryset = Holiday.objects.all()
    serializer_class = HolidaySerializer
