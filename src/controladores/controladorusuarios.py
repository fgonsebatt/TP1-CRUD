from flask import jsonify,request
from app import *
from modelos.modelousuario import *
@app.route('/usuarios',methods=['GET'])
def get_Usuarios():
    all_usuarios=Usuario.query.all()     # query.all() lo hereda de db.Model
    result=usuarios_schema.dump(all_usuarios)  # .dump() lo hereda de ma.schema
    return jsonify(result)

@app.route('/usuarios/<id>',methods=['GET'])
def get_usuario(id):
    usuario=Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios/<id>',methods=['DELETE'])
def delete_usuario(id):
    usuario=Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios',methods=['POST']) # crea ruta o endpoint
def create_usuario():
    print(request.json)  # request.json contiene el json que envio el cliente
    username=request.json['username']
    passw=request.json['passw']
    email=request.json['email']
    new_usuario=Usuario(username,passw,email)
    db.session.add(new_usuario)
    db.session.commit()
    return usuario_schema.jsonify(new_usuario)

@app.route('/usuarios/<id>' ,methods=['PUT'])
def update_usuario(id):
    usuario=Usuario.query.get(id)

    username=request.json['username']
    passw=request.json['passw']
    email=request.json['email']

    usuario.username=username
    usuario.passw=passw
    usuario.email=email
    db.session.commit()
    return usuario_schema.jsonify(usuario)