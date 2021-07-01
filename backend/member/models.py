from django.db import models


class MemberVO(models.Model):
    username = models.CharField(primary_key=True, max_length=10)
    password = models.TextField(max_length=10)
    name = models.CharField(max_length=30)
    email = models.EmailField()

    class Meta:
        managed = True

        db_table = 'members'

    def __str__(self):
        return f'[{self.pk} is username = {self.username},' \
