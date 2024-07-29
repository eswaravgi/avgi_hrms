from django.db import models

class PolicyFile(models.Model):
    policy_name = models.CharField(max_length=255)
    file = models.FileField(upload_to='Policy_files/')
    uploaded_on = models.DateTimeField(auto_now_add=True, editable=False)

    def __str__(self):
        return f"Policy: {self.policy_name}"
