/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSupporter = /* GraphQL */ `
  query GetSupporter($id: ID!) {
    getSupporter(id: $id) {
      id
      email
      zip
      createdAt
      updatedAt
    }
  }
`;
export const listSupporters = /* GraphQL */ `
  query ListSupporters(
    $filter: ModelSupporterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupporters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        zip
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIssue = /* GraphQL */ `
  query GetIssue($id: ID!) {
    getIssue(id: $id) {
      id
      category
      snippet
      position
      detailedPosition
      tags
      image
      createdAt
      updatedAt
    }
  }
`;
export const listIssues = /* GraphQL */ `
  query ListIssues(
    $filter: ModelIssueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIssues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category
        snippet
        position
        detailedPosition
        tags
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      eventName
      date
      time
      location
      summary
      image
      registration {
        id
        email
        event {
          id
          eventName
          date
          time
          location
          summary
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventName
        date
        time
        location
        summary
        image
        registration {
          id
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventRegistration = /* GraphQL */ `
  query GetEventRegistration($id: ID!) {
    getEventRegistration(id: $id) {
      id
      email
      event {
        id
        eventName
        date
        time
        location
        summary
        image
        registration {
          id
          email
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEventRegistrations = /* GraphQL */ `
  query ListEventRegistrations(
    $filter: ModelEventRegistrationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventRegistrations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        event {
          id
          eventName
          date
          time
          location
          summary
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContactMessage = /* GraphQL */ `
  query GetContactMessage($id: ID!) {
    getContactMessage(id: $id) {
      id
      email
      firstName
      lastName
      message
      createdAt
      updatedAt
    }
  }
`;
export const listContactMessages = /* GraphQL */ `
  query ListContactMessages(
    $filter: ModelContactMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
