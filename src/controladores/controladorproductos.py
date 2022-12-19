from flask import jsonify,request
from app import *
from modelos.modeloproducto import *
@app.route('/productos',methods=['GET'])
def get_Productos():
    all_productos=Producto.query.all()
    result=productos_schema.dump(all_productos)
    return jsonify(result)
@app.route('/productos/<id>',methods=['GET'])
def get_producto(id):
    producto=Producto.query.get(id)
    return producto_schema.jsonify(producto)
@app.route('/productos/<id>' ,methods=['PUT'])
def update_producto(id):
    producto=Producto.query.get(id)
    nombre=request.json['nombre']  # trae el valor de la clave nombre
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    descripcion=request.json['descripcion']
    producto.nombre=nombre   # crea un objeto producto
    producto.precio=precio
    producto.stock=stock
    producto.imagen=imagen
    producto.descripcion=descripcion
    db.session.commit()
    return producto_schema.jsonify(producto)  #el objeto producto los convierte a JSON
@app.route('/productos/<id>',methods=['DELETE'])
def delete_producto(id):
    producto=Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)
@app.route('/productos', methods=['POST']) # crea ruta o endpoint
def create_producto():
    print(request.json)  # request.json contiene el json que envio el cliente
    nombre=request.json['nombre']
    precio=request.json['precio']
    stock=request.json['stock']
    imagen=request.json['imagen']
    descripcion=request.json['descripcion']
    new_producto=Producto(nombre,precio,stock,imagen,descripcion)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)