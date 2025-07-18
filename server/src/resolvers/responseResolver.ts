import { v4 as uuid } from 'uuid';
import { forms, responses } from '../store/store';
import { ResponseInput, Response as GQLResponse } from '../types';

export const responseResolver = {
  Query: {
    responses: (
      _: unknown,
      { formId }: { formId: GQLResponse['formId'] },
    ): GQLResponse[] =>
      Array.from(responses.values()).filter(r => r.formId === formId),
  },

  Mutation: {
    submitResponse: (_: unknown, input: ResponseInput): GQLResponse => {
      const { formId, answers } = input;

      const form = forms.get(formId);
      if (!form) {
        throw new Error('Form not found');
      }

      const validQuestionIds = new Set(form.questions.map(q => q.id));
      for (const answer of answers) {
        if (!validQuestionIds.has(answer.questionId)) {
          throw new Error(`Invalid questionId: ${answer.questionId}`);
        }
      }

      const response: GQLResponse = {
        id: uuid(),
        formId,
        answers,
      };

      responses.set(response.id, response);
      return response;
    },
  },
};
