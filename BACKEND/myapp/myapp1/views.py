
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from django.views.decorators.csrf import csrf_exempt
from .serializers import ProductSerializer

# GET ALL + POST
@csrf_exempt
@api_view(['GET', 'POST'])

def product_list(request):
    if request.method == 'GET':
        products = Product.objects.all().order_by('-s_no')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


# GET ONE + UPDATE + DELETE
@csrf_exempt
@api_view(['GET', 'PUT', 'DELETE'])
def product_detail(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({"error": "Not found"})

    if request.method == 'GET':
        return Response(ProductSerializer(product).data)

    if request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    if request.method == 'DELETE':
        product.delete()
        return Response({"message": "Deleted"})


