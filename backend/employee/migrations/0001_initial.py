# Generated by Django 5.0.3 on 2024-03-20 18:30

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department', models.CharField(max_length=100, unique=True)),
            ],
            options={
                'db_table': 'Departments',
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('others', 'Others')], default=None, max_length=10, null=True)),
                ('contact_number', models.BigIntegerField(unique=True)),
                ('designation', models.CharField(max_length=100)),
                ('reporting_to', models.CharField(blank=True, max_length=100, null=True)),
                ('personal_mail', models.EmailField(max_length=100, unique=True)),
                ('company_mail', models.EmailField(max_length=100, unique=True)),
                ('password', models.CharField(blank=True, max_length=30, null=True)),
                ('emp_id', models.CharField(max_length=15, unique=True)),
                ('address', models.TextField(max_length=500)),
                ('department', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='employee.department')),
            ],
            options={
                'db_table': 'Employees',
            },
        ),
    ]
