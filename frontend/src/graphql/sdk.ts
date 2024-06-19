import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql-types";

const client = new GraphQLClient(`http://localhost:4000`);
const sdk = getSdk(client);

export default sdk;
