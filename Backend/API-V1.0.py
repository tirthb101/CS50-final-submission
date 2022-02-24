from cs50 import SQL
from flask_cors import CORS
from flask import Flask, jsonify, request, make_response
from functools import wraps
from jwt import encode, decode
import datetime
from werkzeug.security import check_password_hash, generate_password_hash
from config import API_KEY, ip_address, DEBUG, PORT


app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = API_KEY


db = SQL("sqlite:///data.db")


def token_required(func):
    @wraps(func)
    def wraped(*args, **kwargs):
        token = request.form.get('token')
        if not token:
            return jsonify({'status': 'failed'}), 401

        try:
            data = decode(token,
                          app.config['SECRET_KEY'], 'HS256')
            if not data['lib_name'] == request.form.get('lib_name'):
                return jsonify({'status': 'failed'}), 401
        except:
            return jsonify({'status': 'failed'}), 401

        return func(*args, **kwargs)
    return wraped


@app.route('/transactions', methods=['post'])
@token_required
def transactions():
    try:
        data0 = db.execute(
            f'select * from Libs where lib_name = ?', request.form.get('lib_name'))
        lib_id = data0[0]['lib_id']
        data = db.execute(
            f'SElECT * from transactions where lib_id = ?', lib_id)

        return jsonify(data)
    except:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })


@app.route('/withdraw', methods=['post'])
@token_required
def withdraw():
    item_id = request.form.get('item_id')
    quantity = int(request.form.get('quan'))
    item_name = request.form.get('name')

    f = request.form.get('first_name')
    m = request.form.get('middle_name')
    l = request.form.get('last_name')

    user_id = db.execute(
        f'select id_user from users where first_name = ? and middle_name = ? and last_name = ?', f, m, l)

    if not quantity or quantity < 1:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })

    validiy = db.execute(
        f'select item_id from inventory where item_name = ?', item_name)

    item_id1 = validiy[0]['item_id']

    if not item_id == item_id:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })

    if item_id:
        try:
            data = db.execute(
                f'select * from Libs where lib_name = ?', request.form.get('lib_name'))
            lib_id = data[0]['lib_id']

            cdata = db.execute(
                f'SELECT * FROM inventory WHERE item_id = ?', item_id)

            if not cdata[0]['quantity'] - quantity >= 0:
                return jsonify({
                    'status': 'could not complete request',
                    'code': 401
                })

            db.execute(f'UPDATE inventory SET quantity = ? WHERE item_id = ?',
                       cdata[0]['quantity'] - quantity, item_id)
            db.execute(f'insert into transactions(item_name, item_id, quantity, tran_type, user_id, lib_id) values(?, ?, ?, ?, ?, ?)',
                       item_name, item_id, cdata[0]['quantity'] - quantity, 'WITH', int(user_id[0]['id_user']), lib_id)

            return jsonify({
                'status': 'Succes',
                'code': 200
            })
        except:
            return jsonify({
                'status': 'could not complete request',
                'code': 401
            })


@app.route('/create_profile', methods=['post'])
@token_required
def create_profile():
    f = request.form.get('first_name')
    m = request.form.get('middle_name')
    l = request.form.get('last_name')

    if not f and m and l:
        return jsonify({
            'status': 'give details',
            'code': 401
        })

    try:
        data = db.execute(
            f'insert into users(first_name, middle_name, last_name) values(?, ?, ?)', f, m, l)

        return jsonify({
            'status': 'Succes',
            'code': 200
        })

    except:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })


