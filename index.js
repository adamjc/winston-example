const logger = require('./logger.js')

// index.js
function handler (event) {
  logger.setContext({
    eventId: `${event.eventId} (e.g. the lambda event ID)`,
    eventMessage: `${event.eventMessage} (e.g. 'build', or 'version')`
  })

  logger.info({
    'type': 'unknown_org',
    'message': `unknown org: ${event.org}`,
    'org': event.org
  })
}

handler({
  eventId: "f5edfb66-a93d-4308-857a-a1da2e97d2f1",
  eventMessage: "build",
  org: "foo"
})

handler({
  eventId: "fdd47a33-0e29-4f47-95e8-5a254a6eb82c",
  eventMessage: "version",
  org: "bar"
})