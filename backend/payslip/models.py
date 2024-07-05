from django.db import models
from employee.models import Employee
from datetime import date

DATE = date.today()
def get_current_month():
    return date.today().month

def get_current_year():
    return date.today().year

class PayslipFile(models.Model):
    employee_db_id = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    file = models.FileField(upload_to='Payslips')
    uploaded_month = models.IntegerField(choices=[(i, i) for i in range(1, 13)], blank=False, null=False, default=get_current_month)
    uploaded_year = models.IntegerField(choices=[(i, i) for i in range(2000, 2051)], blank=False, null=False, default=get_current_year)
    uploaded_on = models.DateTimeField(auto_now_add=True, editable=False)

    def folder_name(self, filename):
        # return '/'.join(['Payslips', str(self.employee_db_id.employee_id), filename])
        return '/'.join([str(self.employee_db_id.employee_id), filename])

    def save(self, *args, **kwargs):
        # Rename the file to use the employee id and current month
        if self.file:
            file_name = f"{self.uploaded_month}_{self.uploaded_year}_{self.employee_db_id.employee_id}.{self.file.name.split('.')[-1]}"
            self.file.name = self.folder_name(file_name)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"PayslipFile for Employee ID: {self.employee_db_id.employee_id}"
    
    class Meta:
        db_table = "Payslips"
        verbose_name = "Payslip"
        # verbose_name_plural = "Payslips"
