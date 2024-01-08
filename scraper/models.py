from django.db import models
#from django.contrib.postgres.fields import ArrayField

class scrape(models.Model):
    name = models.CharField(max_length=100)
    links = models.TextField()

    def __str__(self):
        return self.name
