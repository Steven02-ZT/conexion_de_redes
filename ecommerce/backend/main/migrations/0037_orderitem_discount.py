# Generated by Django 4.2.1 on 2023-06-13 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0036_remove_shippingaddress_shippingprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='discount',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3),
        ),
    ]
