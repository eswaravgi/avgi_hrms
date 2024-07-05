# Generated by Django 5.0.4 on 2024-07-04 12:02

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0008_rename_emp_id_employee_employee_id'),
        ('payslip', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='payslipfile',
            name='emp_id',
        ),
        migrations.AddField(
            model_name='payslipfile',
            name='employee_db_id',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='employee.employee'),
        ),
    ]
