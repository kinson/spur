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
        console.log('triggered');

        // publish update to subscription for job id
        // console.log(request.payload);

        const subject = request.payload.subject;
        console.log(subject);

        const jobId = subject.split(/\s+/)[1].split('=').pop();
        console.log(jobId);

        let jobStatus = 'unknown';

        if (subject.indexOf('Began') !== -1) {
          jobStatus = 'BEGAN';
        } else if (subject.indexOf('Ended') !== -1) {
          jobStatus = 'ENDED';
        }

        server.publish(`/job/${jobId}`, { id: jobId, status: jobStatus});

        return h.response('ok');
      }
    });
  }
}