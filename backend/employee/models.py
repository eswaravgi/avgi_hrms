from django.db import models

class Department(models.Model):
    department = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return self.department
    
    class Meta:
        db_table = "Departments"

class Employee(models.Model):
    GENDER_CHOICES = (
        ('male','Male'),
        ('female','Female'),
        ('others','Others')
        )
    
    first_name = models.CharField(max_length=100, blank=False)
    last_name = models.CharField(max_length=100, blank=False, null=False)
    date_of_birth = models.DateField(blank=False, null=False)
    gender = models.CharField(choices=GENDER_CHOICES, max_length=10, blank=False, null=True, default=None)
    contact_number = models.BigIntegerField(blank=False, null=False, unique=True)
    department = models.ForeignKey(Department, on_delete = models.DO_NOTHING, null=True, default=None)
    designation = models.CharField(max_length=100, blank=False, null=False)
    reporting_to = models.CharField(max_length=100, blank=True, null=True,)    
    personal_mail = models.EmailField(max_length=100, blank=False, null=False, unique=True)
    company_mail = models.EmailField(max_length=100, blank=False, null=False, unique=True)
    password = models.CharField(max_length=30, blank=True)
    emp_id = models.CharField(max_length=15, blank=False, null=False, unique=True)
    address = models.TextField(max_length=500, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
        
    class Meta:
        db_table = "Employees"