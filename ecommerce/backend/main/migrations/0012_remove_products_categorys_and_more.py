# Generated by Django 4.2.1 on 2023-05-25 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        ('main', '0011_alter_category_content_type'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='categorys',
        ),
        migrations.AlterField(
            model_name='category',
            name='content_type',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contenttypes.contenttype'),
        ),
    ]
