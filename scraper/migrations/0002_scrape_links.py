# Generated by Django 4.2.8 on 2023-12-29 22:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('scraper', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='scrape',
            name='links',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]