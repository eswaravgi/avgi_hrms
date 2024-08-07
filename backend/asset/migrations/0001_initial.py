# Generated by Django 5.0.4 on 2024-07-04 06:54

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employee', '0007_alter_employee_company_mail'),
    ]

    operations = [
        migrations.CreateModel(
            name='AssetInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asset_name', models.CharField(blank=True, max_length=100, null=True)),
                ('asset_model', models.CharField(max_length=100, unique=True)),
                ('asset_purchase_date', models.DateField(blank=True, null=True)),
                ('asset_purchase_price', models.FloatField(blank=True, null=True)),
                ('notes', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
            ],
            options={
                'db_table': 'Asset Info',
            },
        ),
        migrations.CreateModel(
            name='Asset',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('provided_date', models.DateField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('in-use', 'In-Use'), ('returned', 'Returned')], default=None, max_length=10, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('employee', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='employee.employee')),
                ('asset', models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='asset.assetinfo')),
            ],
            options={
                'db_table': 'Assets',
            },
        ),
    ]
