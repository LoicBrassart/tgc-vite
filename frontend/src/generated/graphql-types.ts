import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  img: Scalars['String']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createNewAd: Ad;
};


export type MutationCreateNewAdArgs = {
  data: NewAdInput;
};

export type NewAdInput = {
  category: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  imgUrl?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  tags: Array<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAdById: Ad;
  getAllAds: Array<Ad>;
  getAllCategories: Array<Category>;
  getAllTags: Array<Tag>;
};


export type QueryGetAdByIdArgs = {
  adId: Scalars['String']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type GetAllCategoriesAndTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesAndTagsQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'Category', id: number, name: string }>, getAllTags: Array<{ __typename?: 'Tag', id: number, name: string }> };

export type GetAdByIdQueryVariables = Exact<{
  adId: Scalars['String']['input'];
}>;


export type GetAdByIdQuery = { __typename?: 'Query', getAdById: { __typename?: 'Ad', id: number, title: string, description: string, owner: string, location: string, img: string, price: number } };

export type GetAllAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdsQuery = { __typename?: 'Query', getAllAds: Array<{ __typename?: 'Ad', id: number, title: string, price: number, description: string, owner: string, location: string, img: string }> };


export const GetAllCategoriesAndTagsDocument = gql`
    query GetAllCategoriesAndTags {
  getAllCategories {
    id
    name
  }
  getAllTags {
    id
    name
  }
}
    `;
export const GetAdByIdDocument = gql`
    query GetAdById($adId: String!) {
  getAdById(adId: $adId) {
    id
    title
    description
    owner
    location
    img
    price
  }
}
    `;
export const GetAllAdsDocument = gql`
    query GetAllAds {
  getAllAds {
    id
    title
    price
    description
    owner
    location
    img
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllCategoriesAndTags(variables?: GetAllCategoriesAndTagsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllCategoriesAndTagsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllCategoriesAndTagsQuery>(GetAllCategoriesAndTagsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllCategoriesAndTags', 'query', variables);
    },
    GetAdById(variables: GetAdByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAdByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAdByIdQuery>(GetAdByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAdById', 'query', variables);
    },
    GetAllAds(variables?: GetAllAdsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllAdsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllAdsQuery>(GetAllAdsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllAds', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;