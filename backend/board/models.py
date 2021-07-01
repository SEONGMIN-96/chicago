from django.db import models

class BoardVO(models.Model):
    title = models.CharField(max_length=30)
    content = models.CharField(max_length=30)

    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        managed = True

        db_table = 'posts'

    def __str__(self):
        return f'[{self.pk}] is title {self.title},' \
