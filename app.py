import os

from experiments import application


# run the app.
if __name__ == "__main__":
    # Setting debug to True enables debug output. This line should be
    # removed before deploying a production app.
    application.debug = True
    application.run(host=os.environ.get('FLASK_RUN_HOST', '0.0.0.0'))