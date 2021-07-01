from django.conf.urls import url
from .views import Boards as boards

urlpatterns = [
    url('post', boards.as_view()),
]