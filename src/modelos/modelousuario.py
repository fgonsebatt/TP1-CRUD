from app import db,app,ma
# defino la clase producto y los tipos de dato de la tabla
class Usuario(db.Model):   # la clase Usuario hereda de db.Model
    id=db.Column(db.Integer, primary_key=True)   #define los campos de la tabla
    username=db.Column(db.String(100))
    passw=db.Column(db.String(100))
    email=db.Column(db.String(100))
    def __init__(self,username,passw,email):   #crea el  constructor de la clase
        self.username=username   # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.passw=passw
        self.email=email


with app.app_context():
    db.create_all()  # crea las tablas
#  ************************************************************
class UsuarioSchema(ma.Schema):
    class Meta:
        fields=('id','username','passw','email')
usuario_schema=UsuarioSchema()            # para crear un usuario
usuarios_schema=UsuarioSchema(many=True)  # multiples registros
