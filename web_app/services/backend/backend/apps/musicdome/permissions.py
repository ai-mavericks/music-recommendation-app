from rest_framework import permissions



class IsCreator(permissions.BasePermission):
    message = "You must be the owner of this profile."
    
    def has_object_permission(self, request, view, obj):
        return obj.user == request.user.id
    
