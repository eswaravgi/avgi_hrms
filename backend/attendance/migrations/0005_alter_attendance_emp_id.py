# Generated by Django 5.0.3 on 2024-03-22 11:51

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0004_rename_description_holiday_holiday_and_more'),
        ('employee', '0002_department_created_at_employee_created_at_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='emp_id',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='employee.employee'),
        ),
    ]
