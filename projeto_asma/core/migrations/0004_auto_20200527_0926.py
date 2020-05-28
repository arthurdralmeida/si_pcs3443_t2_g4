# Generated by Django 3.0.6 on 2020-05-27 12:26

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200517_1831'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='paciente',
            name='idade',
        ),
        migrations.AddField(
            model_name='paciente',
            name='altura',
            field=models.FloatField(default=None),
        ),
        migrations.AddField(
            model_name='paciente',
            name='dataNascimento',
            field=models.DateField(default=datetime.date.today),
        ),
    ]
