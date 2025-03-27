import 'dotenv/config';
import { InstallGlobalCommands } from './utils.js';

const STATS_COMMAND = {
  name: 'stats',
  description: 'Basic command',
  type: 1,
  integration_types: [0],
  contexts: [0],
};

const ALL_COMMANDS = [STATS_COMMAND];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
