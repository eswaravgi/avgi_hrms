from django.urls import path
from . views import *

urlpatterns = [
    path('emp/view', EmployeeView.as_view(), name='employee_view'),
    path('dept/view', DepartmentView.as_view(), name='employee_view'),
    path('emp/del/<int:pk>/', EmployeeOperation.as_view(), name='employee_view'),
    path('dept/del/<int:pk>/', DepartmentOperation.as_view(), name='employeVview'),
    path('custom-emp/view/', CustomEmployeeListView.as_view(), name='custom_employee_list'),
]