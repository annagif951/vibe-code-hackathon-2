from django.shortcuts import render
from .models import AnatomyContent
from django.http import JsonResponse

def search_content(request):
    query = request.GET.get('q', '')
    results = AnatomyContent.objects.filter(title__icontains=query).values('title', 'description')
    return JsonResponse(list(results), safe=False)
