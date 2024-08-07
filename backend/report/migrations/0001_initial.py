# Generated by Django 5.0.4 on 2024-07-26 11:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PolicyFile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('policy_name', models.CharField(max_length=255)),
                ('file', models.FileField(upload_to='policy_files/')),
                ('uploaded_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
