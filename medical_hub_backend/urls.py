from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("learning_content.urls")),
]
# Remove the following block from the project-level urls.pypython manage.py runserver

# CourseListView should be included in the app's urls.py, not here.
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("learning_content.urls")),  # This line connects your app!
]




