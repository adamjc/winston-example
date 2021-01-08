const { createLogger, format, transports } = require('winston')
const { timestamp, simple, prettyPrint, combine, metadata } = format

const logger = createLogger({
  format: combine(
    metadata({key: 'eventInfo'}),
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.Console()
  ]
})

logger.setContext = function (eventContext) {
  logger.defaultMeta = eventContext

  return logger
}

module.exports = logger