# Generated by Django 3.0.6 on 2020-05-17 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20200517_1830'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dadosfitbit',
            name='batimento',
            field=models.IntegerField(default=None),
        ),
        migrations.AlterField(
            model_name='dadosfitbit',
            name='passos',
            field=models.IntegerField(default=None),
        ),
    ]
