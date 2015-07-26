import flask
from flask import Flask, render_template, url_for


app = Flask(__name__)

data = {
	"Appointments": [
		{"ID": 1, "PatientName": "Jeo Schmo", "Time": "1437851817000"},
		{"ID": 2, "PatientName": "Jon Doe", "Time": "1437855817000"},
		{"ID": 3, "PatientName": "Mike Psych", "Time": "1437856517000"},
	]
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/appointments')
def get_latest_appointments():
	json = {"data": data["Appointments"]}
	print(str(json))
	return flask.jsonify(**json)

if __name__ == '__main__':
	app.debug = True
	app.run(host='0.0.0.0')
