import { createClient } from 'altogic';

let envUrl = 'https://authn.c1-na.altogic.com';
let clientKey = '08afcb05e483462e848da311d0b37080';

const altogic = createClient(envUrl, clientKey);

export { altogic };
