'use strict';

exports.plugin = {
  name: 'receive-mail',
  register(server) {
    server.route({
      method: 'POST',
      path: '/api/receive-mail',
      options: {
        cors: {
          origin: ['*'],
        },
      },
      handler: (request, h) => {
        const subject = request.payload.subject;

        const jobId = subject.split(/\s+/)[1].split('=').pop();

	console.log(subject);

        let jobStatus = 'unknown';

        if (subject.indexOf('Began') !== -1) {
          jobStatus = 'BEGAN';
        } else if (subject.indexOf('Ended') !== -1) {
          jobStatus = 'ENDED';
        }

	if (jobStatus === 'ENDED' && subject.indexOf('ExitCode 0') === -1) {
	  return h.response('Program failed to execute').code(412);
	}

        server.publish(`/job/${jobId}`, { id: jobId, status: jobStatus});

        return h.response('ok');
      }
    });
  }
}
