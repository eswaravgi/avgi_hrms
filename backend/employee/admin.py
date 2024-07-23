from django.contrib import admin
from .models import *

admin.site.register(Department)
# admin.site.register(Employee)


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'department', 'date_of_birth', 'contact_number', 'designation')

    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name} ({obj.employee_id})"
    full_name.short_description = 'Full Name & EMP_ID'
