from django.db import models


class Department(models.Model):
    department = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.department
    
    class Meta:
        db_table = "Departments"

class Designation(models.Model):
    department = models.ForeignKey(Department, on_delete = models.DO_NOTHING, default = None)
    designation = models.CharField(max_length=100, unique=False)
    # designation = models.ManyToManyField(Department, null=True)

    def __str__(self):
        return self.designation
        
    class Meta:
        db_table = "Designations"