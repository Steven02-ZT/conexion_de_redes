# Generated by Django 4.2.1 on 2023-05-25 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0016_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='object_id',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
