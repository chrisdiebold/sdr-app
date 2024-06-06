import {version} from '../package.json'
import { Status } from './types'

export const config = {
  name: 'Sample',
  organization: 'Acme',
  version
}

export const monitoring = {
  tx1: 'off' as Status,
  tx2: 'off' as Status,
  rx1: 'off' as Status,
  rx2: 'off' as Status,
  gps: 'off' as Status
}

export const formConstraints = {
  name: {
    min: 5,
    max: 255,
  }
}