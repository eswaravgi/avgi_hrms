# Generated by Django 5.0.4 on 2024-04-18 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0006_alter_employee_company_mail_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='company_mail',
            field=models.EmailField(max_length=100),
        ),
    ]
