# Generated by Django 5.0.4 on 2024-07-02 13:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ticket', '0003_alter_ticket_emp_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ticket',
            old_name='emp_id',
            new_name='employee',
        ),
    ]
