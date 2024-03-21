import { Multisig as Create } from './create';
import { Multisig as GetInfo } from './get-info';
import { Multisig as IsAddress } from './is-address';

/** @namespace */
export const Multisig = { ...Create, ...GetInfo, ...IsAddress };
