import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql-types";

const { VITE_API_PORT } = import.meta.env;

const client = new GraphQLClient(`http://localhost:${VITE_API_PORT}`);
const sdk = getSdk(client);

export default sdk;
