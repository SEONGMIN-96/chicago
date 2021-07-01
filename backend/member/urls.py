from member import views
from django.conf.urls import url

urlpatterns = [
    url(r'^register', views.members),
    url(r'^list', views.members),

]

'''
CBV 방식 (Class Based View)
from django.conf.urls import url
from .views import Members as members
from .views import Member as member
from django.urls import path, include
urlpatterns = [
    url('/register', members.as_view()),
    path('/<int:pk>/', member.as_view()),
]
'''