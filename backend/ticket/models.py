from django.db import models
from employee.models import Employee

class Ticket(models.Model):
    STATUS_CHOICES = (
        ('open', 'Open'),
        ('closed', 'Closed'),
    )

    PRIORITY_CHOICES = (
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    )

    emp_id = models.ForeignKey(Employee, on_delete=models.DO_NOTHING, blank=False, null=True, default=None)
    ticket_details = models.TextField(blank=False, null=False)
    priority = models.CharField(choices=PRIORITY_CHOICES, max_length=10, blank=False, null=True, default=None)
    status = models.CharField(choices=STATUS_CHOICES, max_length=10, blank=False, null=True, default=None)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    modified_at = models.DateTimeField(auto_now=True, editable=False)

    def __str__(self):
        return f'Ticket no. {self.sequence_number} : {self.ticket_details}'

    @property
    def sequence_number(self):
        # Calculate the sequence number based on the count of existing objects
        return str(self.calculate_sequence_number())

    def calculate_sequence_number(self):
        # Calculate the sequence number based on the count of existing objects
        return Ticket.objects.filter(created_at__lt=self.created_at).count() + 1

    class Meta:
        db_table = "Category"
