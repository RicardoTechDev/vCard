from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'#sustituye el user name por el email para iniciar sesión en admin
    REQUIRED_FIELDS = []