@app.route('/add_stock', methods=['post'])
@token_required
def add_stock():
    item_id = request.form.get('item_id')
    quantity = int(request.form.get('quan'))
    item_name = request.form.get('name')

    if (item_id):
        f = request.form.get('first_name')
        m = request.form.get('middle_name')
        l = request.form.get('last_name')

        user_id = db.execute(
            f'select id_user from users where first_name = ? and middle_name = ? and last_name = ?', f, m, l)

        item_id_from_name = db.execute(
            f'select * from inventory where item_id = ?', item_id)
        print(item_id_from_name)

        if not item_id_from_name[0]['item_name'] == (item_name):
            return jsonify({
                'status': 'could not complete request',
                'code': 401
            })

    if not quantity or quantity < 1:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })

    if item_id:
        try:
            data = db.execute(
                f'select * from Libs where lib_name = ?', request.form.get('lib_name'))
            lib_id = data[0]['lib_id']
            tran_type = request.form.get('tran_type')

            if tran_type == 'ADD':
                user = 0
            elif tran_type == 'RETURN':
                user = user_id[0]['id_user']
            cdata = db.execute(
                f'SELECT * FROM inventory WHERE item_id = ?', item_id)

            db.execute(f'UPDATE inventory SET quantity = ? WHERE item_id = ?',
                       cdata[0]['quantity'] + quantity, item_id)
            db.execute(f'insert into transactions(item_name, item_id, quantity, tran_type, user_id, lib_id) values(?, ?, ?, ?, ?, ?)',
                       item_name, item_id, quantity, tran_type, int(user), lib_id)

            return jsonify({
                'status': 'Succes',
                'code': 200
            })
        except:
            return jsonify({
                'status': 'could not complete request',
                'code': 401
            })
    else:
        try:

            data = db.execute(
                f'select * from Libs where lib_name = ?', request.form.get('lib_name'))
            lib_id = data[0]['lib_id']
            db.execute(
                f'INSERT INTO inventory(item_name, quantity, lib_id) values(?, ?, ?)', item_name, quantity, lib_id)

            query = db.execute(
                f'select * from inventory where  item_name = ?', item_name)
            db.execute(f'insert into transactions(item_name, item_id, quantity, tran_type, user_id, lib_id) values(?, ?, ?, ?, ?, ?)',
                       item_name, query[0]['item_id'], quantity, 'ADD', 0, lib_id)

            return jsonify({
                'status': 'Succes',
                'code': 200
            })
        except:
            return jsonify({
                'status': 'could not complete request',
                'code': 401
            })


@ app.route('/', methods=['post'])
@ token_required
def home():
    try:
        data = db.execute(
            f'select * from Libs where lib_name = ?', request.form.get('lib_name'))
        lib_id = data[0]['lib_id']
        data2 = db.execute(f'select * from inventory where lib_id = ?', lib_id)
        return jsonify(data2), 200
    except:
        return jsonify({
            'status': 'could not complete request',
            'code': 401
        })


@ app.route('/login', methods=['post'])
def login():

    if not request.form.get("lib_name"):
        return "must provide details", 400

    elif not request.form.get("lib_pass"):
        return "must provide details", 400

    try:
        data = db.execute('SELECT * FROM Libs WHERE lib_name = ?',
                          request.form.get('lib_name'))

        if not len(data) > 0 or not check_password_hash(data[0]['lib_pass'], request.form.get('lib_pass')):
            return jsonify({
                'data': '',
                'status': 'failed to AUTHENTICAT',
                'code': 401
            })

        token = encode({
            'lib_name': request.form.get('lib_name'),
            'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=9000)},
            app.config['SECRET_KEY']
        )

        return jsonify({
            'data': token,
            'status': 'Succes',
            'code': 200
        })
    except:
        return jsonify({
            'data': '',
            'status': 'error',
            'code': 401
        })


@ app.route('/register', methods=['POST'])
def register():

    if not request.form.get("lib_name"):
        return "must provide details", 400

    elif not request.form.get("lib_pass"):
        return "must provide details", 400

    data = db.execute('SELECT * FROM Libs WHERE lib_name = ?',
                      request.form.get('lib_name'))

    if not len(data) == 0:
        return jsonify({
            'data': '',
            'status': 'account with this username already exist',
            'code': 401
        })

    try:
        db.execute(f"insert into Libs(lib_name, lib_pass) values(?, ?)",
                   request.form.get("lib_name"), generate_password_hash(request.form.get("lib_pass")))

        token = encode({
            'lib_name': request.form.get('lib_name'),
            'lib_pass': request.form.get('lib_pass')},
            app.config['SECRET_KEY']
        )

        return jsonify({
            'data': token,
            'status': 'Succes',
            'code': 200
        })

    except:
        return jsonify({
            'data': '',
            'status': 'error',
            'code': 401
        })


@app.route('/validate', methods=['post'])
@token_required
def validate():
    return jsonify({
        'status': 200
    })


if __name__ == "__main__":
    app.run(ip_address, debug=DEBUG, port=PORT)
