from django.urls import path
from . views import *

urlpatterns = [
    path('attendance/view', AttendanceView.as_view(), name='data_view'),
    # path('leavetype/view', LeaveTypeView.as_view(), name='data_view'),
    path('leave_req/view', LeaveRequestView.as_view(), name='data_view'),
    path('holiday/view', HolidayView.as_view(), name='data_view'),
    path('attendance/del/<int:pk>/', AttendanceOperation.as_view(), name='view'),
    # path('leavetype/del/<int:pk>/', LeavetypeOperation.as_view(), name='view'),
    path('leave_req/del/<int:pk>/', LeaveRequestOperation.as_view(), name='view'),
    path('holiday/del/<int:pk>/', HolidayOperation.as_view(), name='view'),
] 