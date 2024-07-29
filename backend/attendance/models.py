from django.db import models
from employee.models import Employee

class Attendance(models.Model):
    employee_db_id = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    attendance_date = models.DateField(blank=False, null=False)
    clock_in_time = models.DateTimeField(blank=True, null=True)
    clock_out_time = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    
    def __str__(self):
        return self.attendance_date.strftime("%d-%m-%Y")

    class Meta:
        db_table = "Attendance"


# class LeaveType(models.Model):
#     leave_type = models.CharField(max_length=100, unique=True)
#     created_at = models.DateTimeField(auto_now_add=True, editable=False)

#     def __str__(self):
#         return self.leave_type
    
#     class Meta:
#         db_table = "Leave Type"


class LeaveRequest(models.Model):

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    )

    LEAVE_TYPE_CHOICES = [('sick leave', 'Sick Leave'),
                          ('casual leave', 'Casual Leave'),
                          ('medical leave', 'Medical Leave')]

    employee_db_id = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    leave_type = models.CharField(choices=LEAVE_TYPE_CHOICES, max_length=50, blank=False, null=True, default=None)
    start_date = models.DateField(blank=False, null=False)
    end_date = models.DateField(blank=False, null=False)
    status = models.CharField(choices=STATUS_CHOICES, max_length=20, blank=False, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.leave_type.leave_type
    
    class Meta:
        db_table = "LeaveRequests"


class Holiday(models.Model):
    holiday_date = models.DateField(blank=False, null=False)
    holiday = models.TextField(max_length=500, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.holiday_date.strftime("%d-%m-%Y")
    
    class Meta:
        db_table = "Holidays"