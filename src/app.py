from flask import Flask ,jsonify,request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask import render_template  # incluimos para el renderizado de template

app=Flask(__name__)
CORS(app)

#configuro la base de datos, con el nombre el usuario y la clave
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://felipegonsebatt:12felipe34@felipegonsebatt.mysql.pythonanywhere-services.com/felipegonsebatt$TP1'
#                  driveBaseDatosMySQL://user:clave@URLBaseDatos/nombreBaseDatos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db= SQLAlchemy(app)
ma=Marshmallow(app)

from controladores.controladorproductos import *
from controladores.controladorusuarios import *
from modelos.modeloproducto import *
from modelos.modelousuario import *


@app.route('/')
def hello_world():
    return 'Hello from Flask!'

