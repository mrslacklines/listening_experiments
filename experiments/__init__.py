import mongoengine as me
from flask import Flask

from experiments import settings
from experiments.views import experiment_bp


application = Flask(
    __name__,
    static_folder='/app/static'
)
application.register_blueprint(experiment_bp)

db = me.connect(
    username=settings.MONGODB_USERNAME,
    password=settings.MONGODB_PASSWORD,
    host=settings.MONGODB_HOST,
    replicaset=settings.MOGNODB_REPLICASET,
    port=settings.MONGODB_PORT,
    ssl=settings.MONGODB_SSL,
    ssl_ca_certs=settings.MONGODB_SSL_CA_CERTS
)
