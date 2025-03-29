import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

const STATS_COMMAND = {
  name: 'stats',
  description: 'View point stats!',
  type: 1,
  integration_types: [0],
  contexts: [0],
};

const POINTS_COMMAND = {
  name: 'points',
  description: 'Edit points for users',
  type: 1,
  integration_types: [0],
  contexts: [0],
};

const ALL_COMMANDS = [STATS_COMMAND, POINTS_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
