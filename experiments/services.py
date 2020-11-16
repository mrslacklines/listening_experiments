import json
from datetime import datetime

from experiments.models import ABXAnswer, MOSAnswer, Results


class ResultService:

    MEANINGFUL_TYPES = ['abx', 'mos']

    @staticmethod
    def _is_stimulus_natural(stimulus):
        return 'natural' in stimulus.lower()

    @staticmethod
    def _is_stimulus_synthetic(stimulus):
        return 'synthetic' in stimulus.lower()

    @classmethod
    def _get_stimulus_type(cls, stimulus):
        stimulus_type = stimulus.split('/')[-2]
        if cls._is_stimulus_natural(stimulus_type):
            return 'natural'
        elif cls._is_stimulus_synthetic(stimulus_type):
            return 'synthetic'
        else:
            raise TypeError

    @classmethod
    def _check_abx_answer_correct(cls, answer, stimulus, a, b):
        assert a != b
        templates_dict = {'a': a, 'b': b}
        return templates_dict[answer] == stimulus

    @classmethod
    def _handle_mos_result(cls, result):
        result_dict = {
            'stimulus_type': cls._get_stimulus_type(result['stimulus']),
            'stimulus_name': result['stimulus'].split('/')[-1],
            'time_elapsed': result['time_elapsed'],
            'response_time': result['rt'],
            'answer': chr(int(result['key_press'])),
            'trial_index': result['trial_index']
        }
        return result_dict

    @classmethod
    def _handle_abx_result(cls, result, a_stimulus, b_stimulus):
        current_stimulus_type = cls._get_stimulus_type(result['stimulus'])
        answer = chr(result['key_press']).lower()
        result_dict = {
            'a_template_type': a_stimulus,
            'b_template_type': b_stimulus,
            'stimulus_type': current_stimulus_type,
            'stimulus_name': result['stimulus'].split('/')[-1],
            'time_elapsed': result['time_elapsed'],
            'response_time': result['rt'],
            'answer': answer,
            'correct': cls._check_abx_answer_correct(
            answer=answer, stimulus=current_stimulus_type, a=a_stimulus, b=b_stimulus),
            'trial_index': result['trial_index']
        }

        return result_dict

    @classmethod
    def raw_json_to_results(cls, raw_results):
        mos_answers = []
        abx_answers = []

        abx_a_stimulus = None
        abx_b_stimulus = None
        for result in raw_results:
            if result['type'] not in cls.MEANINGFUL_TYPES:
                continue
            elif result['type'] == 'mos':
                mos_result_dict = cls._handle_mos_result(result)
                mos_answers.append(MOSAnswer(**mos_result_dict))
            elif result['type'] == 'abx':
                if result['stage'] == 'a':
                    abx_a_stimulus = cls._get_stimulus_type(result['stimulus'])
                elif result['stage'] == 'b':
                    abx_b_stimulus = cls._get_stimulus_type(result['stimulus'])
                else:
                    abx_result_dict = cls._handle_abx_result(result, abx_a_stimulus, abx_b_stimulus)
                    abx_a_stimulus = None
                    abx_b_stimulus = None
                    abx_answers.append(ABXAnswer(**abx_result_dict))
        return Results(created_at=datetime.now(), mos=mos_answers, abx=abx_answers)

    @classmethod
    def get_all_results_as_json(cls):
        return Results.objects.all().to_json()