import { Icliente } from "./Icliente";
import { IclienteWithID } from "./IclienteWithID";

export interface IpageableRes {

    content: IclienteWithID[];
    pageable?: {
      pageNumber: number;
      pageSize: number;
      sort: {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last?: boolean;
    totalPages?: number;
    totalElements?: number;
    size?: number;
    number?: number;
    sort?: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    first?: boolean;
    numberOfElements?: number;
    empty?: boolean;
  }


