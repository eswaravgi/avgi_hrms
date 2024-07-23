from django.urls import path
from . views import PayslipView

urlpatterns = [
    path('payslip/view', PayslipView.as_view(), name='view'),
] 