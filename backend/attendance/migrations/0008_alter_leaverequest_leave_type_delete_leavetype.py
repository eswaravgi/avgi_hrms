# Generated by Django 5.0.4 on 2024-07-29 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0007_rename_employee_attendance_employee_db_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaverequest',
            name='leave_type',
            field=models.CharField(choices=[('sick leave', 'Sick Leave'), ('casual leave', 'Casual Leave'), ('medical leave', 'Medical Leave')], default=None, max_length=50, null=True),
        ),
        migrations.DeleteModel(
            name='LeaveType',
        ),
    ]