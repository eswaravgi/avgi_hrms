# Generated by Django 5.0.4 on 2024-07-04 10:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0006_rename_emp_id_attendance_employee_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='attendance',
            old_name='employee',
            new_name='employee_db_id',
        ),
        migrations.RenameField(
            model_name='leaverequest',
            old_name='employee',
            new_name='employee_db_id',
        ),
    ]