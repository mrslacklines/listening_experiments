from datetime import datetime

import mongoengine as me


class ABXAnswer(me.EmbeddedDocument):
    a_template_type = me.StringField()
    b_template_type = me.StringField()
    stimulus_type = me.StringField()
    stimulus_name = me.StringField()
    time_elapsed = me.IntField()
    response_time = me.IntField()
    answer = me.StringField()
    correct = me.BooleanField()
    trial_index = me.IntField()

class MOSAnswer(me.EmbeddedDocument):
    stimulus_type = me.StringField()
    stimulus_name = me.StringField()
    time_elapsed = me.IntField()
    response_time = me.IntField()
    answer = me.IntField()
    trial_index = me.IntField()


class Results(me.Document):
    created_at = me.DateTimeField(default=datetime.now())
    abx = me.EmbeddedDocumentListField(ABXAnswer)
    mos = me.EmbeddedDocumentListField(MOSAnswer)
