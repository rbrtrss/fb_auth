import winston from 'winston';

const loggerConfiguration = {
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'MMM-DD-YYYY HH:mm:ss',
    }),
    winston.format.colorize(),
    winston.format.printf(
      (info) => `${info.level} |  ${[info.timestamp]} | ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console({ timestamp: true, level: 'debug' }),
    new winston.transports.File({
      filename: 'warn.log',
      level: 'warn',
      timestamp: true,
    }),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error',
      timestamp: true,
    }),
  ],
};

const logger = winston.createLogger(loggerConfiguration);

export default logger;
