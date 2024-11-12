/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../mibaAPI";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    first_name
    last_name
    email
    cellphone
    skills
    roomsIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    first_name
    last_name
    email
    cellphone
    skills
    roomsIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    first_name
    last_name
    email
    cellphone
    skills
    roomsIds
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateMessage = /* GraphQL */ `subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onCreateMessage(filter: $filter) {
    id
    content
    sender
    createdAt
    chatID
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMessageSubscriptionVariables,
  APITypes.OnCreateMessageSubscription
>;
export const onUpdateMessage = /* GraphQL */ `subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
  onUpdateMessage(filter: $filter) {
    id
    content
    sender
    createdAt
    chatID
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMessageSubscriptionVariables,
  APITypes.OnUpdateMessageSubscription
>;
export const onDeleteMessage = /* GraphQL */ `subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
  onDeleteMessage(filter: $filter) {
    id
    content
    sender
    createdAt
    chatID
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMessageSubscriptionVariables,
  APITypes.OnDeleteMessageSubscription
>;
export const onCreateChat = /* GraphQL */ `subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
  onCreateChat(filter: $filter) {
    id
    title
    imageUrl
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateChatSubscriptionVariables,
  APITypes.OnCreateChatSubscription
>;
export const onUpdateChat = /* GraphQL */ `subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
  onUpdateChat(filter: $filter) {
    id
    title
    imageUrl
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateChatSubscriptionVariables,
  APITypes.OnUpdateChatSubscription
>;
export const onDeleteChat = /* GraphQL */ `subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
  onDeleteChat(filter: $filter) {
    id
    title
    imageUrl
    messages {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteChatSubscriptionVariables,
  APITypes.OnDeleteChatSubscription
>;
export const onCreateRoom = /* GraphQL */ `subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onCreateRoom(filter: $filter) {
    id
    name
    description
    imageUrl
    createdAt
    members
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateRoomSubscriptionVariables,
  APITypes.OnCreateRoomSubscription
>;
export const onUpdateRoom = /* GraphQL */ `subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
  onUpdateRoom(filter: $filter) {
    id
    name
    description
    imageUrl
    createdAt
    members
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateRoomSubscriptionVariables,
  APITypes.OnUpdateRoomSubscription
>;
export const onDeleteRoom = /* GraphQL */ `subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
  onDeleteRoom(filter: $filter) {
    id
    name
    description
    imageUrl
    createdAt
    members
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRoomSubscriptionVariables,
  APITypes.OnDeleteRoomSubscription
>;
