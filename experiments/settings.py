import os

MONGODB_HOST = 'experiment-db.cluster-cmkyisl1t2wc.eu-central-1.docdb.amazonaws.com'
MONGODB_PORT = 27017
MONGODB_DB = 'experiment_results'
MONGODB_USERNAME = 'faqster'
MONGODB_PASSWORD = 'Fagrulez69!'
MONGODB_SSL = True
MONGODB_SSL_CA_CERTS = 'rds-combined-ca-bundle.pem'
MOGNODB_REPLICASET = 'rs0'
MONGODB_READ_PREFERENCE = 'secondaryPreferred'
MONGODB_RETRY_WRITES = False