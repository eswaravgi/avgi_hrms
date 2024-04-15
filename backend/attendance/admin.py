from django.contrib import admin
from .models import *

admin.site.register(Attendance)
admin.site.register(LeaveType)
admin.site.register(LeaveRequest)
admin.site.register(Holiday)