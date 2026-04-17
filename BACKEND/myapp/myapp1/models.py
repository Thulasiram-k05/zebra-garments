from django.db import models
from django.utils.timezone import now

class Product(models.Model):

    s_no = models.AutoField(primary_key=True)

    company_name = models.CharField(max_length=200)
    cloth = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)
    category = models.CharField(max_length=100)

    size = models.CharField(max_length=20)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    image = models.URLField(max_length=200)

    description = models.TextField()

    status = models.IntegerField(default=1)

    created_date = models.DateTimeField(default=now)
    created_by = models.IntegerField()

    updated_date = models.DateTimeField(null=True, blank=True)
    updated_by = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.company_name
