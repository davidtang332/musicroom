from django.shortcuts import render

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
    #git push test

def test1(request):
    return render(request, 'frontend/room.html')
    #git push test