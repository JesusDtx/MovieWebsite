from flask import Flask, request, render_template


app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form['username']
        return f"hello {name}, POST requeest recieved"
    return render_template('TestRun_InputOutput.html')


if __name__ == "__main__":
    app.run(debug=True)

    #