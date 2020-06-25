# Generated by Django 3.0.6 on 2020-06-25 08:17

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='AgenteDeSaude',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(default=None, max_length=200)),
                ('cpf', models.CharField(default=None, max_length=14)),
                ('crm', models.CharField(default=None, max_length=20)),
                ('login', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AlocacaoMedica',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ativo', models.BooleanField(default=False)),
                ('medico', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.AgenteDeSaude')),
            ],
        ),
        migrations.CreateModel(
            name='Atividade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(default=None, max_length=200)),
                ('passos', models.IntegerField(default=None)),
                ('intensidade', models.IntegerField(default=1)),
                ('duracao', models.FloatField(default=None)),
                ('dataRealizada', models.DateField(default=datetime.datetime.now)),
            ],
        ),
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(default=None, max_length=200)),
                ('dataNascimento', models.DateField(default=datetime.datetime.now)),
                ('peso', models.FloatField(default=None)),
                ('grauAsma', models.IntegerField(default=0)),
                ('altura', models.FloatField(default=None)),
                ('cpf', models.CharField(default=None, max_length=14)),
                ('emEsperaDeMedico', models.BooleanField(default=True)),
                ('cadastro', models.BooleanField(default=False)),
                ('login', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='OrientacoesMedicas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensagem', models.CharField(max_length=10000)),
                ('data', models.DateField(default=datetime.datetime.now)),
                ('medico', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.AgenteDeSaude')),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente')),
            ],
        ),
        migrations.CreateModel(
            name='NotificacaoDeAtividade',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensagem', models.CharField(max_length=1000)),
                ('data', models.DateField(default=datetime.datetime.now)),
                ('ativo', models.BooleanField(default=False)),
                ('atividade', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Atividade')),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente')),
            ],
        ),
        migrations.CreateModel(
            name='MetaMensal',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('passos', models.IntegerField(default=None)),
                ('horas', models.FloatField(default=None)),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente')),
            ],
        ),
        migrations.CreateModel(
            name='DiarioDeSintomas',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tosse', models.IntegerField(default=1)),
                ('chiado', models.IntegerField(default=1)),
                ('dormir', models.IntegerField(default=1)),
                ('faltaDeAr', models.IntegerField(default=1)),
                ('bombinha', models.IntegerField(default=1)),
                ('observacao', models.CharField(max_length=10000)),
                ('data', models.DateField(default=datetime.datetime.now)),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente')),
            ],
        ),
        migrations.CreateModel(
            name='DadosFitBit',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('passos', models.IntegerField(default=None)),
                ('data', models.DateField(default=datetime.datetime.now)),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente')),
            ],
        ),
        migrations.CreateModel(
            name='Chat',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensagem', models.CharField(max_length=1000)),
                ('data', models.DateField(default=datetime.datetime.now)),
                ('ativo', models.BooleanField(default=False)),
                ('alocacao', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.AlocacaoMedica')),
                ('autor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='atividade',
            name='paciente',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente'),
        ),
        migrations.AddField(
            model_name='alocacaomedica',
            name='paciente',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='core.Paciente'),
        ),
        migrations.CreateModel(
            name='AdminSistema',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(default=None, max_length=200)),
                ('login', models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
