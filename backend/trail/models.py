from django.db import models

class Employee(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return self.name
