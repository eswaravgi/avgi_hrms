from django.contrib import admin
from . models import PayslipFile
# Register your models here.

# @admin.register(PayslipFile)
# class PayslipFileAdmin(admin.ModelAdmin):
#     list_display = ('emp_id', 'file', 'uploaded_on')

admin.site.register(PayslipFile)