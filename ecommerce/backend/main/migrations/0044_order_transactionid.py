# Generated by Django 4.2.1 on 2023-07-13 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0043_remove_order_user_order_user_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='transactionId',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
