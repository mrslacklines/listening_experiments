import json
import os
from datetime import datetime

from flask import Blueprint, render_template, request, Response

from experiments.services import ResultService

experiment_bp = Blueprint('experiment_bp', __name__)


WITTGENSTEIN_QUOTE = "Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt."


@experiment_bp.route('/')
def healthcheck():
    return WITTGENSTEIN_QUOTE


@experiment_bp.route('/experiment')
def experiment():
    return render_template('experiment.html')


@experiment_bp.route('/save-results', methods=['POST',])
def save_results():
    raw_results = request.get_json()
    results = ResultService.raw_json_to_results(raw_results)
    results.save()
    return Response(json.dumps(results.to_json()))

@experiment_bp.route('/get-results')
def get_results():
    return Response(ResultService.get_all_results_as_json())
