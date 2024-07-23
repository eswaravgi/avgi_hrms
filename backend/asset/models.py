from django.db import models
from employee.models import Employee
from datetime import date


class AssetInfo(models.Model):
    asset_name = models.CharField(max_length=100, null=True, blank=True)
    asset_model = models.CharField(max_length=100, blank=False, null=False, unique=True)
    asset_purchase_date = models.DateField(null=True, blank=True)
    asset_purchase_price = models.FloatField(null=True, blank=True)
    notes = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.asset_name + ' ' f"({self.asset_model})"
    
    class Meta:
        db_table = "Asset Info"
    

class Asset(models.Model):

    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('in-use', 'In-Use'),
        ('returned', 'Returned'),
    )

    asset_id = models.ForeignKey(AssetInfo, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    employee_db_id = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    provided_date = models.DateField()
    returned_date = models.DateField(default=date.today)
    status = models.CharField(choices=STATUS_CHOICES, max_length=10, blank=False, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return self.asset

    class Meta:
        db_table = "Assets"
