# Create your views here.
import json
import redis
from django.http import JsonResponse
from .models import Prompt
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

r = redis.Redis(host='localhost', port=6379, db=0, socket_connect_timeout=1)

def get_prompts(request):
    prompts = list(Prompt.objects.values())
    return JsonResponse(prompts, safe=False)

@csrf_exempt
def create_prompt(request):
    import json
    data = json.loads(request.body)

    prompt = Prompt.objects.create(
        title=data['title'],
        content=data['content'],
        complexity=data['complexity']
    )

    return JsonResponse({"id": str(prompt.id)})

def get_prompt(request, id):
    try:
        prompt = Prompt.objects.get(id=id)
    except Prompt.DoesNotExist:
        return JsonResponse({"error": "Not found"}, status=404)

    key = f"views:{id}"

    try:
        views = r.incr(key)
    except Exception as e:
        print("Redis error:", e)
        views = 1

    return JsonResponse({
        "id": str(prompt.id),
        "title": prompt.title,
        "content": prompt.content,
        "complexity": prompt.complexity,
        "view_count": views
    })

